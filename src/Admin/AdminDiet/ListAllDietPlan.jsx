

import * as React from 'react';
import {useState,useEffect,useRef} from 'react';
import moment from 'moment';
import { useLocation } from "react-router-dom";
import { Card, CardContent, Grid, Typography, Avatar, Badge, Button, Stack, Container } from '@mui/material';

import Backbutton from "../../assets/Backbutton.svg";
import { Link as RouterLink } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import Iconify from 'src/components/iconify/Iconify';
import Slide from '@mui/material/Slide';
import Page from 'src/components/Page';
import CreateDietPlan from './components/CreateDietPlanNut';
import { useNavigate} from 'react-router-dom';
import AlertDialog from '../UserStats/AlertDialog';
import axios from 'axios';
import { Create as CreateIcon } from '@mui/icons-material';
// import EditCreateDietPlan from './components/EditCreateDietPlan';

// import ScrollItems from './components/ScrollItems';
import ScrollableTabsButtonPrevent from "../../components/scrollbar/ScrollItems";
// import BackDrop from './components/BackDrop';

const text ={
  fontFamily: 'Inter-Regular',
  color:"#112866",
  marginLeft:'12px'
  
};

const edit={
  fontFamily: 'Inter-Regular',
  color:"yellow",
  marginLeft:"50px", 
  
  right:30,
  position:'absolute',

}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const pageheading={
    // fontFamily:"Inter-Bold",
    fontWeight: "bold",
    fontSize: "20px",
    lineHeight: "30px",
    color: "#112866",
  marginLeft:'12px'

  };
 
export default function ListAllDietPlan(props){
  let  navigate = useNavigate();
  const location = useLocation();
  //const encodedData = new URLSearchParams(location.search).get('data');
  const objectData = location?.state

  const childcomrefAlert=useRef();

 
  const [open, setOpen] = React.useState(false);
  const [dataFromApi,setDataFromApi]=useState([])
  const childComponentRef = useRef(null);
  console.log(objectData,'opop')
  const[userData,setUserData]=useState(objectData);
  const [scrolled, setScrolled] = useState(false);
  
  const [userId,setUserId]=useState("");
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{
    if(objectData.pathnameCurrent[0]==='/dashboardadmin/adminprofile' || objectData.pathnameCurrent[0]==='/dashboardadmin/createinstantexerciseplan' ){
      childcomrefAlert.current.handleClickOpenAlert('Diet Plan Created Successfully');
    }
    console.log(objectData,'////////')
  },[objectData])


 const handleback=()=>{
  console.log(userData)
    userData.pathnameCurrent[1]===0?1:userData?.pathnamePrevious.pop();
    userData.pathnameCurrent[1]=1;
    
    const encodedData = encodeURIComponent(JSON.stringify(userData));
    //navigate(`${userData?.pathnamePrevious[userData?.pathnamePrevious.length-1]}?data=${encodedData}`);
    //navigate(`${userData?.pathnamePrevious[userData?.pathnamePrevious.length-1]}`,{state:userData})
    
    
    if(userData?.pathnameCurrent[0]==='/dashboardadmin/createinstandietplan' ){
      
      navigate(`/dashboardadmin/Adminitems`,{state:userData})
    }
    else{
      console.log(userData?.pathnameCurrent[0],'/////----')
    navigate(-1,{state:userData})
  }

 
    
  
 }
  
 
