import React from "react"
import { Grid, Typography, Select, FormControl, InputLabel,Button,IconButton,Stack,  } from '@mui/material';
import{useState,useEffect} from 'react'
import { useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';
import { styled } from '@mui/material/styles';

import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
// import DietPlan from '../Diet/DietPlan'; 
import Iconify from 'src/components/iconify/Iconify';
import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import Exerciselogo from "../../assets/Exerciselogo.svg";
import  "../styles.css";
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChevronDownIcon from '@material-ui/icons/ExpandMore';
// import Stack from '@mui/material/Stack';
import BarGraph1 from "src/Admin/AdminDashboard/BarGraph1";
// components

// sections

// ----------------------------------------------------------------------
  
const hello={
  color:"#112866",
  fontFamily:"Inter-SemiBold",

}
const subtext={
  
  fontSize:"10px" ,
  color:"white",
  fontFamily:"Inter-regular",

}
const calories ={
  fontFamily: 'Inter-Regular',
  color:"#112866",
};



export default function DashboardAppPage() {



const handleExpandClick = () => {
      setExpanded(true);
    };
  
    const handleCloseClick = () => {
      setExpanded(false);
    }

  const [expanded, setExpanded] = useState(false);
    const ExpandMore = styled((props) => {
      const { expand, ...other } = props;
      return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    
    }));
// alert usage here

    const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  
  var username = 'Seema'

  // alert messages
  const [alert1Open, setAlert1Open] = useState(false);
  const [alert2Open, setAlert2Open] = useState(false);
  const [alert3Open, setAlert3Open] = useState(false);
  const [alert4Open, setAlert4Open] = useState(false);
  const [alert5Open, setAlert5Open] = useState(false);

  const handleAlert1Click = () => {
    setAlert1Open(true);
  };

  const handleAlert2Click = () => {
    setAlert2Open(true);
  };

  const handleAlert3Click = () => {
    setAlert3Open(true);
  };

  const handleAlert4Click = () => {
    setAlert4Open(true);
  };

  const handleAlert5Click = () => {
    setAlert5Open(true);
  };

  const handleAlertClose = (alertId) => {
    switch (alertId) {
      case 1:
        setAlert1Open(false);
        break;
      case 2:
        setAlert2Open(false);
        break;
      case 3:
        setAlert3Open(false);
        break;
      case 4:
        setAlert4Open(false);
        break;
      case 5:
        setAlert5Open(false);
        break;
      default:
        break;
    }
  };


  const [loading, setLoading] = useState(true)
 
  const [userId, setuserId] = useState('')
  const [oneDietPlanData, setoneDietplanData] = useState([])
  const [oneExerciseData, setOneExerciseData] = useState([])
  const [viewOneDietPlan, setViewOneDietPlan] = useState({ ongoing: true, previous: -1 })
  const interval = { '0': 'today', '1': 'week', '2': 'month', '3': '3months' }
  const [ongoingDietPlan, setOngoingDietPlan] = useState({})
  const [ongoingExercisePlan, setOngoingExercisePlan] = useState({})
  const [prevDietPlan, setPrevDietPlan] = useState([])
  const [value, setValue] = useState('-1');
  const [upcoming, setUpComing] = useState([])


  useEffect(() => {
   
      setValues()
      
  

  }, [])

  const location = useLocation();
  const navigate=useNavigate();
  const encodedData = new URLSearchParams(location.search).get('data');
const objectData = location?.state
console.log(objectData,'[[[[[[')
  const[userData,setUserDate]=useState(objectData);
  window.scrollTo(0, 0);

  const setValues = async () => {
    let uname =  objectData.user_name
    let uid = objectData.id
    
     username=uname
    await setuserId(uid)
    await listDietPlan(uid);
  }


  const formatDate = (date) => {
    if (date && typeof date === 'string') {
      let splitDate = date.split("-");
      return splitDate[1] + '-' + splitDate[0] + '-' + splitDate[2];
    } else {
      return ""; // Return an empty string or handle the case when date is undefined
    }
  };
  const onIntervalChange = (value) => {
    if (value == '-1') {
      getAllDietPlan(0, 0, 0, userId)
    }
    else {
      getAllDietPlan(ongoingDietPlan, ongoingExercisePlan, value, userId)
    }
  }

  const listDietPlan = async (uid) => {

    // console.log(`https://aipse.in/api/getlistsdietplans?userid=${uid}`)
    await axios.get(`https://aipse.in/api/getlistsdietplans?userid=${uid}`)
      .then(function (response) {
        if (response?.data?.data == 'Data not found') {
          setLoading(false)
         
        }
        else {
          let prev = response?.data?.data?.filter(e => e.status == 'previous')
          let ongoing = response?.data?.data?.filter(e => e.status == 'ongoing')
          let upcoming = response?.data?.data?.filter(e => e.status == 'upcoming')
          setUpComing(upcoming ? upcoming : [])
          setPrevDietPlan(prev ? prev : [])
          if (ongoing?.length > 0) {
            getAllDietPlan(0, 0, 0, uid)
          }
       
        }
      })
      .catch(function (error) {
        setLoading(false)

        // Alert.alert("something went wrong");
        console.log(error, "listdietPlamn");
      });
  }

  const getAllDietPlan = (diet, exercise, value, uid) => {
    // console.log("getAlldeiteplan")
    let dieturl = `https://aipse.in/api/getAllDietPlan?userid=${uid}&type=food&status=ongoing`,
      exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=${uid}&type=exercise&status=ongoing`
    if (diet) {
      dieturl = `https://aipse.in/api/getAllDietPlan?userid=${uid}&startdate=${diet?.StartDate}&enddate=${diet?.EndDate}&type=food&status=${interval[value]}`
      if (exercise?.StartDate) {
        exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=${uid}&startdate=${exercise?.StartDate}&enddate=${exercise?.EndDate}&type=exercise&status=${interval[value]}`
      }
    }
    
    let days;
    value == '0' ? days = 1 : value == '1' ? days = 7 : value == '2' ? days = 30 : days = 90

    axios.get(dieturl)
      .then(function (response) {
       
        if (diet) {


          if (response?.data?.data?.RecommendedServings * days < response?.data?.data?.TotalServings) {
            response.data.data.TotalServings = parseInt
              (response?.data?.data?.RecommendedServings * days)
          }



        }


        // console.log(response.data.data,"responseee")

        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)

        
        
        setOngoingDietPlan(response?.data?.data)
        axios.get(exerciseurl)
          .then(function (response) {

            console.log(response?.data,"checking----exercise ---------")

            if (response?.data?.data) {
              if (diet) {
                if (response?.data?.data?.RecommendedServings * days < response?.data?.data?.TotalServings) {
                  response.data.data.TotalServings = parseInt
                    (response?.data?.data?.RecommendedServings * days)
                }

              }

              response.data.data.servingsLeft = parseInt
                (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
            

              setOngoingExercisePlan(response?.data?.data)
            }
            else {
              setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
            }

            setLoading(false)
          })
          .catch(function (error) {
            // Alert.alert("something went wrong");
            console.log(error);
          });
      })
      .catch(function (error) {
        // Alert.alert("something went wrong");
        console.log(error);
      });
  }

  const getOneDiet = (item, index) => {

    console.log(item.status, "itemmmm statusss .....  ")
    axios.get(`https://aipse.in/api/getAllDietPlan?userid=${userId}&startdate=${item.startdate}&enddate=${item.enddate}&type=food&status=${item.status}`)
      .then(function (response) {
        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
        setViewOneDietPlan({ ...viewOneDietPlan, previous: index })
        setoneDietplanData(response?.data?.data)
        axios.get(`https://aipse.in/api/getAllDietPlan?userid=${userId}&startdate=${item.startdate}&enddate=${item.enddate}&type=exercise&status=${item.status}`)
          .then(function (response) {
            response.data.data.servingsLeft = parseInt
              (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
            setOneExerciseData(response?.data?.data)

          })
          .catch(function (error) {
            // Alert.alert("something went wrong");
            console.log(error);
          });
      })
      .catch(function (error) {
        // Alert.alert("something went wrong");
        console.log(error);
      });
  }

  const handleListAllDietPlan=()=>{
   
    const objectData = userData;
    objectData.pathnamePrevious.push(location.pathname)
    
    objectData.pathnameCurrent[0]=location.pathname
    
    navigate(`/dashboardadmin/alldietplan`,{state:objectData})

  }
  
  
  const handleListAllExercisePlan=()=>{
   
    const objectData = userData;
    objectData.pathnamePrevious.push(location.pathname)
    
    objectData.pathnameCurrent[0]=location.pathname
    const encodedData = encodeURIComponent(JSON.stringify(objectData));
    //navigate(`/dashboardadmin/alldietplan?data=${encodedData}`);
    navigate(`/dashboardadmin/listallexerciseplan`,{state:objectData})

  }

  const handlegoback=()=>{
    console.log(userData,'userdataaa')
    
    
    const encodedData = encodeURIComponent(JSON.stringify(userData));
    
   navigate(-1,{state:objectData})
    
    //navigate(`${userData.pathname}?data=${encodedData}`,{ from: location.pathname });

  }
  
// console.log(uname,"username--checking---")  
// console.log(uid,"id-------checking")
console.log(ongoingDietPlan,"checking data ---ongoingDietPlan");
console.log(ongoingExercisePlan,"checking data----ongoingExercisePlan");
console.log(oneDietPlanData,"------oneDietPlanData  -----dataa");
console.log(oneExerciseData,"-----oneExerciseData --dtaa checking");
console.log(upcoming,"----upcoming----")


  return (
  < >
    {/* <img src={Logo} alt="nova logo" style={{height: "auto", width: "250px", marginLeft: "30px"}}/> */}
      

    <Snackbar
        open={alert1Open}
        onClose={() => handleAlertClose(1)}
        autoHideDuration={1000}
        >
         <Alert severity="success">Over all plan is open!</Alert>
        </Snackbar>
      <Snackbar
        open={alert2Open}
        onClose={() => handleAlertClose(2)}
        message="Today plan is open"
        autoHideDuration={1000}
        >
       <Alert severity="success">Today plan is open!</Alert>  
        </Snackbar>
      <Snackbar
        open={alert3Open}
        onClose={() => handleAlertClose(3)}
        message="Week plan is open"
        autoHideDuration={1000}
        >
        <Alert severity="success">Week plan is open!</Alert>  
         </Snackbar>
      <Snackbar
        open={alert4Open}
        onClose={() => handleAlertClose(4)}
        // message="1 Month plan is open"
        autoHideDuration={1000}
        >
        <Alert severity="success"> 1 Month plan is open!</Alert>  
         </Snackbar>
      <Snackbar
        open={alert5Open}
        onClose={() => handleAlertClose(5)}
        // message="3 Month plan is open"
        autoHideDuration={1000}
        // severity="success"
        >
        <Alert severity="success">3 Month plan is open!</Alert>  
         </Snackbar>

         <Grid container display="flex" alignItems='center'>
  <Grid onClick={handlegoback}  item >
             
            <IconButton>
               <Iconify icon="material-symbols:arrow-back-rounded" />
            </IconButton>

         </Grid>
         <Grid>
      <Typography variant="h3" style={hello} ml={'10px'}>{objectData?.user_name
} Dashboard</Typography>
    </Grid>
    {/* <Grid item>
    <img src={Logo} alt="nova logo" style={{height: "auto", width: "250px", marginLeft: "30px"}}/>
    </Grid> */}
    </Grid>
    
   {/* <Stack margin="10px">
    <Typography variant='h5' style={hello}>  Hello, {username} </Typography>     
    </Stack> */}
    <Card style={{margin:"10px"}}>
    
      <Card  style={{ backgroundColor:"#EBF5FF"}}>
        <CardContent >
          {/* <Card style={{backgroundColor:"#EBF5FF"}}> */}
            <Grid container   style={{display:'flex',flexDirection:"row",position:'relative',marginBottom:'1rem'}}>
               <Grid item xs={8}>
               {/* <CardContent > */}
                         <Typography  variant='h5' style={hello} >
                         Ongoing  Plan  
                      

                          </Typography>    

               {/* </CardContent> */}
               </Grid>
               


          {(ongoingDietPlan?.Type || ongoingExercisePlan?.Type) &&
        
             (<Grid  item xs={4} >
              {/* <CardContent > */}
                      <FormControl  sx={{ position:'absolute',right:5 }} size="small">
                     <Select  onChange={item => {
                setValue(item.target.value);
                onIntervalChange(item.target.value)
            }} 
            sx={{backgroundColor:"white"}}  defaultValue="-1" >
                     <MenuItem value="-1"  onClick={handleAlert1Click}>Over All</MenuItem>
                    
                    
                     <MenuItem value="0"onClick={handleAlert2Click} >Today</MenuItem>
                    
                     <MenuItem value="1"onClick={handleAlert3Click}>Week</MenuItem>
                    
                     <MenuItem value="2" onClick={handleAlert4Click}>1 Month</MenuItem>
                     <MenuItem value="3" onClick={handleAlert5Click}>3 Months</MenuItem>
                     </Select>
                     </FormControl>
                 <br/>
                
              {/* </CardContent> */}
              </Grid>)}
 
        

          </Grid>

          {/* </Card> */}
          
        { (ongoingDietPlan?.Type)?(
        <Stack style={{ backgroundColor:"#EBF5FF"}}>

          <Grid sx={12} margin={"10px"} >
  <Typography variant='h5' style={hello}>Diet</Typography>
</Grid>
        
        <Card  style={{backgroundColor:"",marginTop:"10px" }}>
        
          

             <Grid container item alignContent={"center"} minHeight="80px" >
          <Grid item xs={5.5} >
          <Typography variant='h4' style={{color:"black" ,textAlign:"center" }}>
      
          {formatDate(ongoingDietPlan?.StartDate)}
          </Typography > 
          </Grid>
          <Grid item xs={1}>
          <Typography variant='h4' sx={{color:"black",fontFamily:"Inter-regular",textAlign:"center"}}>to</Typography>
         
          </Grid>
          <Grid item  xs={5.5} justify="center" >
          <Typography variant='h4'  style={{color:"black", textAlign:"center"}}>
      
          {formatDate(ongoingDietPlan?.EndDate)}
          </Typography>
          </Grid>
          
          
          </Grid>
         
          
        </Card>
        
         
       


        <Card   style={{backgroundColor:"#2c2b2b",marginTop:"10px"}}  >
                  <CardContent  state={{item:ongoingDietPlan}}  to="/dashboard/dietplan" component={RouterLink} sx={{textDecoration:'none'}}>
                  <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                      <Grid item xs={4} alignItems="center" sx={{textAlign:'center'}} justifyContent="center">
                             
                              <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                              {ongoingDietPlan?.TotalServings}
                              </Typography>
                              <Typography style={subtext}>Servings recommended</Typography>
                              
                      </Grid>
                      <Grid item xs={4}  sx={{justifyContent:'center',textAlign: 'center',alignItems:"center",alignSelf:'center',alignContent:'center',}}>
                     
                        <Typography >
                        <img src={Diet}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                        </Typography>
                     

                     
                     
                      </Grid>
                      <Grid item xs={4} sx={{textAlign:'center'}} alignItems="center" justifyContent="center">
                             
                              <Typography style={{ fontSize:"25px" ,color:"#E1B725"}}>
                              {ongoingDietPlan?.servingsLeft}
                              </Typography>
                              <Typography style={subtext}>Servings left</Typography>
                            
                      </Grid>
                      
                     
                      
                      </Grid>
                  </CardContent>
          </Card>
          </Stack>):(<Card sx={{backgroundColor:"#8D25C1", marginTop:"10px" ,maxHeight:"800px"}}>
              <CardContent>
              <Typography  align="center"   style={calories}> No Diet Plans Are Created </Typography>
              </CardContent>
              </Card>)}
        

        {(ongoingExercisePlan?.Type)?(
        <Stack style={{ backgroundColor:"#EBF5FF",marginTop:"10px"}}>

<Grid sx={12} margin={"10px"} >
  <Typography variant='h5' style={hello}>Exercise</Typography>
</Grid>

<Card  style={{backgroundColor:"white",marginTop:"10px" }}>

<Grid container item alignContent={"center"} minHeight="80px" >
<Grid item xs={5.5} >
<Typography variant='h4' style={{color:"black" ,textAlign:"center" }}>

{formatDate(ongoingExercisePlan?.StartDate)}
</Typography > 
</Grid>
<Grid item xs={1}>
<Typography variant='h4' sx={{color:"black",fontFamily:"Inter-regular",textAlign:"center"}}>to</Typography>

</Grid>
<Grid item  xs={5.5} justify="center" >
<Typography variant='h4'  style={{color:"black", textAlign:"center"}}>

{formatDate(ongoingExercisePlan?.EndDate)}
</Typography>
</Grid>


</Grid>


</Card>
<Card   style={{backgroundColor:"#2c2b2b",marginTop:"10px"}}>
        <CardContent   to="/dashboard/Exercise" component={RouterLink} sx={{textDecoration:'none'}}>
        <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
            
            <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
                  
                    
                    <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                    {ongoingExercisePlan.TotalServings}
                    </Typography>
                    <Typography style={subtext} textAlign={"center"}>exercise recommended</Typography>
                   

                  
                   
            </Grid>
            <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
            
            <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
            
           
            </Grid>
            <Grid item xs={4} sx={{textAlign:'center'}}  >
              
              
                    <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                   
                    {ongoingExercisePlan.servingsLeft}
                    </Typography>
                    <Typography style={subtext}>exercise left</Typography>
                                        
                   
            </Grid>
                           
            </Grid>
        </CardContent>
</Card>
</Stack>):(<Card sx={{backgroundColor:"#8D25C1", marginTop:"10px" ,maxHeight:"800px"}}>
              <CardContent>
              <Typography  align="center"   style={calories}> No Exercise Plans Are Created</Typography>
              </CardContent>
              </Card>)}

        
         
          
        </CardContent>
      </Card>
      
    </Card>
 <br/>
   
   


         
      {prevDietPlan.length > 0 && (
        <Card sx={{margin:"10px"}} style={{backgroundColor:"white"}}>
          <Grid  sx={12} marginLeft={"30px"}  marginTop={"10px"}>
          <Typography variant='h5' style={hello} >Previous Plans</Typography>
    
           </Grid>
              {prevDietPlan.map((item, index) => (
                <CardContent key={index} > 
        
                
                    <Card  onClick={() => { index == viewOneDietPlan.previous ? setViewOneDietPlan(-1) : getOneDiet(item, index) }} style={{backgroundColor:"white", boxShadow:10, borderRadius: 10,cursor:'pointer' }} >

<Grid container item alignContent={"center"} minHeight="80px" >
<Grid item xs={5.5} >
<Typography variant='h4' style={{color:"black" ,textAlign:"center" }}>

{formatDate(item.startdate)}
</Typography > 
</Grid>
<Grid item xs={1}>
<Typography variant='h4' sx={{color:"black",fontFamily:"Inter-regular",textAlign:"center"}}>to</Typography>

</Grid>
<Grid item  xs={5.5} justify="center" >
<Typography variant='h4'  style={{color:"black", textAlign:"center"}}>

{formatDate(item.enddate)}
</Typography>
</Grid>


</Grid>
{viewOneDietPlan.previous === index && (
                    <Grid sx={{marginTop:"10px"}}>
                      {item?.type === 'food' ? (
                        <Card >
                          {oneDietPlanData === 'empty' ? (
                            <CardContent style={{ alignItems: "center", flexDirection: "row", justifyContent: 'space-between' }}>
                              <Typography style={{ color: "white" }}> No data found in diet plan</Typography>
                            </CardContent>
                          ) : (
                            <Card  style={{backgroundColor:"white", margin:"10px"}}  >
                            
                         
                                <CardContent >
                            <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                                
                                <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
                                      
                                        
                                        <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                        {oneDietPlanData.TotalServings}
                                        {/* {oneExerciseData.TotalServings} */}
                                        </Typography>
                                        <Typography style={subtext}>servings recommended</Typography>
                                       
                
                                </Grid>
                                <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
                                
                                <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                                
                               
                                </Grid>
                                <Grid item xs={4} sx={{textAlign:'center'}}  >
                                  
                                  
                                        <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                        {oneDietPlanData.servingsLeft}
                                       
                                        {/* {oneExerciseData.servingsLeft} */}
                                        </Typography>
                                        <Typography style={subtext}>servings left</Typography>
                                                            
                                       
                                </Grid>
                                               
                                </Grid>
                            </CardContent>
                            
                    </Card>
                          )}
                        </Card>
                      ) : item?.type === 'exercise' ? (
                        <Grid  >
                          {oneDietPlanData === 'empty' ? (
                            <CardContent style={{ justifyContent: "center", alignItems: "center" }}>
                              <Typography style={{ color: "white" }}> No data found in exercise plan</Typography>
                            </CardContent>
                          ) : (
                            <Card  margin="10px" style={{backgroundColor:"#2c2b2b",}}>
                            <CardContent  >
                            <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                                
                                <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
                                      
                                        
                                        <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
        
                                        {oneExerciseData.TotalServings}
                                        </Typography>
                                        <Typography style={subtext}>exercise recommended</Typography>
                                       
        
                                      
                                       
                                </Grid>
                                <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
                                
                                <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                                
                               
                                </Grid>
                                <Grid item xs={4} sx={{textAlign:'center'}}  >
                                  
                                  
                                        <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                       
                                       
                                        {oneExerciseData.servingsLeft}
                                        </Typography>
                                        <Typography style={subtext}>exercise left</Typography>
                                                            
                                       
                                </Grid>
                                               
                                </Grid>
                            </CardContent>
                             </Card>
                          )}
                        </Grid>
                      ) : (
                        <CardContent style={ { justifyContent: "center", alignItems: "center" }}>
                          <Typography>No activity</Typography>
                        </CardContent>
                      )}
                    </Grid>
                  )}

                </Card>

                 
                </CardContent>
              ))}
            
          
        </Card>
      )}


      
    
 
      {upcoming.length > 0 && (
        <Card sx={{margin:"10px"}} style={{backgroundColor:"#EBF5FF"}} >
          {/* <Typography variant='h5' style={hello}  >Upcoming Plans</Typography> */}
          <Grid  sx={12} marginLeft={"30px"}  marginTop={"10px"}>
          <Typography variant='h5' style={hello} >Upcoming Plans</Typography>
    
           </Grid>
          
           
              {upcoming.map((item, index) => (
                <Card key={index} sx={{margin:"20px",backgroundColor:"#EBF5FF"}} >
                  
                    
                      {item?.type === 'food' ? (
                        <Card  style={{backgroundColor:"#2c2b2b",}} >
                            
                         
                        <CardContent >
                    <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                        
                        <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
                              
                                
                                <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                {/* {upcoming.TotalServings} */}
                                {/* {oneExerciseData.TotalServings} */}
                                </Typography>
                                {/* <Typography style={subtext}>servings recommended</Typography> */}
                               

                              
                               
                        </Grid>
                        <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
                        
                        <img src={Diet}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                        
                       
                        </Grid>
                        <Grid item xs={4} sx={{textAlign:'center'}}  >
                          
                          
                                <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                {/* {upcoming.servingsLeft} */}
                               
                                {/* {oneExerciseData.servingsLeft} */}
                                </Typography>
                                {/* <Typography style={subtext}>servings left</Typography> */}
                                                    
                               
                        </Grid>
                                       
                        </Grid>
                    </CardContent>
                    
            </Card>
                       
                        // <img src={Diet}  alt="Diet image" style={{display: 'block', margin: 'auto'}}/>
                      ) : (

                        <Card   style={{backgroundColor:"#2c2b2b",}}>
                        <CardContent >
                        <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                            
                            <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
                                  
                                    
                                    <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
    
                                    {/* {upcoming.TotalServings} */}
                                    </Typography>
                                    {/* <Typography style={subtext}>exercise recommended</Typography> */}
                                   
    
                                  
                                   
                            </Grid>
                            <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
                            
                            <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                            
                           
                            </Grid>
                            <Grid item xs={4} sx={{textAlign:'center'}}  >
                              
                              
                                    <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
                                   
                                   
                                    {/* {upcoming.servingsLeft} */}
                                    </Typography>
                                    {/* <Typography style={subtext}>exercise left</Typography> */}
                                                       
                                   
                            </Grid>
                                           
                            </Grid>
                        </CardContent>
                         </Card>
                        // <img src={Exerciselogo}  alt="exercise logo" style={{display: 'block', margin: 'auto'}}/>
                        
                      )}
                      <Card sx={{marginTop:"5px"}}>
                     < Grid container item alignContent={"center"} minHeight="80px" sx={{backgroundColor:"#EBF5FF", }} >
            <Grid item xs={5}  >
            <Typography variant='h4' style={{color:"black" ,textAlign:"center", }}>
            {formatDate(item.startdate)}
           
            </Typography > 
            </Grid>
            <Grid item xs={2}>
            <Typography variant='h4' sx={{color:"black",fontFamily:"Inter-regular",textAlign:"center"}}>to</Typography>
           
            </Grid>
            <Grid item  xs={5} justify="center" >
            <Typography variant='h4'  style={{color:"black", textAlign:"center"}}>
           
            {formatDate(item.enddate)}
            </Typography>
            </Grid>
            
            
                     </Grid>
                     
                   </Card>
                 
                </Card>
              ))}
            
          
        </Card>
      )}
    
      
    <Stack mt={1}><Card  onClick={handleListAllDietPlan}  sx={{textDecoration:'none',cursor:'pointer'}} style={{backgroundColor:"#EBF5FF", margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'left', color:'black', fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} gutterBottom variant="h5" component="div" mt={3}  >
                   List All Diet Plan
                  </Typography></Stack></Card></Stack>

                  <Stack mt={1}><Card  onClick={handleListAllExercisePlan}  sx={{textDecoration:'none',cursor:'pointer'}} style={{backgroundColor:"#EBF5FF", margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'left', color:'black', fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} gutterBottom variant="h5" component="div" mt={3}  >
                   List All Exercise Plan
                  </Typography></Stack></Card></Stack>


              


          

                  <BarGraph1></BarGraph1>
      

         
   
    
  </>
  );
}