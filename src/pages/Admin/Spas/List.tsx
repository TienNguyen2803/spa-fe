import React, { useState, useMemo } from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  Typography,
  TextField,
  Stack,
  IconButton,
  InputAdornment,
  Tooltip,
} from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Clear as ClearIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";

interface Spa {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  facebook_url: string;
  instagram_url: string;
  logo_url: string;
  seo_title: string;
  seo_description: string;
}

const spas: Spa[] = [
  {
    id: 1,
    name: "Luxury Spa",
    logo_url: "https://example.com/logo.png",
    address: "123 Spa Street",
    phone: "+1234567890",
    email: "contact@luxuryspa.com",
    description: "Welcome to our luxury spa...",
    seo_title: "Luxury Spa - Relaxation & Wellness",
    seo_description: "Experience ultimate relaxation...",
    facebook_url: "https://facebook.com/luxuryspa",
    instagram_url: "https://instagram.com/luxuryspa",
  },
  // Add more mock data here
];

export default function ListSpaPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    return spas.filter((spa) => 
      spa.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spa.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      spa.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Tên Spa",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "address",
      headerName: "Địa chỉ",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "phone",
      headerName: "Số điện thoại",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Thao tác",
      width: 150,
      align: "center",
      headerAlign: "center",
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams<Spa>) => (
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
          Quản Lý Spa
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          size="medium"
        >
          Tạo Spa
        </Button>
      </Box>

      <Paper sx={{ p: 2, mb: 3 }} elevation={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            label="Tìm kiếm"
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
        </Stack>
      </Paper>

      <Paper sx={{ height: 600, width: "100%" }} elevation={3}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          disableColumnMenu
          disableColumnFilter
          disableDensitySelector
          hideFooterSelectedRowCount
          sx={{
            border: '1px solid #e0e0e0',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            borderRadius: 2,
            '& .MuiDataGrid-root': {
              border: '1px solid #e0e0e0',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f5f5f5',
              borderBottom: '2px solid #e0e0e0',
              color: '#1a1a1a',
              fontSize: '0.875rem',
              fontWeight: 600,
              '& .MuiDataGrid-columnHeaderTitle': {
                fontWeight: 600,
              },
              '& .MuiDataGrid-columnHeader': {
                borderRight: '1px solid #e0e0e0',
                '&:last-child': {
                  borderRight: 'none',
                },
              },
            },
            '& .MuiDataGrid-cell': {
              borderRight: '1px solid #e0e0e0',
              borderBottom: '1px solid #e0e0e0',
              color: '#333',
              fontSize: '0.875rem',
              '&:hover': {
                backgroundColor: '#f8f8f8',
              },
              '&:last-child': {
                borderRight: 'none',
              },
            },
            '& .MuiDataGrid-row': {
              borderBottom: '1px solid #e0e0e0',
              '&:hover': {
                backgroundColor: '#f8f8f8',
              },
              '&:nth-of-type(even)': {
                backgroundColor: '#fafafa',
              },
              '&:last-child': {
                borderBottom: 'none',
              },
            },
            '& .MuiDataGrid-footer': {
              borderTop: '2px solid #e0e0e0',
              backgroundColor: '#fff',
            },
            '& .MuiIconButton-root': {
              color: '#666',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            },
            '& .MuiDataGrid-toolbarContainer': {
              gap: 2,
              padding: 2,
              backgroundColor: '#fff',
              borderBottom: '1px solid #e0e0e0',
            },
          }}
        />
      </Paper>
    </Container>
  );
}