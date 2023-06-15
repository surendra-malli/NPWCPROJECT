<<<<<<< HEAD
import React from "react"
import { Grid, Typography, Select, FormControl, InputLabel,Button,IconButton,Stack,  } from '@mui/material';
import{useState,useEffect} from 'react'
import { useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';
import { styled } from '@mui/material/styles';
=======
// @mui
import { Grid, Typography, Select, FormControl, InputLabel,Button,IconButton,Stack  } from '@mui/material';
import{useState,useEffect, useDebugValue} from 'react'
import { useLocation,useNavigate } from "react-router-dom";
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Iconify from 'src/components/iconify/Iconify';
>>>>>>> aastha

import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
<<<<<<< HEAD
import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
// import DietPlan from '../Diet/DietPlan'; 
import Iconify from 'src/components/iconify/Iconify';
=======

import MenuItem from '@mui/material/MenuItem';
// import DietPlan from '../Diet/DietPlan'; 
import { Link } from 'react-router-dom';
>>>>>>> aastha
import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import Exerciselogo from "../../assets/Exerciselogo.svg";
import  "../styles.css";
<<<<<<< HEAD
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChevronDownIcon from '@material-ui/icons/ExpandMore';
// import Stack from '@mui/material/Stack';
=======

>>>>>>> aastha
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
<<<<<<< HEAD
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
=======


export default function DashboardAppPage(props) {

  // expand 
  // const location = useLocation();
  // const [dataOfUser,setDataOfUser] = useState(location.state?.data);
  // console.log(dataOfUser,'------dataOfUser----');
  

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

  var username = 'Seema'

  const location = useLocation();
  const navigate=useNavigate();
  const encodedData = new URLSearchParams(location.search).get('data');
const objectData = JSON.parse(decodeURIComponent(encodedData));

  const[userData,setUserDate]=useState(objectData);
  console.log(objectData,'objectdata')
  
  const [oneDietPlanData, setoneDietplanData] = useState([])
  const [oneExerciseData, setOneExerciseData] = useState([])
  const [data, setData] = useState({ date: "31  March \n 2023", servingsConsumed: 120, servingsLeft: 60, exercisesRecommended: 20, exercisesLeft: 10 })
  const [selected, setSelected] = useState({ label: "Today", value: "today" })
>>>>>>> aastha
  const [viewOneDietPlan, setViewOneDietPlan] = useState({ ongoing: true, previous: -1 })
  const interval = { '0': 'today', '1': 'week', '2': 'month', '3': '3months' }
  const [ongoingDietPlan, setOngoingDietPlan] = useState({})
  const [ongoingExercisePlan, setOngoingExercisePlan] = useState({})
  const [prevDietPlan, setPrevDietPlan] = useState([])
  const [value, setValue] = useState('-1');
<<<<<<< HEAD
  const [upcoming, setUpComing] = useState([])


  useEffect(() => {
   
      setValues()
      
  

  }, [])

  const location = useLocation();
  const navigate=useNavigate();
  const encodedData = new URLSearchParams(location.search).get('data');
const objectData = location?.state

  const[userData,setUserDate]=useState(objectData);
  

  const setValues = async () => {
    let uname =  objectData.user_name
    let uid = objectData.id
    
     username=uname
    await setuserId(uid)
    await listDietPlan(uid);
  }

  // const formatDate = (date) => {
  //   let splitDate = date.split("-")
  //   return splitDate[1]+'-'+splitDate[0]+'-'+splitDate[2]
  // }
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
          localStorage.removeItem('exercisestartDate')
          localStorage.removeItem('exerciseendDate')
          localStorage.removeItem('dietstartDate')
          localStorage.removeItem('dietendDate')
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
        //   else {
        //     localStorage.removeItem('exercisestartDate')
        //     localStorage.removeItem('exerciseendDate')
        //     localStorage.removeItem('dietstartDate')
        //     localStorage.removeItem('dietendDate')
        //     setLoading(false)
        //   }
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
    // console.log(dieturl, exerciseurl)
    let days;
    value == '0' ? days = 1 : value == '1' ? days = 7 : value == '2' ? days = 30 : days = 90

    axios.get(dieturl)
      .then(function (response) {
        // 
        // console.log(response.data, "foodddd")
        // setOngoingDietPlan({ servingsLeft: 0, TotalServings: 0 })
        // setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
        if (diet) {


          if (response?.data?.data?.RecommendedServings * days < response?.data?.data?.TotalServings) {
            response.data.data.TotalServings = parseInt
              (response?.data?.data?.RecommendedServings * days)
          }



        }


        // console.log(response.data.data,"responseee")

        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)

        // localStorage.setItem('dietstartDate', response?.data?.data?.StartDate)
        // localStorage.setItem('dietendDate', response?.data?.data?.EndDate)
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
            //   localStorage.setItem('exercisestartDate', response?.data?.data?.StartDate)
            //   localStorage.setItem('exerciseendDate', response?.data?.data?.EndDate)

=======
    useEffect(()=>{
      console.log('users Data to test',location?.state?.data)
    },[userData])

  useEffect(() => {
    listDietPlan()
  }, [])

  


  const onIntervalChange = (value) => {
    if (value == '-1') {
      getAllDietPlan(0,0,0)
    }
    else {
      getAllDietPlan(ongoingDietPlan, ongoingExercisePlan, value)
    }
  }

  const listDietPlan = () => {
   
    axios.get(`https://aipse.in/api/getlistsdietplans?userid=1`)
      .then(function (response) {
        console.log(response?.data, "response in list diet plan")
        let prev = response?.data?.data?.filter(e => e.status == 'previous')
        let ongoing = response?.data?.data?.filter(e => e.status == 'ongoing')
        setPrevDietPlan(prev ? prev : [])
        console.log('prev and ongoing',prev,ongoing);
        if (ongoing?.length > 0) {
          getAllDietPlan(0,0,0)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(ongoingDietPlan,'----data coming')
  }

  const getAllDietPlan = (diet, exercise, value) => {
     console.log(diet,'diet', exercise,'exercise',value)
    console.log('called');
    let dieturl = `https://aipse.in/api/getAllDietPlan?userid=1&type=food&status=ongoing`,
      exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=1&type=exercise&status=ongoing`
    if (diet) {
      dieturl = `https://aipse.in/api/getAllDietPlan?userid=2&startdate=${diet?.StartDate}&enddate=${diet?.EndDate}&type=food&status=${interval[value]}`
      if (exercise?.StartDate) {
        exerciseurl = `https://aipse.in/api/getAllDietPlan?userid=2&startdate=${exercise?.StartDate}&enddate=${exercise?.EndDate}&type=exercise&status=${interval[value]}`
      }
    }
    console.log('diet and exwrcise url',dieturl, exerciseurl)
    axios.get(dieturl)
      .then(function (response) {
        let days;
          value == '0' ? days = 1 : value == '1' ? days = 7 : value == '2' ? days = 30 : days = 90
        // 
        console.log(response.data, "foodddd")
      
        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
        setOngoingDietPlan(response?.data?.data)
        axios.get(exerciseurl)
          .then(function (response) {
            console.log(response.data, "exercise")
            if (response?.data?.data) {
              response.data.data.servingsLeft = parseInt
                (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
>>>>>>> aastha
              setOngoingExercisePlan(response?.data?.data)
            }
            else {
              setOngoingExercisePlan({ servingsLeft: 0, TotalServings: 0 })
            }
<<<<<<< HEAD

            setLoading(false)
          })
          .catch(function (error) {
            // Alert.alert("something went wrong");
=======
          })
          .catch(function (error) {
>>>>>>> aastha
            console.log(error);
          });
      })
      .catch(function (error) {
<<<<<<< HEAD
        // Alert.alert("something went wrong");
=======
>>>>>>> aastha
        console.log(error);
      });
  }

  const getOneDiet = (item, index) => {
<<<<<<< HEAD

    console.log(item.status, "itemmmm statusss .....  ")
    axios.get(`https://aipse.in/api/getAllDietPlan?userid=${userId}&startdate=${item.startdate}&enddate=${item.enddate}&type=food&status=${item.status}`)
=======
    console.log(item.status, "itemmmm statusss .....  ")
    axios.get(`https://aipse.in/api/getAllDietPlan?userid=2&startdate=${item.startdate}&enddate=${item.enddate}&type=food&status=${item.status}`)
>>>>>>> aastha
      .then(function (response) {
        response.data.data.servingsLeft = parseInt
          (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
        setViewOneDietPlan({ ...viewOneDietPlan, previous: index })
        setoneDietplanData(response?.data?.data)
<<<<<<< HEAD
        axios.get(`https://aipse.in/api/getAllDietPlan?userid=${userId}&startdate=${item.startdate}&enddate=${item.enddate}&type=exercise&status=${item.status}`)
=======
        axios.get(`https://aipse.in/api/getAllDietPlan?userid=2&startdate=${item.startdate}&enddate=${item.enddate}&type=exercise&status=${item.status}`)
>>>>>>> aastha
          .then(function (response) {
            response.data.data.servingsLeft = parseInt
              (response?.data?.data.TotalServings - response?.data?.data.CosumedServings)
            setOneExerciseData(response?.data?.data)
<<<<<<< HEAD

          })
          .catch(function (error) {
            // Alert.alert("something went wrong");
=======
          })
          .catch(function (error) {
>>>>>>> aastha
            console.log(error);
          });
      })
      .catch(function (error) {
<<<<<<< HEAD
        // Alert.alert("something went wrong");
=======
>>>>>>> aastha
        console.log(error);
      });
  }

<<<<<<< HEAD
=======
  const handlegoback=()=>{
    console.log(userData,'userdataaa')
    userData.pathnameCurrent[1]===0?1:userData?.pathnamePrevious.pop();
    userData.pathnameCurrent[1]=1;
    
    const encodedData = encodeURIComponent(JSON.stringify(userData));
    navigate(`${userData?.pathnamePrevious[userData?.pathnamePrevious.length-1]}?data=${encodedData}`);
    
    //navigate(`${userData.pathname}?data=${encodedData}`,{ from: location.pathname });

  }

>>>>>>> aastha
  const handleListAllDietPlan=()=>{
   
    const objectData = userData;
    objectData.pathnamePrevious.push(location.pathname)
    
    objectData.pathnameCurrent[0]=location.pathname
    const encodedData = encodeURIComponent(JSON.stringify(objectData));
<<<<<<< HEAD
    //navigate(`/dashboardadmin/alldietplan?data=${encodedData}`);
    navigate(`/dashboardadmin/alldietplan`,{state:objectData})

  }
  const handlegoback=()=>{
    console.log(userData,'userdataaa')
    userData.pathnameCurrent[1]===0?1:userData?.pathnamePrevious.pop();
    userData.pathnameCurrent[1]=1;
    
    const encodedData = encodeURIComponent(JSON.stringify(userData));
    //navigate(`${userData?.pathnamePrevious[userData?.pathnamePrevious.length-1]}?data=${encodedData}`);
    navigate(`${userData?.pathnamePrevious[userData?.pathnamePrevious.length-1]}`,{state:objectData});
    
    //navigate(`${userData.pathname}?data=${encodedData}`,{ from: location.pathname });

  }
  
// console.log(uname,"username--checking---")  
// console.log(uid,"id-------checking")
console.log(ongoingDietPlan,"checking data ---ongoingDietPlan");
console.log(ongoingExercisePlan,"checking data----ongoingExercisePlan");
console.log(oneDietPlanData,"------oneDietPlanData  -----dataa");
console.log(oneExerciseData,"-----oneExerciseData --dtaa checking");
console.log(upcoming,"----upcoming----")
=======
    navigate(`/dashboardadmin/alldietplan?data=${encodedData}`);

  }
>>>>>>> aastha


  return (
  < >
<<<<<<< HEAD
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
=======

  <Grid container display="flex" alignItems='center'>
>>>>>>> aastha
  <Grid onClick={handlegoback}  item >
             
            <IconButton>
               <Iconify icon="material-symbols:arrow-back-rounded" />
            </IconButton>

         </Grid>
    <Grid item>
    <img src={Logo} alt="nova logo" style={{height: "auto", width: "250px", marginLeft: "30px"}}/>
    </Grid>
    </Grid>
<<<<<<< HEAD
   <Stack margin="10px">
    <Typography variant='h5' style={hello}>  Hello, {username} </Typography>     
    </Stack>
=======
        
>>>>>>> aastha
    <Card style={{margin:"10px"}}>
    
      <Card  style={{ backgroundColor:"#D1A6E7"}}>
        <CardContent >
          <Card style={{backgroundColor:"#D1A6E7"}}>
            <Grid container   style={{display:'flex',flexDirection:"row",position:'relative',marginBottom:'1rem'}}>
<<<<<<< HEAD
               <Grid item xs={8}>
               {/* <CardContent > */}
                         <Typography  variant='h5' style={hello} >
                         Ongoing  Plan  
                      

                          </Typography>    

               {/* </CardContent> */}
=======
               <Grid item xs={6}>
               <CardContent >
                         <Typography  variant='h5' style={hello} >
                              Hello, {username}
                          </Typography>    

               </CardContent>
>>>>>>> aastha
               </Grid>
               


          {(ongoingDietPlan?.Type || ongoingExercisePlan?.Type) &&
        
<<<<<<< HEAD
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
=======
             (<Grid  item xs={6} >
              <CardContent >
                      <FormControl  sx={{ position:'absolute',right:0 }} size="small">
                     <Select  onChange={item => {
                setValue(item.target.value);
                onIntervalChange(item.target.value)
                
                
            }} 
            sx={{backgroundColor:"white"}} >
                     <MenuItem value="-1" >Over All</MenuItem>
                     <MenuItem value="0">Today</MenuItem>
                     <MenuItem value="1">Week</MenuItem>
                    
                     <MenuItem value="2">1 Month</MenuItem>
                     <MenuItem value="3">3 Week</MenuItem>
>>>>>>> aastha
                     </Select>
                     </FormControl>
                 <br/>
                
<<<<<<< HEAD
              {/* </CardContent> */}
              </Grid>)}
 
        

=======
              </CardContent>
              </Grid>)}
 
          
>>>>>>> aastha
          </Grid>

          </Card>
          
<<<<<<< HEAD
        { (ongoingDietPlan?.Type)?(<Card style={{ backgroundColor:"#D1A6E7"}}>

          <Grid sx={12} margin={"10px"} >
  <Typography variant='h5' style={hello}>Diet</Typography>
</Grid>
        
        <Card  style={{backgroundColor:"#8D25C1",marginTop:"10px" }}>
        
          
            {/* <Grid style={{display:'flex',alignContent:'center',justifyContent:'center',alignItems:"center",margin: "10px"}}>
              <Typography variant='h4' style={{color:"black" , textAlign:"center" }}>
              
              {formatDate(ongoingDietPlan?.StartDate)}
              </Typography > 
              <Typography sx={{color:"white",fontFamily:"Inter-regular",textAlign:"center",marginLeft:"1px",marginRight:"1px"}}>to</Typography>
              <Typography variant='h4'  style={{color:"black" ,textAlign:"center"}}>
           
              {formatDate(ongoingDietPlan?.EndDate)}
              </Typography>
              
            </Grid> */}
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
          </Card>):(<Card sx={{backgroundColor:"#8D25C1", marginTop:"10px" ,maxHeight:"800px"}}>
              <CardContent>
              <Typography  align="center"   style={calories}> You don`t have any ongoing  diet plans. Please consult Dietician.</Typography>
              </CardContent>
              </Card>)}
        

        {(ongoingExercisePlan?.Type)?(<Card style={{ backgroundColor:"#D1A6E7"}}>

<Grid sx={12} margin={"10px"} >
  <Typography variant='h5' style={hello}>Exercise</Typography>
</Grid>

<Card  style={{backgroundColor:"#8D25C1",marginTop:"10px" }}>

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
</Card>):(<Card sx={{backgroundColor:"#8D25C1", marginTop:"10px" ,maxHeight:"800px"}}>
              <CardContent>
              <Typography  align="center"   style={calories}> You don`t have any ongoing exercise plans. Please consult Dietician.</Typography>
              </CardContent>
              </Card>)}

        
         
=======


          <Card  style={{backgroundColor:"#8D25C1"}}>
            <Typography color="purple" variant='h4' >
              <div style={{display:'flex',alignContent:'center',justifyContent:'center',alignItems:"center",margin: "10px"}}>
                <Typography variant='h4' style={{color:"black" ,margin: "5px" }}>
                {ongoingDietPlan?.StartDate}
                </Typography>
                <Typography variant='h4'  style={{color:"black" ,margin: "5px"}}>
                {ongoingDietPlan?.EndDate}
                </Typography>
                
              </div>

              
              
            </Typography>

          </Card>
>>>>>>> aastha
          
        </CardContent>
      </Card>
      
    </Card>
<<<<<<< HEAD
 <br/>
   
   


         
      {prevDietPlan.length > 0 && (
        <Card sx={{margin:"10px"}} style={{backgroundColor:"white"}}>
          <Grid  sx={12} marginLeft={"30px"}  marginTop={"10px"}>
          <Typography variant='h5' style={hello} >Previous Plans</Typography>
    
           </Grid>
              {prevDietPlan.map((item, index) => (
                <CardContent key={index} > 
        
                
                    <Card  onClick={() => { index == viewOneDietPlan.previous ? setViewOneDietPlan(-1) : getOneDiet(item, index) }} style={{backgroundColor:"white", boxShadow:10, borderRadius: 10 }} >

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
                            <Card  style={{backgroundColor:"#2c2b2b", margin:"10px"}}  >
                            
                         
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
        <Card sx={{margin:"10px"}} style={{backgroundColor:"#D1A6E7"}} >
          {/* <Typography variant='h5' style={hello}  >Upcoming Plans</Typography> */}
          <Grid  sx={12} marginLeft={"30px"}  marginTop={"10px"}>
          <Typography variant='h5' style={hello} >Upcoming Plans</Typography>
    
           </Grid>
          
           
              {upcoming.map((item, index) => (
                <Card key={index} sx={{margin:"20px",backgroundColor:"#D1A6E7"}} >
                  
                    
                      {item?.type === 'food' ? (
                        <Card  style={{backgroundColor:"#2c2b2b",}} >
                            
                         
                        <CardContent >
=======

    
    
    
    
   


    <Card   style={{backgroundColor:"#212121",margin:"10px"}}>
                    <CardContent   to="/dashboard/dietplan" component={RouterLink} sx={{textDecoration:'none'}}>
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
    
            <Card   style={{backgroundColor:"#212121",margin:"10px"}}>
                    <CardContent   to="/dashboard/Exercise" component={RouterLink} sx={{textDecoration:'none'}}>
>>>>>>> aastha
                    <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                        
                        <Grid item xs={4} alignItems="center"  sx={{textAlign:'center'}} alignSelf={"center"} justifyContent="center">
                              
                                
                                <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
<<<<<<< HEAD
                                {/* {upcoming.TotalServings} */}
                                {/* {oneExerciseData.TotalServings} */}
                                </Typography>
                                {/* <Typography style={subtext}>servings recommended</Typography> */}
=======
                                {ongoingExercisePlan.TotalServings}
                                </Typography>
                                <Typography style={subtext}>exercise recommended</Typography>
>>>>>>> aastha
                               

                              
                               
                        </Grid>
                        <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",textAlign:'center',alignSelf:'center',alignContent:'center'}}>
                        
<<<<<<< HEAD
                        <img src={Diet}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
=======
                        <img src={Exerciselogo}  alt="dinning" style={{display: 'block', margin: 'auto'}}/>
>>>>>>> aastha
                        
                       
                        </Grid>
                        <Grid item xs={4} sx={{textAlign:'center'}}  >
                          
                          
                                <Typography style={{  fontSize:"25px" ,color:"#E1B725"}}>
<<<<<<< HEAD
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
                     < Grid container item alignContent={"center"} minHeight="80px" sx={{backgroundColor:"#8D25C1", }} >
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
    
      
    <Stack mt={10}><Card  onClick={handleListAllDietPlan}  sx={{textDecoration:'none'}} style={{backgroundColor:"purple", margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'left', color:'white', fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} gutterBottom variant="h5" component="div" mt={3}  >
                   List All Diet Plan
                  </Typography></Stack></Card></Stack>
      

         
   
    
  </>
  );
}
=======
                                {ongoingExercisePlan.servingsLeft}
                                </Typography>
                                <Typography style={subtext}>exercise left</Typography>
                                


                          
                               
                        </Grid>
                        
                       
                        
                       
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>

            
            {/* <Button id = "create-poa-button"
            variant = "contained"
            // onClick = { handleClickOpen }
            style = {
                {
                    float: 'right',
                    marginLeft: '1rem',
                    borderRadius: '50%',
                    padding: '0.2rem',
                    marginTop: '-0.5rem',
                    position: 'fixed',
                    zIndex: '1',
                    bottom: 40,
                    right: 40,
                }
            }

            sx = {
                {
                    ':hover': {
                        bgcolor: "#F0E7F5", // theme.palette.primary.main
                        color: '#9B59B6',
                        border: '#ffd796'
                    },
                    ':active': {
                        bgcolor: "#F0E7F5",
                        color: "#9B59B6"
                    },
                    bgcolor: '#F0E7F5',
                    color: "#9B59B6",
                    border: 'none'
                }
            }
            title = "Create POA" >

            <span style = {   { fontSize: '2rem' } } > + </span> 
            </Button > */}
            <Stack mt={10}><Card  onClick={handleListAllDietPlan}  sx={{textDecoration:'none'}} style={{backgroundColor:"purple", margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'left', color:'white', fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} gutterBottom variant="h5" component="div" mt={3}  >
                   List All Diet Plan
                  </Typography></Stack></Card></Stack>

            <Stack mt={4}><Card style={{backgroundColor:"purple", margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', color:'white', fontFamily:'Inter-semiBold', lineHeight:'38px', marginLeft:'10px'}} mt={3}  >
              Create Exercise Plan
            </Typography></Stack></Card></Stack>

             {/* expand */}
     
     
      {(!expanded)?<ExpandMore disableRipple style={{ backgroundColor: 'transparent' }} expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">

      
    <Button variant="warning" style={{textAlign:'right'}} id="edit_user"
      sx={{
        ':hover': {
          bgcolor: '#ffd796', // theme.palette.primary.main
          color: '#ff7424',
        },
        ':focus': {
          bgcolor: '#ffd796',
          color: "#ff7424"
        },
        bgcolor: '#ffd796',
        color: "#ff7424"
      }} component={RouterLink} to="#" >
      Edit User
    </Button> 

    {/* startIcon={<Iconify icon="material-symbols:edit" />} */}

  </ExpandMore>: 
  
  <IconButton  title="close" onClick={handleCloseClick} color="inherit" aria-label="close"  style={{float:'right'}} id="close">
      1
  </IconButton>}

         
    
    
  </>
  );
}
>>>>>>> aastha
