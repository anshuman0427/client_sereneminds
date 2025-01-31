import React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Star from '@mui/icons-material/Star';
import TwoSidedLayout from './components/TwoSidedLayout';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function HeroLeft08() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleSignInClick = () => {
    navigate('/signin'); // Navigate to /signin
  };

  return (
    <TwoSidedLayout>
      <Chip size="lg" variant="outlined" color="neutral">
        Serene MINDS
      </Chip>
      <Typography
        level="h1"
        sx={{
          fontWeight: 'xl',
          fontSize: 'clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)',
        }}
      >
        A better way to connect with your psychologist
      </Typography>
      <Typography
        textColor="text.secondary"
        sx={{ fontSize: 'lg', lineHeight: 'lg' }}
      >
        A platform by Serene MINDS to connect with your psychologist without sharing personal contact information.
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          my: 2,
          '& > *': { flex: 'auto' },
        }}
      >
        <Button size="lg" endDecorator={<ArrowForward fontSize="xl" />} onClick={handleSignInClick}>
          Sign in
        </Button>
      </Box>
      <Box
        sx={(theme) => ({
          display: 'flex',
          columnGap: 4.5,
          rowGap: 1.5,
          textAlign: 'center',
          alignSelf: 'stretch',
          '& > *': {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            alignItems: 'center',
          },
          [theme.breakpoints.up(834)]: {
            textAlign: 'left',
            '& > *': {
              alignItems: 'initial',
            },
          },
        })}
      >
        <div>
          <Typography
            endDecorator={<Star fontSize="xl4" sx={{ color: 'orange' }} />}
            sx={{ fontSize: 'xl4', fontWeight: 'lg' }}
          >
            4.9
          </Typography>
          <Typography textColor="text.secondary">
            Rated by <b>5k</b> patients & psychologist
          </Typography>
        </div>
        <div>
          <Typography sx={{ fontSize: 'xl4', fontWeight: 'lg' }}>9.5k+</Typography>
          <Typography textColor="text.secondary">
            Active users from all around the world.
          </Typography>
        </div>
      </Box>
    </TwoSidedLayout>
  );
}
