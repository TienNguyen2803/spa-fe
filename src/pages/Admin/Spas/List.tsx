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
import { ListRefineCustom } from "../../../components/List/ListRefineCustom";

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
    [],
  );

  return (
    <ListRefineCustom
      title={<Typography fontWeight={"bold"}>Danh sách Spa</Typography>}
    >
      {/* Start Search component */}
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "background.paper",
          borderRadius: 1,
          mb: 2,
          boxShadow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            flexGrow: 1,
            maxWidth: 800,
          }}
        >
          <Box sx={{ display: "flex", gap: 1, width: "100%" }}>
            <TextField
              label="Tìm kiếm"
              placeholder="Tìm theo tên, địa chỉ hoặc email..."
              variant="outlined"
              size="small"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={handleClearSearch}>
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                minWidth: "120px",
                height: "40px",
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              Tìm kiếm
            </Button>
          </Box>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleCreate}
          sx={{
            bgcolor: "success.main",
            "&:hover": { bgcolor: "success.dark" },
          }}
        >
          Tạo Spa
        </Button>
      </Box>
      {/* End Search component */}
      {isError ? (
        <Box sx={{ p: 3, textAlign: "center" }}>
          <Typography color="error" variant="h6">
            Đã xảy ra lỗi khi tải dữ liệu. Vui lòng thử lại sau.
          </Typography>
          <Button
            sx={{ mt: 2 }}
            variant="outlined"
            onClick={() => location.reload()}
          >
            Tải lại trang
          </Button>
        </Box>
      ) : (
        <Box sx={{ position: "relative" }}>
          <DataGrid
            {...dataGridProps}
            rows={dataGridProps.rows || []}
            columns={columns}
            autoHeight
            disableColumnMenu
            disableRowSelectionOnClick
            loading={isLoading}
            getRowClassName={(params) =>
              `spa-row-${params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"}`
            }
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              "& .MuiDataGrid-main": {
                padding: "12px",
              },
              "& .MuiDataGrid-row": {
                borderBottom: "1px solid #f0f0f0",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.02)",
                },
              },
              "& .spa-row-even": {
                backgroundColor: "rgba(0, 0, 0, 0.01)",
              },
              "& .MuiDataGrid-cell": {
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: "2px solid #f0f0f0",
                bgcolor: "#fafafa",
                fontWeight: "600",
                fontSize: "0.875rem",
                color: "#333",
              },
              "& .MuiDataGrid-columnHeader": {
                padding: "12px 16px",
              },
            }}
          />
          {isLoading && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                zIndex: 9,
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Box>
      )}
    </ListRefineCustom>
  );
}
