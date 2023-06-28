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
import { forwardRef, useImperativeHandle, useRef } from "react";
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/lab/Alert';
import AlertDialog from '../UserStats/AlertDialog';
import BarGraph from '../AdminDashboard/BarGraph';
import CreateDietPlan from '../AdminDiet/components/CreateDietPlanNut';
import CreateExercisePlan from '../AdminDiet/components/CreateExercisePlan';
// import Page from '../../components/Page';
import Avatar2 from "src/assets/Frame.png"




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
console.log(objectData,'[[[[[[')
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
 const [memberid,setMemberid]=useState(objectData?.member_id)
 const [messageOfUserStatus,setMessageOfUserStatus]=useState("");
 const [countData,setCountData]=useState('')

 const ref = useRef();
 useEffect(()=>{
 console.log(checked,'backkk');
 if(checked){
 setActionMessage('Deactivate');
 }else{
 setActionMessage('Activate');
 }


 },[checked])

 useEffect(()=>{
 if(objectData?.pathnameCurrent[0]==='/dashboardadmin/createinstandietplan' ){
 childcomrefAlert.current.handleClickOpenAlert('Before Creating Diet Plan Activate Respective User ');
 }
 else if(objectData?.pathnameCurrent[0]==='/dashboardadmin/createinstantexerciseplan'){
 childcomrefAlert.current.handleClickOpenAlert('Before Creating Exercise Plan Activate Respective User ');
    
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
 url: `https://novapwc.com/api/userActivation?email=${email}&condition=${con}`,
 headers: { 'Content-Type': 'application/json' },
 };
 axios(config)
 .then((response) => {
 setUsersData(response)
 console.log(usersData, "data from hit");
 let msg='';
 if(con){
 msg='User Activated Successfully';
 }
 else{
 msg='User Deactivated Successfully';
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
 setMessageOfUserStatus('User Inactivated');
 setCondition(0);
 setActionMessage('Activation')
 con=0
 } 
 // if(actionMessage==='Activation'){
 // setActionMessage('Inactivation')
 // }
 // else{
 // setActionMessage('Activation')
 // }
 
 //childcomrefAlert.current.handleClickOpenAlert('User Deleted Sucesfully');
 apiHit();
 // let msg='';
 // if(con){
 // msg='User Activated Successfully';
 // }
 // else{
 // msg='User In Activated Successfully';
 // }
 // childcomrefAlert.current.handleClickOpenAlert(msg);
 console.log(condition,con,'for api hit')
 //handleToggleAlert();

 };
 const handleSave=async(e)=>{
 //console.log(e?.target?.value,'//////[[[')
 
 addMemberF()
 }
 const addMemberF = async => {

 console.log("this is calling")

 var data = JSON.stringify({

 "user_id": objectData?.id,

 "member_id":memberid

 });

 

 var config = {

 method: 'PUT',

 url: 'https://novapwc.com/api/member_id',

 headers: {

 'Content-Type': 'application/json'

 },

 data : data

 };

 console.log(config,"<-config")

 axios(config)

 .then(function (response) {

 
 childcomrefAlert.current.handleClickOpenAlert('Memeber Id Added Successfully')

 //setAddMember(response.data)

 console.log(JSON.stringify(response.data),"<-wertyu");

 })

 .catch(function (error) {

 console.log(error,"<-qwe");

 });

 }

 const count = async => {
 var config = {
 method: 'PUT',
 maxBodyLength: Infinity,
 url: 'https://novapwc.com/api/count',
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
 url: 'https://novapwc.com/api/deleteUser',
 headers: { 
 'Content-Type': 'application/json'
 },
 data : data
 };
 
 axios.request(config)
 .then((response) => {
 childcomrefAlert.current.handleClickOpenAlert('User Deleted Succesfully');
 console.log(JSON.stringify(response.data));
 setUsersData("")
 
 
 // navigation
 })
 .catch((error) => {
 console.log(error);
 });
 }
 // const { from } = location.state || { from: '/' };

 

 // function solve(val){
 // for(var i=0;i<val;i++){
 // dataToSent.pathnamePrevious.pop();
 // }
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
 if(dataToSent?.pathnameCurrent[0]==='/dashboardadmin/createinstandietplan' || dataToSent?.pathnameCurrent[0]==='/dashboardadmin/createinstantexerciseplan'){
 navigate(`${dataToSent?.pathnamePrevious[dataToSent?.pathnamePrevious.length-1]}`,{state:dataToSent});

 }
 else{
 console.log(dataToSent,'date')
 navigate('/dashboardadmin/adminsearch',{state:dataToSent})
 }
 
 

 // const encodedData = encodeURIComponent(JSON.stringify(dataToSent));
 // const previousUrl = new URL(location.state?.referrer || '/', window.location.origin);
 // previousUrl.searchParams.set('data', encodedData);
 // window.location.href = previousUrl.toString();

 }

 const handleDashboardStats=()=>{
 const objectData = data;
 objectData.pathnamePrevious.push(location.pathname)
 objectData.status='active';
 
 objectData.pathnameCurrent[0]=location.pathname
 const encodedData = encodeURIComponent(JSON.stringify(objectData));
 navigate('/dashboard/app',{state:objectData});
 }
 const apiHit1=()=>{
 //console.log('doneee')
 navigate('/dashboardadmin/alldietplan',{state:objectData})
 }
 const apiHit2=()=>{
 navigate('/dashboardadmin/listallexerciseplan',{state:objectData})
 }
 
 
 return(
 <> 
 
 <CreateDietPlan userid={objectData?.id} apiHitParent={apiHit1} ref={childComponentRef} />
 <CreateExercisePlan userid={objectData?.id} apiHitParent={apiHit2} ref={childComponentRefExercise} />
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
 <Grid container spacing={3} style={{  marginTop:'0px' }}>
 {/* {users.map((product) => ( */}
 
 <Grid item >
 {/* <Button> */}
 {/* <Button
 variant="contained"
 color="success"
 sx={{
 backgroundColor:'green',
 float:'right'
 }}
 >
 Active Green Button
 </Button> */}


 {/* </Button> */}
 {/* <ShopProductCard product={product} /> */}
 </Grid>
 

 </Grid>

 <Stack> 
 <Card  sx={{textDecoration:'none',cursor:'pointer'}} justifyContent="space-between" alignItems="center" style={{backgroundColor:"#EBF5FF"}}>

 <Card style={{backgroundColor:'#EBF5FF',justifyContent:"space-between"}}  >
 <Grid container alignItems='center' justifyContent='space-between'>
 <CardContent>


 {/* {console.log("profilesssss--->",itm.profile_pic,itm?.first_name)} */}
 <Grid container display="row" flexDirection="row" >
 <Grid style={{ display: "flex", alignItems: "center", justifyContent: "center" }} item>
 
 <img style={{ borderRadius: 50 ,height:100,width:100,alignItems: "left",}} src={Avatar2} />


 <Grid style={{ marginLeft:'1rem'}} item>
 <div style={{ fontSize: 25,color:"black", fontWeight:'bold', fontFamily: 'Inter-SemiBold',}}> {data?.user_name}</div>

 <div sx={{ fontSize: 15, fontWeight: 'normal', fontFamily: 'Inter-Regular', lineHeight: "38px" }} mt={3} >{data?.email_id}</div>
 </Grid>
 
 {/* <Grid item>
 <Typography sx={{ fontSize: 20, fontWeight: 'normal', fontFamily: 'Inter-Regular', lineHeight: "38px" }} mt={3} >
 {data?.email_id}
 
 </Typography>
 </Grid> */}



 </Grid>
 {/* <Grid item>
 <Typography sx={{ fontSize: 30, fontWeight: 'bold', fontFamily: 'Inter-SemiBold', lineHeight: "50px" , }} mt={3} textAlign={'left'} >
 {data?.user_name}
 
 </Typography>
 </Grid> */}
 
 </Grid>
 </CardContent>

 <Button sx={{height:'20px',marginRight:'5px',backgroundColor:actionMessage==='Deactivate'?'lightgreen':'red'}}variant='outlined' >{actionMessage==='Deactivate'?'Active':'Inactive'}</Button>
 </Grid>
 </Card>

 
 </Card>
 </Stack>

 <Stack mt={4}>
 <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleCloseAlert}>
 <MuiAlert onClose={handleCloseAlert} severity="success" variant="filled">
 {messageOfUserStatus}
 </MuiAlert>
 </Snackbar>
 
 
 <Typography sx={{ fontSize: 20, fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"12px" }} mt={3} > 
 To {actionMessage} Use Toogle
 <Switch
 checked={checked}
 onChange={handleChangeSwitch}
 inputProps={{ 'aria-label': 'controlled' }}
 />
 </Typography>
 </Stack>

 <Grid p={1} mt={2} container display='flex' flexDirection='row'>
 <Grid xs={10} item>
 <TextField value={memberid} id="outlined-basic" variant="outlined" label='Enter Member ID' onChange={(e)=>setMemberid(e?.target?.value)} fullWidth/> </Grid>
 <Grid xs={2} sx={{alignSelf:'center',justifyContent:'end',flexDirection:'end'}} item>
 <Button onClick={handleSave} sx={{height:'53px',marginLeft:'10px'}} variant="contained" fullWidth>Save</Button></Grid>
 
 </Grid>

 
 
<Stack mt={4}> 
 <Card onClick={handleDashboardStats} sx={{textDecoration:'none',cursor:'pointer'}} justifyContent="space-between" alignItems="center" style={{backgroundColor:"#EBF5FF"}}>
 
 {(checked===true &&(objectData?.dietcreated===1 || objectData?.exercisecreated===1)) &&( <Grid container sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center" >
 <Grid item >
 
 <Typography sx={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"10px" }} mt={2} mb={2} >
 Dashboard Stats
 </Typography>
 </Grid>
 <Grid item>
 <Typography mt={2} mb={2}>
 <IconButton aria-label="delete">
 <ArrowForwardIcon />
 </IconButton>
 </Typography>
 </Grid>
 </Grid>)}
 
 </Card>
 </Stack>

 <Stack mt={4}> 
 <Card onClick={(e)=>{
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
 objectData.status='active';

 const sendData={...intialValues,...objectData}
 sendData.action='Create'
 childComponentRef.current.editClick(sendData)
 }} sx={{textDecoration:'none',cursor:'pointer'}} justifyContent="space-between" alignItems="center" style={{backgroundColor:"#EBF5FF"}}>
 
 {checked===true &&( <Grid container sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center" >
 <Grid item >
 
 <Typography sx={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"10px" }} mt={2} mb={2} >
 Create Diet Plan
 </Typography>
 </Grid>
 <Grid item>
 <Typography mt={2} mb={2}>
 <IconButton aria-label="delete">
 <ArrowForwardIcon />
 </IconButton>
 </Typography>
 </Grid>
 </Grid>)}
 
 </Card>
 </Stack>


 <Stack mt={4}> 
 <Card onClick={(e)=>{
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
 objectData.status='active';

 const sendData={...intialValues,...objectData}
 sendData.action='Create'
 childComponentRefExercise.current.editClick(sendData)
 }} sx={{textDecoration:'none',cursor:'pointer'}} justifyContent="space-between" alignItems="center" style={{backgroundColor:"#EBF5FF"}}>
 
 {checked===true &&( <Grid container sx={{textDecoration:'none',pointer:'cursor'}} justifyContent="space-between" alignItems="center" >
 <Grid item >
 
 <Typography sx={{ fontSize: 20, fontWeight: 'bold', fontFamily: 'Inter-SemiBold', lineHeight: "50px", marginLeft:"10px" }} mt={2} mb={2} >
 Create Exercise Plan
 </Typography>
 </Grid>
 <Grid item>
 <Typography mt={2} mb={2}>
 <IconButton aria-label="delete">
 <ArrowForwardIcon />
 </IconButton>
 </Typography>
 </Grid>
 </Grid>)}
 
 </Card>
 </Stack>

 <Stack mt={10}>
 <Card onClick={handleDelete} style={{cursor:'pointer',backgroundColor:"#2065D1", margin:"10px", alignItems:"center"}}>
 <Stack mb={2}> 
 <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'center', color:'white', fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:"10px" }} mt={3} >
 Delete Account
 </Typography></Stack></Card></Stack>
 

 </CardContent>
 </Card>
 <AlertDialog gobackk={goBackk}   Message="Created Successfully" ref={childcomrefAlert}/>
 {/* <BarGraph></BarGraph> */}
 
 </>
 );
}