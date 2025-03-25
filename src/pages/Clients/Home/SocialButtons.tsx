import React from "react";
import { Box, styled, keyframes } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import EventIcon from "@mui/icons-material/Event";

const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

const FloatingContainer = styled(Box)({
  position: "fixed",
  right: "20px",
  bottom: "0px",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  zIndex: 1000,
});

const OuterCircle = styled(Box)({
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  backgroundColor: "#ece6cf",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: "0 0 15px rgba(180, 180, 180, 0.8)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    boxShadow: "0 0 20px rgba(160, 160, 160, 0.9)",
  },
});

const InnerCircle = styled(Box)({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#d4af37",
  color: "white",
  zIndex: 2,
});

const Ripple = styled(Box)({
  position: "absolute",
  width: "140px",
  height: "140px",
  borderRadius: "50%",
  backgroundColor: "transparent",
  border: "2px solid #000",
  opacity: 0,
  transform: "scale(0)",
  animation: `${rippleAnimation} 4s infinite`,
});

const SocialButtons = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FloatingContainer>
      <OuterCircle onClick={() => (window.location.href = "/booking")}>
        <InnerCircle>
          <EventIcon />
        </InnerCircle>
        <Ripple />
        <Ripple sx={{ animationDelay: "1s" }} />
        <Ripple sx={{ animationDelay: "2s" }} />
      </OuterCircle>

      <OuterCircle
        onClick={() => window.open("https://zalo.me/0938296337", "_blank")}
      >
        <InnerCircle>
          <Box component="span" sx={{ fontWeight: "bold", fontSize: "18px" }}>
            Zalo
          </Box>
        </InnerCircle>
        <Ripple />
        <Ripple sx={{ animationDelay: "1s" }} />
        <Ripple sx={{ animationDelay: "2s" }} />
      </OuterCircle>

      <OuterCircle onClick={() => (window.location.href = "tel:0938296337")}>
        <InnerCircle>
          <CallIcon />
        </InnerCircle>
        <Ripple />
        <Ripple sx={{ animationDelay: "1s" }} />
        <Ripple sx={{ animationDelay: "2s" }} />
      </OuterCircle>

      <OuterCircle
        onClick={() => window.open("https://m.me/Tiemcotam.vn", "_blank")}
      >
        <InnerCircle>
          <MessageIcon />
        </InnerCircle>
        <Ripple />
        <Ripple sx={{ animationDelay: "1s" }} />
        <Ripple sx={{ animationDelay: "2s" }} />
      </OuterCircle>
    </FloatingContainer>
  );
};

export default SocialButtons;
