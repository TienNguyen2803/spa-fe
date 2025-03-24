
import React from 'react';
import { Box, IconButton, Tooltip, styled } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import { SvgIcon } from '@mui/material';

const FloatingContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  zIndex: 1000,
}));

const FloatingButton = styled(IconButton)(({ theme }) => ({
  width: '56px',
  height: '56px',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

const ZaloIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <path d="M24.7072 10C15.9672 10 8.70718 16.32 8.70718 24C8.70718 31.68 15.9672 38 24.7072 38C33.4472 38 40.7072 31.68 40.7072 24C40.7072 16.32 33.4472 10 24.7072 10ZM13.8072 27.92L17.8472 22.6L21.9672 27.92H13.8072ZM25.4472 27.92H22.1272L16.8072 21.08L22.1272 14.32H25.4472L20.1272 21.08L25.4472 27.92ZM35.6072 27.92H32.2872L26.9672 21.08L32.2872 14.32H35.6072L30.2872 21.08L35.6072 27.92Z" fill="currentColor"/>
  </SvgIcon>
);

const MessengerIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 48 48">
    <path d="M24 8C15.164 8 8 14.627 8 23C8 27.91 10.398 32.262 14.26 35.001V42L20.816 38.302C21.846 38.525 22.907 38.751 24 38.751C32.836 38.751 40 32.124 40 23.751C40 15.378 32.836 8 24 8ZM26.121 29.753L21.121 24.253L11.121 29.753L22.121 18.253L27.121 23.753L37.121 18.253L26.121 29.753Z" fill="currentColor"/>
  </SvgIcon>
);

const SocialButtons = () => {
  return (
    <FloatingContainer>
      <Tooltip title="Chat với Tấm Ơi Spa qua Zalo" placement="left">
        <FloatingButton
          sx={{ bgcolor: '#0068ff', color: 'white', '&:hover': { bgcolor: '#0054cc' } }}
          onClick={() => window.open('https://zalo.me/0938296337', '_blank')}
        >
          <ZaloIcon />
        </FloatingButton>
      </Tooltip>
      
      <Tooltip title="Nhắn tin Messenger" placement="left">
        <FloatingButton
          sx={{ bgcolor: '#0084ff', color: 'white', '&:hover': { bgcolor: '#006acc' } }}
          onClick={() => window.open('https://m.me/Tiemcotam.vn', '_blank')}
        >
          <MessengerIcon />
        </FloatingButton>
      </Tooltip>
      
      <Tooltip title="Gọi ngay: 0938296337" placement="left">
        <FloatingButton
          sx={{ bgcolor: '#4CAF50', color: 'white', '&:hover': { bgcolor: '#388E3C' } }}
          onClick={() => window.location.href = 'tel:0938296337'}
        >
          <PhoneIcon />
        </FloatingButton>
      </Tooltip>
    </FloatingContainer>
  );
};

export default SocialButtons;
