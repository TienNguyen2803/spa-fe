import { Fab, Tooltip, styled, keyframes } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MessengerIcon from '@mui/icons-material/Facebook';
import ZaloIcon from '@mui/icons-material/Message';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const ripple = keyframes`
  0% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(2.5); }
`;

const FloatingContainer = styled('div')({
  position: 'fixed',
  right: '20px',
  bottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  zIndex: 1000,
});

const FloatingButton = styled(Fab)(({ theme }) => ({
  width: '60px',
  height: '60px',
  position: 'relative',
  animation: `${pulse} 1.5s ease-in-out infinite`,

  '&::before': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    animation: `${ripple} 1.5s ease-out infinite`,
  },

  '& svg': {
    fontSize: '24px',
  },
}));

const SocialButtons = () => {
  return (
    <FloatingContainer>
      <Tooltip title="Chat với chúng tôi qua Zalo" placement="left">
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