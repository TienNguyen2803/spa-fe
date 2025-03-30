import React, { useState, useCallback, useMemo } from "react";
import { useNavigation, HttpError } from "@refinedev/core";
import { List, useDataGrid } from "@refinedev/mui";
import {
  Box,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Avatar,
  Typography,
  Chip,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Clear as ClearIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Link as LinkIcon,
} from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { ISpa } from "./types/spa";
// Importing the custom List component
import { ListRefineCustom } from "../../../components/List";

export default function ListSpaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { push } = useNavigation();

  const {
    dataGridProps,
    tableQueryResult: { data: tableData, isLoading, isError },
    setFilters,
  } = useDataGrid<ISpa, HttpError>({
    resource: "spa-info",
    pagination: {
      pageSize: 10,
    },
    sorters: {
      initial: [
        {
          field: "name",
          order: "asc",
        },
      ],
    },
    filters: {
      initial: [
        {
          field: "q",
          operator: "contains",
          value: searchTerm,
        },
      ],
    },
  });

  const handleSearch = useCallback(() => {
    setFilters([
      {
        field: "q",
        operator: "contains",
        value: searchTerm,
      },
    ]);
  }, [searchTerm, setFilters]);

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
    setFilters([
      {
        field: "q",
        operator: "contains",
        value: "",
      },
    ]);
  }, [setFilters]);

  const handleEdit = useCallback(
    (id: number) => {
      push(`/spas/edit/${id}`);
    },
    [push],
  );

  const handleCreate = useCallback(() => {
    push("/spas/create");
  }, [push]);

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "index",
        headerName: "No.",
        width: 70,
        renderCell: (params: any) => {
          console.log(params);
          try {
            // Lấy index của hàng trong trang hiện tại
            const rowIndexInPage = params.api.getRowIndexRelativeToVisibleRows
              ? params.api.getRowIndexRelativeToVisibleRows(params.row.id)
              : params.api.getRowIndex(params.row.id) %
                params.api.getPageSize();

            // Tính toán STT dựa trên trang hiện tại
            const currentPage = params.api.state?.pagination?.page || 0;
            const pageSize = params.api.state?.pagination?.pageSize || 10;

            return currentPage * pageSize + rowIndexInPage + 1;
          } catch (error) {
            console.warn("Error calculating row number:", error);
            return "-";
          }
        },
        sortable: false,
        filterable: false,
        disableColumnMenu: true,
        headerAlign: "center",
        align: "center",
      },
      {
        field: "name",
        headerName: "Tên Spa",
        width: 200,
        renderCell: (params) => (
          <Tooltip title={params.value} arrow>
            <Typography noWrap>{params.value}</Typography>
          </Tooltip>
        ),
      },
      {
        field: "logo_url",
        headerName: "Logo",
        width: 120,
        renderCell: (params) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Avatar
              src={params.value}
              alt={params.row.name}
              variant="rounded"
              sx={{
                width: 50,
                height: 50,
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                },
              }}
            />
          </Box>
        ),
        sortable: false,
      },
      {
        field: "address",
        headerName: "Địa chỉ",
        width: 300,
        renderCell: (params) => (
          <Tooltip title={params.value} arrow>
            <Typography noWrap>{params.value}</Typography>
          </Tooltip>
        ),
      },
      {
        field: "phone",
        headerName: "Số điện thoại",
        width: 150,
        renderCell: (params) => (
          <Chip
            icon={<LinkIcon fontSize="small" />}
            label={params.value}
            variant="outlined"
            size="small"
            onClick={() => window.open(`tel:${params.value}`)}
            clickable
          />
        ),
      },
      {
        field: "email",
        headerName: "Email",
        width: 250,
        renderCell: (params) => (
          <Tooltip title={params.value} arrow>
            <Chip
              icon={<LinkIcon fontSize="small" />}
              label={params.value}
              variant="outlined"
              size="small"
              onClick={() => window.open(`mailto:${params.value}`)}
              clickable
              sx={{ maxWidth: 230 }}
            />
          </Tooltip>
        ),
      },
      {
        field: "social_media",
        headerName: "Mạng xã hội",
        width: 150,
        renderCell: (params) => (
          <Box sx={{ display: "flex", gap: 1 }}>
            {params.row.facebook_url && (
              <Tooltip title="Facebook" arrow>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => window.open(params.row.facebook_url, "_blank")}
                >
                  <FacebookIcon />
                </IconButton>
              </Tooltip>
            )}
            {params.row.instagram_url && (
              <Tooltip title="Instagram" arrow>
                <IconButton
                  size="small"
                  color="secondary"
                  onClick={() =>
                    window.open(params.row.instagram_url, "_blank")
                  }
                >
                  <InstagramIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        ),
      },
      {
        field: "actions",
        headerName: "Hành động",
        width: 150,
        renderCell: (params) => (
          <Box sx={{ display: "flex", gap: 1 }}>
            <Tooltip title="Chỉnh sửa" arrow>
              <IconButton
                color="primary"
                onClick={() => handleEdit(params.row.id)}
                size="small"
              >
                <EditIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa" arrow>
              <IconButton color="error" size="small">
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        ),
      },
    ],
    [handleEdit],
  );

  return (
    <ListRefineCustom
      canCreate={false}
      title={<p>Danh sách Spa</p>}
      headerProps={{
        sx: {
          padding: "4px 16px", // giảm padding
          height: "auto", // cho phép chiều cao tự động điều chỉnh
          minHeight: "40px", // đặt chiều cao tối thiểu
          "& .MuiCardHeader-content": {
            margin: 0, // giảm margin
          },
          "& .MuiCardHeader-title": {
            fontSize: "16px", // giảm kích thước font
            lineHeight: 1.2, // giảm line height
          },
        },
      }}
      // Passing the DataGrid props to the custom List component
      dataGridProps={dataGridProps}
      columns={columns}
      isLoading={isLoading}
      isError={isError}
      handleSearch={handleSearch}
      handleClearSearch={handleClearSearch}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleCreate={handleCreate}
      handleEdit={handleEdit}
    />
  );
}