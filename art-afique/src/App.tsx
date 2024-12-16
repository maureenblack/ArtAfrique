import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ my: 4 }}>
          <Typography variant="h1" component="h1" gutterBottom>
            Art Afique
          </Typography>
          <Typography variant="h2" gutterBottom>
            Welcome to African Art Gallery
          </Typography>
          <Typography variant="body1">
            Discover the rich and diverse world of African art.
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
