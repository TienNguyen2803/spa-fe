import React, { useState, useCallback, useMemo } from "react";
import { useTable, useNavigation, HttpError } from "@refinedev/core";
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
import {
  DataGrid,
  GridColDef,
  GridPaginationModel,
  GridSortModel,
} from "@mui/x-data-grid";

interface Spa {
  id: number;
  name: string;
  logo_url: string;
  address: string;
  phone: string;
  email: string;
  seo_title: string;
  seo_description: string;
  facebook_url: string;
  instagram_url: string;
}

export default function ListSpaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { push } = useNavigation();

  const {
    dataGridProps,
    tableQueryResult: { data: tableData, isLoading, isError },
    filters,
    setFilters,
    setCurrent,
    setSorting,
  } = useDataGrid<Spa, HttpError>({
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
        renderCell: (params) => {
          try {
            // Lấy thông tin pagination hiện tại
            const paginationModel = params.api.getPaginationModel
              ? params.api.getPaginationModel()
              : { page: 0, pageSize: 10 };

            // Lấy index của hàng trong danh sách hiển thị
            const rowIndex = params.api.getRowIndex(params.id);

            // Tính toán số thứ tự dựa trên trang hiện tại và kích thước trang
            return (
              paginationModel.page * paginationModel.pageSize + rowIndex + 1
            );
          } catch (error) {
            // Xử lý trường hợp không lấy được index
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
    <List>
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
            gap: 2,
            alignItems: "center",
            flexGrow: 1,
            maxWidth: 600,
          }}
        >
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
              backgroundColor: "#1976d2",
              "&:hover": { backgroundColor: "#1565c0" },
            }}
          >
            Tìm kiếm
          </Button>
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
            checkboxSelection
            disableColumnMenu={false}
            disableRowSelectionOnClick={false}
            loading={isLoading}
            getRowClassName={(params) =>
              `spa-row-${params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"}`
            }
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 1,
              "& .MuiDataGrid-row": {
                borderBottom: "1px solid #e0e0e0",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                },
              },
              "& .spa-row-even": {
                backgroundColor: "rgba(0, 0, 0, 0.02)",
              },
              "& .MuiDataGrid-cell": {
                borderRight: "1px solid #e0e0e0",
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: "2px solid #e0e0e0",
                bgcolor: "#f5f5f5",
                fontWeight: "bold",
              },
              "& .MuiDataGrid-columnHeader": {
                borderRight: "1px solid #e0e0e0",
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
    </List>
  );
}
