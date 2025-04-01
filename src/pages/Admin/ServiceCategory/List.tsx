import React, { useState, useCallback, useMemo } from "react";
import { useNavigation, HttpError } from "@refinedev/core";
import { useDataGrid } from "@refinedev/mui";
import {
  Box,
  IconButton,
  Avatar,
  Typography,
  Chip,
  Tooltip,
  CircularProgress,
  Button,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { IServiceCategory } from "./types";
import { ListRefineCustom } from "../../../components/List/ListRefineCustom";
import { SearchBar } from "../Spas/components/SearchBar";

export default function ListServiceCategoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { push } = useNavigation();

  const {
    dataGridProps,
    tableQueryResult: { isLoading, isError },
    setFilters,
  } = useDataGrid<IServiceCategory, HttpError>({
    resource: "service-categories",
    pagination: {
      pageSize: 10,
    },
    sorters: {
      initial: [{ field: "order", order: "asc" }],
    },
  });

  const handleSearch = useCallback(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      setFilters([], "replace");
    } else {
      setFilters([
        {
          operator: "or",
          value: [
            {
              field: "name",
              operator: "contains",
              value: searchTerm,
            },
            {
              field: "description",
              operator: "contains",
              value: searchTerm,
            },
          ],
        },
      ]);
    }
  }, [searchTerm, setFilters]);

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
    setFilters([]);
  }, [setFilters]);

  const handleEdit = useCallback(
    (id: number) => {
      push(`/service-categories/edit/${id}`);
    },
    [push],
  );

  const columns: GridColDef[] = useMemo(
    () => [
      {
        field: "index",
        headerName: "No.",
        width: 70,
        renderCell: (params: any) => {
          try {
            const rowIndexInPage = params.api.getRowIndexRelativeToVisibleRows
              ? params.api.getRowIndexRelativeToVisibleRows(params.row.id)
              : params.api.getRowIndex(params.row.id) %
                params.api.getPageSize();
            const currentPage = params.api.state?.pagination?.page || 0;
            const pageSize = params.api.state?.pagination?.pageSize || 10;
            return currentPage * pageSize + rowIndexInPage + 1;
          } catch (error) {
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
        headerName: "Tên Danh Mục",
        width: 200,
        renderCell: (params) => (
          <Tooltip title={params.value} arrow>
            <Typography noWrap>{params.value}</Typography>
          </Tooltip>
        ),
      },
      {
        field: "image_url",
        headerName: "Hình Ảnh",
        width: 120,
        renderCell: (params) => (
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
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
      },
      {
        field: "description",
        headerName: "Mô Tả",
        width: 300,
        renderCell: (params) => (
          <Tooltip title={params.value} arrow>
            <Typography noWrap>{params.value}</Typography>
          </Tooltip>
        ),
      },
      {
        field: "order",
        headerName: "Thứ Tự",
        width: 100,
        type: "number",
      },
      {
        field: "is_active",
        headerName: "Trạng Thái",
        width: 120,
        renderCell: (params) => (
          <Chip
            label={params.value ? "Hoạt động" : "Không hoạt động"}
            color={params.value ? "success" : "error"}
            size="small"
          />
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
      canCreate={true}
      title={
        <Typography fontWeight={"bold"}>Danh sách Danh Mục Dịch Vụ</Typography>
      }
    >
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        handleClearSearch={handleClearSearch}
        placeholder="Tìm kiếm theo tên và mô tả"
      />

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
              `category-row-${params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"}`
            }
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              "& .MuiDataGrid-main": { padding: "12px" },
              "& .MuiDataGrid-row": {
                borderBottom: "1px solid #f0f0f0",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.02)" },
              },
              "& .category-row-even": {
                backgroundColor: "rgba(0, 0, 0, 0.01)",
              },
              "& .MuiDataGrid-cell": {
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: "2px solid #f0f0f0",
                bgcolor: "#fafafa",
                fontWeight: "600",
                fontSize: "0.875rem",
                color: "#333",
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