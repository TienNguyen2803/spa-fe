
import { Fab, Tooltip, styled, keyframes } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MessengerIcon from '@mui/icons-material/Facebook';
import ZaloIcon from '@mui/icons-material/Message';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
`;

const FloatingContainer = styled('div')({
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  zIndex: 1000,
});

const FloatingButton = styled(Fab)(({ theme }) => ({
  position: 'relative',
  transition: 'all 0.3s ease',
  animation: `${pulse} 2s infinite`,

  '&:hover': {
    transform: 'scale(1.1)',
    filter: 'brightness(1.1)',
  },

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '50%',
    animation: `${ripple} 1.5s infinite`,
  },

  '& svg': {
    fontSize: '24px',
  },
}));

const SocialButtons = () => {
  return (
    <FloatingContainer>
      <Tooltip title="Chat với Tấm Ơi Spa qua Zalo" placement="left">
        <FloatingButton
          sx={{
            bgcolor: '#0068ff',
            color: 'white',
            '&:hover': { bgcolor: '#0054cc' },
            '&::before': { border: '2px solid #0068ff' }
          }}
          onClick={() => window.open('https://zalo.me/0938296337', '_blank')}
        >
          <ZaloIcon />
        </FloatingButton>
      </Tooltip>
      
      <Tooltip title="Nhắn tin Messenger" placement="left">
        <FloatingButton
          sx={{
            bgcolor: '#0084ff',
            color: 'white',
            '&:hover': { bgcolor: '#006acc' },
            '&::before': { border: '2px solid #0084ff' }
          }}
          onClick={() => window.open('https://m.me/Tiemcotam.vn', '_blank')}
        >
          <MessengerIcon />
        </FloatingButton>
      </Tooltip>
      
      <Tooltip title="Gọi ngay: 0938296337" placement="left">
        <FloatingButton
          sx={{
            bgcolor: '#4CAF50',
            color: 'white',
            '&:hover': { bgcolor: '#388E3C' },
            '&::before': { border: '2px solid #4CAF50' }
          }}
          onClick={() => window.location.href = 'tel:0938296337'}
        >
          <PhoneIcon />
        </FloatingButton>
      </Tooltip>
    </FloatingContainer>
  );
};

export default SocialButtons;
