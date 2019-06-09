import { Box, Theme, Avatar, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  const theme: Theme = useTheme();

  return (
    <Box width={1} height={300} style={{ background: theme.palette.primary.light }}>
      <Grid container justify="center" alignItems="center" direction="column" style={{ height: '100%' }}>
        <Grid item style={{ marginBottom: 20 }}>
          <Avatar src="https://via.placeholder.com/150" alt="Profile" style={{ height: 150, width: 150, border: `5px solid ${theme.palette.primary.main}` }} />
        </Grid>
        <Grid item style={{ marginBottom: 15 }}>
          <Typography variant="h6" style={{ color: theme.palette.primary.contrastText }}>NAME</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" style={{ color: theme.palette.primary.contrastText }}>JOB TITLE</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
