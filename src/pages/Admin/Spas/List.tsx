import React, { useState } from "react";
import { useTable } from "@refinedev/core";
import { List } from "@refinedev/mui";
import { 
  Box, 
  Button,
  IconButton, 
  Tooltip,
  TextField,
  InputAdornment,
  Stack
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';


interface Spa {
  id: number;
  name: string;
  logo_url: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  seo_title: string;
  seo_description: string;
  facebook_url: string;
  instagram_url: string;
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
];

export default function ListSpaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  const { tableQueryResult: { data: tableData } } = useTable({
    resource: "spas",
    syncWithLocation: true,
  });

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
      renderCell: (params) => (
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
    <List
      breadcrumb={true}
      createButtonProps={{
        startIcon: <AddIcon />,
        children: "Tạo Spa",
      }}
    >
      <Stack spacing={2}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <TextField
            label="Tìm kiếm"
            variant="outlined"
            size="small"
            sx={{ width: '400px' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton 
                    size="small" 
                    onClick={() => setSearchTerm("")}
                    sx={{ visibility: searchTerm ? 'visible' : 'hidden' }}
                  >
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
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#1565c0',
              }
            }}
          >
            Tìm kiếm
          </Button>
        </Box>
        <DataGrid
          rows={tableData || spas} // Fallback to local data if refinedev fetching fails.
          columns={columns}
          autoHeight
          checkboxSelection={false}
          disableColumnMenu
          disableRowSelectionOnClick
          sx={{
            border: "1px solid #e0e0e0",
            "& .MuiDataGrid-row": {
              borderBottom: "1px solid #e0e0e0",
            },
            "& .MuiDataGrid-cell": {
              borderRight: "1px solid #e0e0e0",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "2px solid #e0e0e0",
              bgcolor: "#f5f5f5",
            },
            "& .MuiDataGrid-columnHeader": {
              borderRight: "1px solid #e0e0e0",
            }
          }}
        />
      </Stack>
    </List>
  );
}