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
        width: 80,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
          const index = params.api.getRowIndexRelativeToCurrentPage(params.row.id);
          return (
            <Typography variant="body2" fontWeight="500">
              {index + 1}
            </Typography>
          );
        },
        sortable: false,
        filterable: false,
      },
      {
        field: "name",
        headerName: "Tên Spa",
        flex: 1,
        minWidth: 200,
        renderCell: (params) => (
          <Tooltip title={params.value} arrow>
            <Typography variant="body2" noWrap sx={{ fontWeight: 500 }}>
              {params.value}
            </Typography>
          </Tooltip>
        ),
      },
      {
        field: "logo_url",
        headerName: "Logo",
        width: 120,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => (
          <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <Tooltip title={`Logo ${params.row.name}`} arrow>
              <Avatar
                src={params.value}
                alt={params.row.name}
                variant="rounded"
                sx={{
                  width: 50,
                  height: 50,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                  boxShadow: 1,
                  transition: "all 0.2s ease-in-out",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 2,
                    borderColor: "primary.main",
                  },
                  p: 0.5,
                }}
                onClick={() => window.open(params.value, '_blank')}
              />
            </Tooltip>
          </Box>
        ),
      },
      {
        field: "address",
        headerName: "Địa chỉ",
        flex: 1.5,
        minWidth: 250,
        renderCell: (params) => (
          <Tooltip title={params.value} arrow>
            <Typography variant="body2" noWrap>
              {params.value}
            </Typography>
          </Tooltip>
        ),
      },
      {
        field: "phone",
        headerName: "Số điện thoại",
        width: 160,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => (
          <Chip
            icon={<LinkIcon sx={{ fontSize: 16 }} />}
            label={params.value}
            variant="outlined"
            size="small"
            onClick={() => window.open(`tel:${params.value}`)}
            clickable
            sx={{ 
              '& .MuiChip-label': { 
                fontSize: '0.875rem',
                px: 1
              }
            }}
          />
        ),
      },
      {
        field: "email",
        headerName: "Email",
        flex: 1,
        minWidth: 200,
        renderCell: (params) => (
          <Tooltip title={params.value} arrow>
            <Chip
              icon={<LinkIcon sx={{ fontSize: 16 }} />}
              label={params.value}
              variant="outlined"
              size="small"
              onClick={() => window.open(`mailto:${params.value}`)}
              clickable
              sx={{ 
                maxWidth: '100%',
                '& .MuiChip-label': {
                  fontSize: '0.875rem',
                  px: 1,
                  textOverflow: 'ellipsis'
                }
              }}
            />
          </Tooltip>
        ),
      },
      {
        field: "social_media",
        headerName: "Mạng xã hội",
        width: 120,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => (
          <Box sx={{ display: "flex", gap: 0.5, justifyContent: "center" }}>
            {params.row.facebook_url && (
              <Tooltip title="Facebook" arrow>
                <IconButton
                  size="small"
                  color="primary"
                  onClick={() => window.open(params.row.facebook_url, "_blank")}
                  sx={{ '&:hover': { bgcolor: 'primary.light' } }}
                >
                  <FacebookIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            )}
            {params.row.instagram_url && (
              <Tooltip title="Instagram" arrow>
                <IconButton
                  size="small"
                  color="secondary"
                  onClick={() => window.open(params.row.instagram_url, "_blank")}
                  sx={{ '&:hover': { bgcolor: 'secondary.light' } }}
                >
                  <InstagramIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        ),
      },
      {
        field: "actions",
        headerName: "Hành động",
        width: 120,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => (
          <Box sx={{ display: "flex", gap: 0.5, justifyContent: "center" }}>
            <Tooltip title="Chỉnh sửa" arrow>
              <IconButton
                color="primary"
                onClick={() => handleEdit(params.row.id)}
                size="small"
                sx={{ '&:hover': { bgcolor: 'primary.light' } }}
              >
                <EditIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Xóa" arrow>
              <IconButton 
                color="error" 
                size="small"
                sx={{ '&:hover': { bgcolor: 'error.light' } }}
              >
                <DeleteIcon sx={{ fontSize: 20 }} />
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
    </List>
  );
}