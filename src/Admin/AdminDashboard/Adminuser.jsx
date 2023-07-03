import {
  Grid,
  Typography,
  Icon,
  Box,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import { Link as RouterLink } from 'react-router-dom';
import {useState,useEffect} from 'react';
import CardContent from "@mui/material/CardContent";
import axios from 'axios';
import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import CreateDietPlan from '../AdminDiet/components/CreateDietPlanNut'
import BarGraph from "./BarGraph";
import { useLocation, useNavigate } from "react-router-dom";
// Import Highcharts
import Highcharts from "highcharts/highstock";
//import HighchartsReact from "./HighchartsReact.js";
import PieChart from "highcharts-react-official";
import BarGraph1 from "./BarGraph1";
export default function Adminuser() {
  const location=useLocation();
  const navigate=useNavigate();
  
  const [totalCountOfUser,setTotalCountOfUser]=useState('');
  const[totalCountOfInactiveUser,setTotalCountOfInactiveUser]=useState('')
  const[totalCountOfActiveUser,setTotalCountOfActiveUser]=useState('')
  const [barGraphData,setbarGraphData] = useState()
  const barGraph = async => {
    var config = {
        method: 'GET',
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
               name: "User Diet Plan Created",
               y:response?.data?.totalNoOfUsersFoodPlanCreated
  
              },
              // {
              //  name: "User Exercise Plan Not Created",
              //  y:response?.data?.totalNoofUsersDietPlanNotCreated
  
              // },
              {
               name: "User Exercise Plan Created",
               y:response?.data?.totalNoofUsersExercisePlanCreated
  
              },
        ]
        setbarGraphData(realData)
        
        
 
        
      })
      .catch(function (error) {
        console.log(error);
      });
}

const [optionsGraph,setOptions]=useState({})
const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
  // Simulate chart loading time
  const delay = setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  // Clean up the timeout on component unmount
  return () => clearTimeout(delay);
}, []);

useEffect(()=>{
  if(barGraphData){
  const options = {
    chart: {
      type: "pie"
    },
    title: {
      text: '',
      margin: 0
    },
    credits: {
      enabled: false
  },
    series: [
      {
        name:"Total Count",
        showInLegend: false, 
        data: [
          {
            name:barGraphData[0].name,
            y: barGraphData[0].y
          },
          {
            name:barGraphData[1].name,
            y: barGraphData[1].y
          },
          {
            name:barGraphData[2].name,
            y: barGraphData[2].y
          },
          {
            name:barGraphData[3].name,
            y: barGraphData[3].y
          },
          {
            name:barGraphData[4].name,
            y: barGraphData[4].y
          },
          // {
          //   name:barGraphData[5].name,
          //   y: barGraphData[5].y
          // },
        ]
      }
    ]
  };

  setOptions(options);
  console.log(barGraphData,"<--------------setCountDatasetCountData-");
}
},[barGraphData])
  useEffect(()=>{
    apiHit()
    count ();
    barGraph()
},[]);




const [countData,setCountData] = useState("")





