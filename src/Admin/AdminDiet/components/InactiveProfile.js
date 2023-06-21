import React from 'react'
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {CardContent, Card, Stack, Grid, TextField ,MenuItem,InputLabel,NativeSelect,FormControl} from '@mui/material';
import fish from '../../../assets/Fish.svg'
import Switch from '@mui/material/Switch';
import axios from 'axios';
import {  Snackbar } from '@mui/material';
import MuiAlert from '@mui/lab/Alert';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
    
  });

const InactiveProfile =  React.forwardRef((props, ref) =>  {
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = useState(false);
    const [condition,setCondition]=useState(1);
    const [messageOfUserStatus,setMessageOfUserStatus]=useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const [usersData,setUsersData]=useState("")
    // useEffect(()=>{
    //     console.log('backkk123')
    //   //apiHit()
    //   },[checked])
    const handleToggleAlert = () => {
    
        setOpenAlert(true);
      };
      const handleCloseAlert = (event, reason) => {
   
        console.log('setOpenAlert(false);');
        setOpenAlert(false);
      };
    React.useImperativeHandle(ref, () => ({
        
        handleClickOpenData
      }));
      const handleClickOpenData=(val)=>{
        setUsersData(val);
        console.log(val,'valll')
        handleClickOpen();
      }
    const handleClickOpen = () => {

        setOpen(true);
       
       
       
      };
    
      const handleClose = (e) => {
        
      
      //  props.apiHitParent();
      //  setAction("");
        setOpen(false);
      };

      const handleChange = (event, checked) => {
      
        setChecked(event.target.checked);
        //console.log(event.target.checked,'event.target.checked')
        if(checked) {
          setCondition(1);
          apiHit();

          
          setMessageOfUserStatus('user Activated');
          console.log('user Activated')
        
        }
        else{
          setCondition(0);
          apiHit();
          setMessageOfUserStatus('user In Activated');
          
          console.log('user InActivated')
        } 
        handleToggleAlert();
  
      };

      const apiHit = async => {
        console.log(`https://aipse.in/api/userActivation?email=${usersData?.email}&condition=${condition}`)
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: `https://aipse.in/api/userActivation?email=${usersData?.email}&condition=${condition}`,
            headers: { 'Content-Type': 'application/json' },
        };
        axios(config)
            .then((response) => {
                
                 console.log(response, "data from hit");
            })
            .catch((error) => {
                console.log(error);
            });
    }
  return (
    <>

<Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar color="nutrition" sx={{ position: 'relative'}}>
            <Toolbar>
              <IconButton
                edge="start"
                style={{color:"white"}}
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
             
              
            </Toolbar>
          </AppBar>
          
          <Grid item xs={4} sm={4} md={4}  >
            {/* <Button> */}

            <Card >
              <CardContent>
                {/* {console.log("profilesssss--->",itm.profile_pic,itm?.first_name)} */}
                <Grid direction={'column'} spacing={8} height="200px" alignItems="center" justify="center">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                   
                    <img style={{ borderRadius: 50 ,height:50,width:50}} src={fish} />
                  </div>
                 
                  <Typography sx={{ fontSize: 30, fontWeight: 'bold',  fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:"10px"  }} mt={3} textAlign={'center'} >
                  {usersData?.label}{usersData?.user_name}

                  </Typography>
                  <div style={{ textAlign: "center", fontSize: 20,color:"black", fontWeight:'normal',  fontFamily: 'Inter-Regular', lineHeight: "50px", marginLeft:"10px" }}>
                  {usersData?.email}
                  </div>
                </Grid>
              </CardContent>
            </Card>
            {/* </Button> */}
            {/* <ShopProductCard product={product} /> */}
          </Grid>


          <Stack mt={4}>
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
        <MuiAlert onClose={handleCloseAlert} severity="success" variant="filled">
          {messageOfUserStatus}
        </MuiAlert>
      </Snackbar> 
    
      <Typography sx={{ fontSize: 20, fontWeight: 'bold',  fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"10px"  }} mt={3}  > 
                   Toggle to make user Active   <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
                  </Typography></Stack>



                  <Stack mt={4}> 
      <Card to="/dashboard/app"  state={{data:usersData}} component={RouterLink} sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center"  style={{backgroundColor:"#F0E7F5", margin:"10px"}}>
           
           {checked===true &&( <Grid container  sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center" >
                <Grid item >
                    
                <Typography sx={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"10px" }} mt={2} mb={2} >
                   Dashboard Stats
                  </Typography>
                </Grid>
                <Grid item>
                    <Typography mt={2} mb={2}>
                    <IconButton  aria-label="delete">
        <ArrowForwardIcon />
      </IconButton>
                    </Typography>
                </Grid>
            </Grid>)}
            
        </Card>
               </Stack>

        <Stack mt={10}><Card style={{backgroundColor:"purple", margin:"10px", alignItems:"center"}}>
          <Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'center', color:'white',  fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:"10px" }} mt={3}  >
                   Delete Account
                  </Typography>
            </Stack>
          </Card>
          </Stack>
            
        </Dialog>


    </>
  )
})

export default InactiveProfile