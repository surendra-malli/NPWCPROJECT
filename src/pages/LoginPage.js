import { Helmet } from 'react-helmet-async';
import axios from 'axios'
import {useEffect} from 'react'
// @mui
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, Divider, Stack, Button, Grid } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Nova from "../assets/nova.svg";

import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));


const StyledSection = styled('div')(({ theme }) => ({
  width: 'auto',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');
  
  useEffect(() => {
  
    axios.get("http: //192.168.1.207:8081/searchUser?name=&page=1&count=7").then(res=>{
      console.log()
    })
  
  
  
  
  
  
  
  }, [])
    return ( 
      <>
  <Helmet>
    <title> Login | Minimal UI </title>{" "}
  </Helmet>
  <StyledRoot>
    <Logo
      sx={{
        position: "fixed",
        top: { xs: 16, sm: 24, md: 40 },
        left: { xs: 16, sm: 24, md: 40 },
      }}
    />
    <Container maxWidth="sm">
      <StyledContent>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item variant="h2">
            Hi, Welcome Back
          </Grid>
          <Grid item>
            <img
              src={Nova}
              alt="nova logo"
              style={{ height: "auto", width: "auto" }}
            />
          </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>

        <Typography variant="body2" sx={{ mb: 5 }}>
          Don’ t have an account ? 
          <Link variant="subtitle2"> Get started </Link>
        </Typography>

        <LoginForm />
      </StyledContent>
    </Container>
  </StyledRoot>
</>

    );
}