useEffect(()=>{
  console.log(userId,'user id to teset');
  apiHit();
},[userId])

  useEffect(()=>{
    console.log(userData,'teseting instant  0')
    
      setUserId(userData.id)
   
   
  },[userData])


 

  const apiHit=async()=>{
    let data = '';

        let config = {
          method: 'POST',
          maxBodyLength: Infinity,
          url: `http://44.212.136.151:8081/api/listalldietplans?user_id=${userId}&type=food`,
          headers: { },
          data : data
        };

        axios.request(config)
        .then((response) => {
          //console.log(response?.data?.ListallDietPlan[0].Category,'----from APi hit list All Diet plan');
          setDataFromApi(response?.data?.ListallDietPlan);
          console.log(response?.data?.ListallDietPlan,'response?.data?.ListallDietPlan');
        })
        .catch((error) => {
          console.log(error);
        });
  }

  console.log(dataFromApi,'dataFromapi---12')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  console.log(dataFromApi,'dataFromApi[0]?.Category')
    
    return(
        <div> 
          <Page>
          
           <CreateDietPlan userid={userData.id} apiHitParent={apiHit} ref={childComponentRef} />
           
           
            <Grid mt={2} container flexDirection="row" alignItems="center">

        <Grid   item>
            {/* <img src={Backbutton} className='dinning-img' alt="dinning" /> */}
            
                  <IconButton >
                    <Iconify onClick={handleback}  icon="material-symbols:arrow-back-rounded" />
                  </IconButton>
            </Grid>
           
            <Grid  item>
            <Typography style={pageheading}>List All Diet Plans {userData?.user_name}{userData?.value}</Typography>
            </Grid>
         </Grid>



         { dataFromApi?
          dataFromApi?.map(item=>{
            return (
              <Card  sx={{ margin: '10px', marginTop: '40px',backgroundColor:'#EBF5FF'}} >
              <CardContent>
              <Grid container flexDirection={"column"} >
    
                 <Grid container item flexDirection={"row"} justifyContent={'space-between'}>
                  <Grid>
                  <Typography sx={text}>Start Date: {item.start_date}</Typography>
                  <Typography sx={text}>End Date: {item.end_date}</Typography>
                  </Grid>
                  
                  <Grid>
                  <Button onClick={() => {
                    //console.log(item,'copyy')
                    const sendData={...item,...objectData}
                    sendData.action='Edit'
                    childComponentRef.current.editClick(sendData)
                    
                    } }>
                  <Typography  >Edit</Typography>
                  </Button>
                  </Grid>
                  
    
    
                 </Grid>
                
              </Grid>
              <ScrollableTabsButtonPrevent category={item?.Category}/>
    
              </CardContent>
             </Card>

            );
          }):
          <div style={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems: "center" , height:"45vh" }}  >
           
<Typography   align="center" variant='h4'  >No Diet Plans Found</Typography>

</div>
         }
        

        


        
        
         
         {/* <Stack mt={20}><Card style={{backgroundColor:"purple", fontFamily:'Inter-Regular', margin:"10px", alignItems:"center"}}><Stack mb={2}> <Typography sx={{ fontSize: 20, fontWeight: 'bold', textAlign:'center', color:'white', fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} mt={3}  >
                   Save Confirm !!
                  </Typography></Stack></Card></Stack> */}
                  
                      
              </Page>

               <Button
      style={{
        float: "right",
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        // opacity: scrolled ? '0' : '1',
        pointerEvents: scrolled ? 'none' : 'auto',
        transition: 'opacity 0.3s',
        display: 'flex',
        alignItems: 'center',

       width: scrolled? '0px' : '200px',
       height: '30px',
       minWidth:'0px',
      
       
      }}
      variant="contained"
      color="primary"
      startIcon={<CreateIcon sx={{padding: '0px'}}/>}
       onClick={(e)=>{
                      const today = new Date();
                      const Obj1 = {
                        category: '',
                        value: '',
                      };
                      const intialValues = {
                        interval: "",
                        startDate: "",
                        endDate: "",
                        category: '',
                        items: [Obj1],
                        
                      };
                  const sendData={...intialValues,...objectData}
                  sendData.action='Create'
                  childComponentRef.current.editClick(sendData)
              }} 
        //       style={{
        //   float: "right", marginLeft: "1rem",  padding: "0.2rem", marginTop: "-0.5rem",
        //   position: 'fixed', zIndex: '1', bottom: 40, right: 40
        // }}
    
      //   sx={ {
      //     ':hover': {
      //         bgcolor: "#007AFF", // theme.palette.primary.main
      //         color: 'white',
      //         border: '#ffd796'
      //     },
      //     ':active': {
      //         bgcolor: "#007AFF",
      //         color: "#white"
      //     },
      //     bgcolor: '#007AFF',
      //     color: "white",
      //     border: 'none'
  
      // }} 
      >
  
  
          <span style={{ display: scrolled ? 'none' : 'block' }}>Create Diet Plan</span>
             </Button>
             <AlertDialog Message="Created Successfully" ref={childcomrefAlert}/>
                  </div>
                  
    );
}