import { Helmet } from 'react-helmet-async';
import axios from 'axios'
import {useEffect,useState} from 'react'
// @mui
import { makeStyles } from '@material-ui/core/styles';
// import { Link as RouterLink } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {CardContent,CircularProgress, Link, Container, IconButton,Card,Typography, Divider, InputAdornment,Stack, Button, Grid,TextField } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Nova from "../assets/nova.svg";

import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';

import OnlineStatus from './OnlineStatus';

import { Offline, Online } from "react-detect-offline";

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


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loader: {
    marginRight: theme.spacing(2),
  },
}));
// ----------------------------------------------------------------------

export default function LoginPage() {
  // const mdUp = useResponsive('up', 'md');
  // const [networkStatus, setNetworkStatus] = useState(null);
  // useEffect(() => {
  //   const checkNetworkStatus = async () => {
  //     try {
  //       const response = await fetch('www.google.com');
  //       if (response.status === 200) {
  //         setNetworkStatus('Online');
  //         console.log('hey online')
  //       } else {
  //         setNetworkStatus('Offline');
  //         console.log('hey offline')

  //       }
  //     } catch (error) {
  //       setNetworkStatus('Offline');
  //     }
  //   };

  //   checkNetworkStatus();
  // }, []);
  const classes = useStyles();
  let  navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userOnlineStatus,setUserOnlineStatus]=useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  // const [item,setItem]=useState()
  const [response, setResponse] = useState()
  const [formValue, setFormValue] = useState({ email_id: " ", password: " " })

  // localStorage.setItem('Username', 'response?.data?.Username')
  const loginUser = () => {
    setIsLoading(true);

    // Simulating login process (replace with your actual login logic)
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    axios.post(`https://novapwc.com/api/login`, formValue)
      .then(function (response) {
        console.log(response?.data, "responseeeeeee------")
        console.log(formValue,"---form value checking--");
        if (response?.data?.Status) {  
          localStorage.setItem('Username', response?.data?.Username)
         localStorage.setItem('userId', response?.data?.['User ID'])
         
          console.log('Username', response?.data)
  
          // navigation.navigate('HomeScreen')
          navigate('/dashboardadmin/adminuser', { replace: true });
        } 
        else {
          setResponse(response?.data?.Message)
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    }

    const isOnlineFun=(str)=>{
      console.log(str);
      setUserOnlineStatus(str);
    }

  
    return ( 
      <>
  <Helmet>
    <title> Login | NPWC </title>
  </Helmet>
 <OnlineStatus  ></OnlineStatus>
 
 
  <StyledRoot>
   
   
    <Grid  sx={{margin:'30px'}}item>
            <img
              src={Nova}
              alt="nova logo"
              style={{ height: "auto", width: "auto" }}
            />
          </Grid>
    
    <Container maxWidth="sm">
      <StyledContent>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item >
            <Typography variant='h6'>
            Hi, Welcome Back
            </Typography>
          </Grid>
          
        </Grid>

        <Typography variant="h4" gutterBottom>
          Sign In
        </Typography>

        <Typography variant="body2" sx={{ mb: 5 }}>
          Don’ t have an account ? 
          <Link variant="subtitle2"  to="/dashboard/registeruser"  component={RouterLink} sx={{textDecoration:'none'}} > Get started </Link>
        </Typography>

        <Stack spacing={3}>
        <TextField name="email" label="Email address" onChange={(e) => { setFormValue({ ...formValue, email_id: e.target.value }) }} />

        <TextField
         onChange={(e) => { console.log(e.target.value), setFormValue({ ...formValue, password: e.target.value }) }}
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        
        
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>
      <Card >
      {/* to="/dashboard" component={RouterLink} sx={{textDecoration:'none'}}  ^ onPress={loginUser} */}
      {isLoading ? (
        <CircularProgress  sx={{display:'flex',alignItems:'center',justifyContent:'center', alignContent:'center'}}  style={{marginLeft:'50%'}}className={classes.loader} />
      ) :(
      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={loginUser} > 
        Login
      </LoadingButton>
      )
}
      
      </Card>

       
      </StyledContent>
    </Container>
  </StyledRoot>


{/* {!userOnlineStatus &&
<Grid sx={{height:'100%'}} container alignItems='center' justifyContent='center' >
<Card>
      <CardContent>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            Hey Your Offline...
          </Grid>
          <Grid item xs={12}>
            Please check internet Connection
          </Grid>
          ..........
        </Grid>
      </CardContent>
    </Card>
</Grid>

} */}

  
  
</>

    );
}