const count = async => {
    var config = {
        method: 'Get',
      maxBodyLength: Infinity,
        url: 'https://novapwc.com/api/count',
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        setCountData(response.data)
        //setTotalCountOfUser(response.data.totalCountOfUser)
        setTotalCountOfActiveUser(response.data.totalCountOfActiveUser)
        setTotalCountOfInactiveUser(response.data.totalCountOfInactiveUser)
        console.log(response.data.totalCountOfActiveUser,"<--------------setCountDatasetCountData-");
      })
      .catch(function (error) {
        console.log(error);
      });
}
  const apiHit=async()=>{
        
    
    let config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url:'https://novapwc.com/api/searchUser?name=&page=1&count=100',
        headers: {'Content-Type': 'application/json' }
      };
      
      axios(config)
      .then((response) => {
       setTotalCountOfUser(response.data.totalCountOfUser)
        // setUsersData([...usersData,response.data.data]);
        //setTotalCountOfInactiveUser(response.data.totalCountOfInactiveUser)
        //setTotalCountOfActiveUser(response.data.totalCountOfActiveUser)
       
        
        console.log( response.data,'--------Admin Search direct respone from adminuser------');
      })
      .catch((error) => {
        console.log(error);
      });
}
  return (
    <div>
      {" "}
      {
        <img
          src={Logo}
          alt="nova logo"
          style={{ height: "auto", width: "250px", marginLeft: "10px" }}
        />
      }
      {/* <CreateDietPlan/> */}
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#212121", margin: "10px" , marginTop:'42px'}}
      >
        <CardContent>
          <Grid
             sx={{textDecoration:'none',cursor:'pointer'}} 
             container
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="space-between"
            onClick={()=>{
              const objectData = {userStatus:'all',pathname:location.pathname}
            //const encodedData = encodeURIComponent(JSON.stringify(objectData));
            navigate('/dashboardadmin/adminsearch',{state:objectData});

            }}
          >
            <Grid  alignItems="center" justifyContent="center" item>
              <span style={{ fontSize: "25px", color: "#E1B725", fontFamily: 'Inter-SemiBold', lineHeight: "38px" }}> {totalCountOfUser} </span>{" "}
            </Grid>
            <Grid  alignItems="center" justifyContent="center" item>
 
                <Typography  sx={{color:'white'}}variant="h5" component="h2">
                Total Users
                </Typography>

            </Grid>
            <Grid
              
              
              // alignItems="center"
              // justifyContent="center"
              
              item
            >
              <img src={Diet} className="dinning-img" alt="dinning" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>


     


      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#212121", margin: "10px" }}
      >
        <CardContent>
          <Grid
              sx={{textDecoration:'none',cursor:'pointer'}} 
             container
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="space-between"
            onClick={()=>{
              const objectData = {userStatus:'active',pathname:location.pathname}
           // const encodedData = encodeURIComponent(JSON.stringify(objectData));
            navigate('/dashboardadmin/adminsearch',{state:objectData});

            }}
          >
            <Grid  alignItems="center" justifyContent="center" item>
              <span style={{ fontSize: "25px", color: "#E1B725", fontFamily: 'Inter-SemiBold', lineHeight: "38px" }}> {totalCountOfActiveUser}</span>{" "}
            </Grid>
            <Grid  alignItems="center" justifyContent="center" item>
 
                <Typography  sx={{color:'white'}}variant="h5" component="h2">
                Active Users
                </Typography>

            </Grid>
            <Grid
              
              
              // alignItems="center"
              // justifyContent="center"
              
              item
            >
              <img src={Diet} className="dinning-img" alt="dinning" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "#212121", margin: "10px" }}
      >
        <CardContent>
          <Grid
              sx={{textDecoration:'none',cursor:'pointer'}} 
             container
            flexDirection="row"
            spacing="1"
            alignItems="center"
            justifyContent="space-between"
            onClick={()=>{
              const objectData = {userStatus:'inactive',pathname:location.pathname}
            //const encodedData = encodeURIComponent(JSON.stringify(objectData));
            navigate('/dashboardadmin/adminsearch',{state:objectData});

            }}
          >
            <Grid  alignItems="center" justifyContent="center" item>
              <span style={{ fontSize: "25px", color: "#E1B725", fontFamily: 'Inter-SemiBold', lineHeight: "38px" }}> {totalCountOfInactiveUser}</span>{" "}
            </Grid>
            <Grid  alignItems="center" justifyContent="center" item>
 
                <Typography  sx={{color:'white'}}variant="h5" component="h2">
                Pending Users
                </Typography>

            </Grid>
            <Grid
              
              
              // alignItems="center"
              // justifyContent="center"
              
              item
            >
              <img src={Diet} className="dinning-img" alt="dinning" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      
      

      
     
              
            {!isLoading &&  <PieChart highcharts={Highcharts} options={optionsGraph} />}
             
        
     
      {/* <Card sx={{ minWidth: 275 }} style={{ margin: "20px" }} >
        <CardContent>
          <Grid container flexDirection="row" spacing="1">
          
          </Grid>{" "}
          <Grid>
            <Box
              sx={{
                "& > :not(style)": {
                  m: 2,
                },
              }}
            >
              <Icon color="primary"> + </Icon>
            </Box>
          </Grid>
        </CardContent>{" "}
      </Card> */}
    </div>
  );
}