
import React, { useState, useMemo } from "react";
import { useTable, useNavigation } from "@refinedev/core";
import { List } from "@refinedev/mui";
import {
  Box,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Avatar,
} from "@mui/material";
import {
  Add as AddIcon,
  Search as SearchIcon,
  Clear as ClearIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

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
  const [searchQuery, setSearchQuery] = useState("");
  const { push } = useNavigation();

  const {
    tableQueryResult: { data: tableData },
  } = useTable({
    resource: "spa-info",
    syncWithLocation: true,
  });

  const handleSearch = () => {
    setSearchQuery(searchTerm);
  };

  const handleEdit = (id: number) => {
    push(`/spas/edit/${id}`);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Tên Spa", width: 200 },
    {
      field: "logo_url",
      headerName: "Logo",
      width: 100,
      renderCell: (params) => (
        <Avatar
          src={params.value}
          alt={params.row.name}
          variant="rounded"
          sx={{ width: 40, height: 40 }}
        />
      ),
    },
    { field: "address", headerName: "Địa chỉ", width: 300 },
    { field: "phone", headerName: "Số điện thoại", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "seo_title", headerName: "Tiêu đề SEO", width: 200 },
    { field: "seo_description", headerName: "Mô tả SEO", width: 200 },
    { field: "facebook_url", headerName: "Facebook", width: 150 },
    { field: "instagram_url", headerName: "Instagram", width: 150 },
    {
      field: "actions",
      headerName: "Hành động",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Button
          startIcon={<EditIcon />}
          onClick={() => handleEdit(params.row.id)}
          size="small"
        >
          Chỉnh sửa
        </Button>
      ),
    },
  ];

  const filteredData = useMemo(() => {
    return (tableData?.data || []).filter(
      (spa: Spa) =>
        spa.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spa.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spa.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, tableData]);

  return (
    <List>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <TextField
            label="Tìm kiếm"
            variant="outlined"
            size="small"
            sx={{ width: "500px" }}
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
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    size="small"
                    onClick={() => setSearchTerm("")}
                    sx={{ visibility: searchTerm ? "visible" : "hidden" }}
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
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Tìm kiếm
          </Button>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => push("/spas/create")}
        >
          Tạo Spa
        </Button>
      </Box>
      <DataGrid
        rows={filteredData}
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
          },
        }}
      />
    </List>
  );
}
