import React, { useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  Box,
  Button,
  ButtonGroup,
  useTheme,
  useMediaQuery,
} from "@mui/material";

interface Location {
  id: number;
  name: string;
  address: string;
  position: {
    lat: number;
    lng: number;
  };
}

const locations: Location[] = [
  {
    id: 1,
    name: "Chi nhánh 1",
    address: "97, Nguyễn Cư Trinh, Quận 1, TPHCM",
    position: { lat: 10.7633, lng: 106.6895 },
  },
  {
    id: 2,
    name: "Chi nhánh 2",
    address: "85, Ca Văn Thỉnh, Phường 11, Q. Tân Bình, TP.HCM",
    position: { lat: 10.7935, lng: 106.6474 },
  },
  {
    id: 3,
    name: "Chi nhánh 3",
    address: "141, Tân Hương, TP.HCM",
    position: { lat: 10.7612, lng: 106.6369 },
  },
  {
    id: 4,
    name: "Chi nhánh Hải Phòng",
    address: "Hồ Nam, Q.Lê Chân, TP.Hải Phòng",
    position: { lat: 20.8449, lng: 106.688 },
  },
];

const GoogleMapsComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedLocation, setSelectedLocation] = useState<Location>(
    locations[2],
  ); // Default to branch 3

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const onMarkerClick = useCallback((location: Location) => {
    setSelectedLocation(location);
  }, []);

  const handleViewMap = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedLocation.address)}`;
    window.open(url, "_blank");
  };

  return (
    <Box sx={{ width: "100%", my: 4 }}>
      <ButtonGroup
        variant="outlined"
        sx={{
          mb: 2,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 1 : 0,
        }}
      >
        {locations.map((location) => (
          <Button
            key={location.id}
            onClick={() => onMarkerClick(location)}
            sx={{
              color: selectedLocation.id === location.id ? "#fff" : "#8D6E63",
              backgroundColor:
                selectedLocation.id === location.id ? "#8D6E63" : "transparent",
              borderColor: "#8D6E63",
              "&:hover": {
                backgroundColor: "#6D4C41",
                borderColor: "#6D4C41",
                color: "#fff",
              },
            }}
          >
            {location.name}
          </Button>
        ))}
      </ButtonGroup>

      <LoadScript googleMapsApiKey="AIzaSyCHcTfiWg7nGu0saND7J0CdSCYdbYDGO_E">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={selectedLocation.position}
          zoom={15}
        >
          <Marker position={selectedLocation.position} />
        </GoogleMap>
      </LoadScript>

      <Button
        onClick={handleViewMap}
        sx={{
          mt: 2,
          color: "#8D6E63",
          borderColor: "#8D6E63",
          "&:hover": {
            backgroundColor: "rgba(141, 110, 99, 0.08)",
            borderColor: "#6D4C41",
          },
        }}
        variant="outlined"
      >
        Xem trên Google Maps
      </Button>
    </Box>
  );
};

export default GoogleMapsComponent;
