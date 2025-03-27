import React, { useState, useMemo } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Chip,
  IconButton,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  FilterList as FilterListIcon,
  Clear as ClearIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";

interface SpaService {
  id: number;
  name: string;
  category: string;
  duration: number;
  price: number;
  status: "active" | "inactive";
  createdAt: string;
}

const spaServices: SpaService[] = [
  {
    id: 1,
    name: "Massage Toàn Thân",
    category: "Massage",
    duration: 60,
    price: 500000,
    status: "active",
    createdAt: "2025-03-15",
  },
  {
    id: 2,
    name: "Facial Cao Cấp",
    category: "Chăm sóc da",
    duration: 90,
    price: 750000,
    status: "active",
    createdAt: "2025-03-20",
  },
  {
    id: 3,
    name: "Tẩy Da Chết",
    category: "Chăm sóc da",
    duration: 45,
    price: 350000,
    status: "inactive",
    createdAt: "2025-03-10",
  },
];

export default function ListSpaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const categories = Array.from(
    new Set(spaServices.map((item) => item.category)),
  );

  const filteredData = useMemo(() => {
    return spaServices.filter((service) => {
      const matchesSearch = service.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter
        ? service.category === categoryFilter
        : true;
      const matchesStatus = statusFilter
        ? service.status === statusFilter
        : true;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchTerm, categoryFilter, statusFilter]);

  const clearAllFilters = () => {
    setSearchTerm("");
    setCategoryFilter("");
    setStatusFilter("");
  };

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      align: "center",
      headerAlign: "center",
    },
    { field: "name", headerName: "Tên dịch vụ", flex: 1, minWidth: 200 },
    { field: "category", headerName: "Danh mục", width: 150 },
    {
      field: "duration",
      headerName: "Thời gian (phút)",
      type: "number",
      width: 150,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "Giá (VNĐ)",
      type: "number",
      width: 150,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "status",
      headerName: "Trạng thái",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params: GridRenderCellParams<SpaService>) => (
        <Chip
          label={params.value === "active" ? "Hoạt động" : "Ngừng hoạt động"}
          color={params.value === "active" ? "success" : "default"}
          size="small"
        />
      ),
    },
    {
      field: "createdAt",
      headerName: "Ngày tạo",
      width: 130,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "Thao tác",
      width: 150,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams<SpaService>) => (
        <Box>
          <Tooltip title="Xem chi tiết">
            <IconButton size="small" color="info">
              <VisibilityIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Chỉnh sửa">
            <IconButton size="small" color="primary">
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Xóa">
            <IconButton size="small" color="error">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
          mt: 2,
        }}
      >
        <Typography variant="h5" component="h1">
          Quản Lý Dịch Vụ Spa
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          size="medium"
        >
          Thêm Dịch Vụ Mới
        </Button>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }} elevation={2}>
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <FilterListIcon sx={{ mr: 1 }} fontSize="small" />
            Bộ lọc tìm kiếm
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label="Tìm kiếm dịch vụ"
              variant="outlined"
              size="small"
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <IconButton size="small" onClick={() => setSearchTerm("")}>
                      <ClearIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel>Danh mục</InputLabel>
              <Select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                label="Danh mục"
              >
                <MenuItem value="">Tất cả danh mục</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl size="small" fullWidth variant="outlined">
              <InputLabel>Trạng thái</InputLabel>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                label="Trạng thái"
              >
                <MenuItem value="">Tất cả trạng thái</MenuItem>
                <MenuItem value="active">Đang hoạt động</MenuItem>
                <MenuItem value="inactive">Ngừng hoạt động</MenuItem>
              </Select>
            </FormControl>

            <Button
              variant="outlined"
              size="medium"
              onClick={clearAllFilters}
              disabled={!searchTerm && !categoryFilter && !statusFilter}
              startIcon={<ClearIcon />}
              sx={{ minWidth: "120px" }}
            >
              Xóa lọc
            </Button>
          </Stack>
        </Box>
      </Paper>

      <Paper sx={{ height: 500, width: "100%" }} elevation={3}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
          disableRowSelectionOnClick
          getRowClassName={(params) =>
            params.row.status === "inactive" ? "inactive-row" : ""
          }
          sx={{
            border: "none",
            "& .inactive-row": {
              bgcolor: "rgba(0, 0, 0, 0.04)",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "rgba(0, 0, 0, 0.04)",
              fontWeight: "bold",
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: false,
              printOptions: { disableToolbarButton: true },
              csvOptions: { disableToolbarButton: false },
            },
          }}
          localeText={{
            footerRowSelected: (count) => `${count} dịch vụ đã chọn`,
            toolbarExport: "Xuất dữ liệu",
            toolbarExportCSV: "Tải xuống CSV",
            toolbarFilters: "Lọc",
            toolbarColumns: "Cột",
            toolbarDensity: "Hiển thị",
            toolbarDensityComfortable: "Thoải mái",
            toolbarDensityStandard: "Tiêu chuẩn",
            toolbarDensityCompact: "Gọn gàng",
            columnsPanelTextFieldLabel: "Tìm cột",
            columnsPanelTextFieldPlaceholder: "Tên cột",
            columnsPanelShowAllButton: "Hiện tất cả",
            columnsPanelHideAllButton: "Ẩn tất cả",
            noRowsLabel: "Không có dữ liệu",
          }}
        />
      </Paper>
    </Container>
  );
}
