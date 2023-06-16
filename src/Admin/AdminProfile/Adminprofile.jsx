import * as React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import moment from 'moment';

import {useEffect} from 'react'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles'
import { red } from '@mui/material/colors';
import { Card, CardContent, Grid, Typography, Avatar, Badge, Button, Stack, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import fish from "../../assets/Fish.svg";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Iconify from 'src/components/iconify/Iconify';
import { Link } from 'react-router-dom';
import axios from 'axios'
import  { forwardRef, useImperativeHandle, useRef } from "react";
import {  Snackbar } from '@mui/material';
import MuiAlert from '@mui/lab/Alert';
import AlertDialog from '../UserStats/AlertDialog';
import BarGraph from '../AdminDashboard/BarGraph';
import CreateDietPlan from '../AdminDiet/components/CreateDietPlanNut';
import CreateExercisePlan from '../AdminDiet/components/CreateExercisePlan';
// import Page from '../../components/Page';



const pageheading={
  fontFamily:"Inter-Bold",
  fontWeight: "bold",
  fontSize: "25px",
  lineHeight: "30px",
  color: "#112866"
};
  
  

export default function Userprofile({props}){
  const location = useLocation();
  const childComponentRef = useRef(null);
  const childComponentRefExercise=useRef(null);
console.log(location,'location?.pathname')
  const navigate=useNavigate();
  const goback=useNavigate(-1)
const encodedData = new URLSearchParams(location.search).get('data');
const objectData = location?.state
console.log(objectData,'objectData admin profile')
  const [data,setData] = useState(objectData);
  console.log(location,'location?.state?.data')
    const [checked, setChecked] = useState(objectData?.status==='active'?true:false);
    const [actionMessage,setActionMessage]=useState("")
    const childcomrefAlert=useRef();
    
  console.log(objectData,'jjjjjj');
  console.log(location, " useLocation Hook");
 
  const [usersData,setUsersData]=useState([])
  const [condition,setCondition]=useState(1);
  const [status,setStatus]=useState(data?.status);
  const [email,setEmail]=useState(data?.email_id);
  const [messageOfUserStatus,setMessageOfUserStatus]=useState("");
  const [countData,setCountData]=useState('')

  const ref = useRef();
    useEffect(()=>{
      console.log(checked,'backkk');
      if(checked){
      setActionMessage('Inactivation');
      }else{
        setActionMessage('Activation');
      }


    },[checked])

    useEffect(()=>{
      if(objectData.pathnameCurrent[0]==='/dashboardadmin/createinstandietplan' || objectData.pathnameCurrent[0]==='/dashboardadmin/createinstantexerciseplan' ){
        childcomrefAlert.current.handleClickOpenAlert('On Inactive User Diet Plan Cannot Be Created');
      }
    },[objectData])

  const [openAlert, setOpenAlert] = useState(false);

  const handleToggleAlert = () => {
    
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
   
    console.log('setOpenAlert(false);');
    setOpenAlert(false);
  };
    //ndhoble@infobellit.com
    const apiHit = async => {
      let config = {
          method: 'GET',
          maxBodyLength: Infinity,
          url: `https://aipse.in/api/userActivation?email=${email}&condition=${con}`,
          headers: { 'Content-Type': 'application/json' },
      };
      axios(config)
          .then((response) => {
              setUsersData(response)
               console.log(usersData, "data from hit");
               let msg='';
               if(con){
                  msg='User Activated Sucessfully';
               }
              else{
                msg='User De Activated Sucessfully';
              }
              childcomrefAlert.current.handleClickOpenAlert(msg);
          })
          .catch((error) => {
              console.log(error);
          });
  }

  let con;

    const handleChangeSwitch = (event) => {
    
      con=!checked;
      setChecked(con)
      console.log(con,'checked')
      if(con) {
        setCondition(1);
        con=1;
        setMessageOfUserStatus('User Activated');
        setActionMessage('Inactivation')
      
      }
      else{
        setMessageOfUserStatus('User De Activated');
        setCondition(0);
        setActionMessage('Activation')
        con=0
      } 
      // if(actionMessage==='Activation'){
      //   setActionMessage('Inactivation')
      // }
      // else{
      //   setActionMessage('Activation')
      // }
      
      //childcomrefAlert.current.handleClickOpenAlert('User Deleted Sucesfully');
      apiHit();
      // let msg='';
      //          if(con){
      //             msg='User Activated Sucessfully';
      //          }
      //         else{
      //           msg='User In Activated Sucessfully';
      //         }
      //         childcomrefAlert.current.handleClickOpenAlert(msg);
      console.log(condition,con,'for api hit')
      //handleToggleAlert();

    };
    const handleSave=async=>{
      count()
    }


    const count = async => {
      var config = {
          method: 'GET',
          maxBodyLength: Infinity,
          url: 'https://aipse.in/api/count',
          headers: { } 
        };
        
        axios(config)
        
        .then(function (response) {
          console.log(response?.data,"<-zwertyu")
          const realData = [
              {
               name: "Active Users",
               y:response?.data?.totalCountOfActiveUser
  
              },
              {
                  name: "Inactive Users",
                  y:response?.data?.totalCountOfInactiveUser
     
                 },
                 {
                  name: "Total Users",
                  y:response?.data?.totalCountOfUsers
     
                 },
                 {
                  name: "No of Users Diet Plan Created",
                  y:response?.data?.totalNoOfUserDietPlanCreated
     
                 },
                 {
                  name: "No of Users Diet Plan Not Created",
                  y:response?.data?.totalNoofUserDietPlanNotCreated
     
                 }
          ]
          setCountData(realData)
  
          console.log(countData,"<--------------setCountDatasetCountData-");
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  const handleDelete=async=>{
    deleteApiHit();
   ///console.log(data)
  }
console.log(objectData?.id,'objectDataobjectData')
  const deleteApiHit=async=>{
    let data = JSON.stringify({
      "id": objectData?.id
    });
    
    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'https://aipse.in/api/deleteUser',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setUsersData("")
      childcomrefAlert.current.handleClickOpenAlert('User Deleted Sucesfully');
      goBackk();
      // navigation
    })
    .catch((error) => {
      console.log(error);
    });
  }
 // const { from } = location.state || { from: '/' };

  

  // function solve(val){
  //   for(var i=0;i<val;i++){
  //     dataToSent.pathnamePrevious.pop();
  //   }
  // }

  const goBackk=()=>{
    const dataToSent = data;
    console.log(dataToSent,'date')

    dataToSent.userStatus='all';
    const encodedData = encodeURIComponent(JSON.stringify(dataToSent));
    //console.log(location?.pathname,'location?.pathname')
    //console.log(location?.state,'locationnnn')
   // const { from } = location.state || { from: '/' };
   console.log(dataToSent,'daaaa')
    dataToSent.pathnameCurrent[1]===0?1:dataToSent?.pathnamePrevious.pop();;
    navigate(`${dataToSent?.pathnamePrevious[dataToSent?.pathnamePrevious.length-1]}`,{state:dataToSent});

    // const encodedData = encodeURIComponent(JSON.stringify(dataToSent));
    // const previousUrl = new URL(location.state?.referrer || '/', window.location.origin);
    // previousUrl.searchParams.set('data', encodedData);
    // window.location.href = previousUrl.toString();

  }

  const handleDashboardStats=()=>{
    const objectData = data;
    objectData.pathnamePrevious.push(location.pathname)
    
    objectData.pathnameCurrent[0]=location.pathname
    const encodedData = encodeURIComponent(JSON.stringify(objectData));
    navigate('/dashboard/app',{state:objectData});
  }
  const apiHit1=()=>{
    
  }
   
     
    return(
        <> 
       
       <CreateDietPlan userid={objectData.id} apiHitParent={apiHit1} ref={childComponentRef} />
       <CreateExercisePlan userid={objectData.id} apiHitParent={apiHit1} ref={childComponentRefExercise} />
            <Card>
                <CardContent>
   <Grid container flexDirection="row">

<Grid onClick={goBackk} item>
<Link >
      <IconButton>
        <Iconify icon="material-symbols:arrow-back-rounded" />
      </IconButton></Link>

    </Grid>
   
    <Grid item>
    <Typography style={pageheading}>Profile</Typography>
    </Grid>
 </Grid>
            <Grid container spacing={3} style={{ display:'flex', justifyContent:'center' }}>
        {/* {users.map((product) => ( */}
        
          <Grid item   >
            {/* <Button> */}

            <Card >
              <CardContent>
                {/* {console.log("profilesssss--->",itm.profile_pic,itm?.first_name)} */}
                <Grid container display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                  <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }} item>
                   
                    <img style={{ borderRadius: 50 ,height:50,width:50}} src={fish} />
                  </Grid>
                 <Grid item>
                  <Typography sx={{ fontSize: 30, fontWeight: 'bold',  fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:"10px"  }} mt={3} textAlign={'center'} >
                  {data?.user_name}
                  
                  </Typography>
                  </Grid>
                  <Grid style={{ textAlign: "center", fontSize: 20,color:"black", fontWeight:'normal',  fontFamily: 'Inter-Regular', lineHeight: "50px", marginLeft:"10px" }} item>
                  {data?.email_id}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            {/* </Button> */}
            {/* <ShopProductCard product={product} /> */}
          </Grid>
      

      </Grid>
      <Stack mt={4}>
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
        <MuiAlert onClose={handleCloseAlert} severity="success" variant="filled">
          {messageOfUserStatus}
        </MuiAlert>
      </Snackbar>
      
    
      <Typography sx={{ fontSize: 20,   fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"5px"  }} mt={3}  > 
                   For {actionMessage} Use Toogle
                   <Switch
      checked={checked}
      onChange={handleChangeSwitch}
      inputProps={{ 'aria-label': 'controlled' }}
    />
                  </Typography>
                  </Stack>

                <Grid p={1} mt={2} container display='flex' flexDirection='row'>
                  <Grid  xs={10} item>
                  <TextField id="outlined-basic" variant="outlined"  label='Enter Member ID' fullWidth/> </Grid>
                  <Grid xs={2} sx={{alignSelf:'center',justifyContent:'end',flexDirection:'end'}} item>
                  <Button onClick={handleSave} sx={{height:'53px',marginLeft:'10px'}} variant="contained" fullWidth>Save</Button></Grid>
                  
                </Grid>

                
                
<Stack mt={4}> 
        <Card  onClick={handleDashboardStats}  sx={{textDecoration:'none',cursor:'pointer'}} justifyContent="space-between" alignItems="center"  style={{backgroundColor:"#F0E7F5"}}>
           
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

 <Stack mt={4}> 
        <Card  onClick={(e)=>{
          const today = new Date();
          const Obj1 = {
            category: '',
            value: '',
          };
          const intialValues = {
            interval: 0,
            startDate: moment(today)?.format('DD-MM-YYYY'),
            endDate: "",
            category: '',
            items: [Obj1],
            
          };
          
          objectData.pathnamePrevious.push(location.pathname)
          objectData.pathnameCurrent[0]=location.pathname
      const sendData={...intialValues,...objectData}
      sendData.action='Create'
      childComponentRef.current.editClick(sendData)
        }}  sx={{textDecoration:'none',cursor:'pointer'}} justifyContent="space-between" alignItems="center"  style={{backgroundColor:"#F0E7F5"}}>
           
           {checked===true &&( <Grid container  sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center" >
                <Grid item >
                    
                <Typography sx={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"10px" }} mt={2} mb={2} >
                   Create Diet Plan
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


 <Stack mt={4}> 
        <Card  onClick={(e)=>{
          const today = new Date();
          const Obj1 = {
            category: '',
            value: '',
          };
          const intialValues = {
            interval: 0,
            startDate: moment(today)?.format('DD-MM-YYYY'),
            endDate: "",
            category: '',
            items: [Obj1],
            
          };
          
          objectData.pathnamePrevious.push(location.pathname)
          objectData.pathnameCurrent[0]=location.pathname
      const sendData={...intialValues,...objectData}
      sendData.action='Create'
      childComponentRefExercise.current.editClick(sendData)
        }}  sx={{textDecoration:'none',cursor:'pointer'}} justifyContent="space-between" alignItems="center"  style={{backgroundColor:"#F0E7F5"}}>
           
           {checked===true &&( <Grid container  sx={{textDecoration:'none',pointer:'cursor'}} justifyContent="space-between" alignItems="center" >
                <Grid item >
                    
                <Typography sx={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"10px" }} mt={2} mb={2} >
                   Create Exercise Plan
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

                  <Stack  mt={10}>
                    <Card onClick={handleDelete} style={{cursor:'pointer',backgroundColor:"purple", margin:"10px", alignItems:"center"}}>
                      <Stack  mb={2}> 
                    <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'center', color:'white',  fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:"10px" }} mt={3}  >
                     Delete Account
                  </Typography></Stack></Card></Stack>
        

      </CardContent>
      </Card>
      <AlertDialog Message="Created Sucessfully" ref={childcomrefAlert}/>
      {/* <BarGraph></BarGraph> */}
      
    </>
    );
}