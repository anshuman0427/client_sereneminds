import React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';

export default function Header() {
  return (
    <Sheet
      sx={{
        display: { sm: 'flex', md: 'none' },
        alignItems: 'left',
        justifyContent: 'left',
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex: 9995,
        p: 2,
        gap: 1,
        borderBottom: '1px solid',
        borderColor: 'background.level1',
        boxShadow: 'sm',
      }}
    >
      <GlobalStyles
        styles={{
          '@import': "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')",
          ':root': {
            '--Header-height': '52px',
          },
        }}
      />
      <Typography
        level="h6"
        sx={{
          fontSize: '20px',
          fontWeight: 600, // Semi-bold
          color: 'text.primary',
          fontFamily: 'Inter, sans-serif', // Apply Inter typeface
        }}
      >
        Serene MINDS
      </Typography>
    </Sheet>
  );
}
