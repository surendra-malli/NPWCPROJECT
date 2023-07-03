import React from 'react';
import { useState, useEffect,useRef } from 'react';
import moment from 'moment';
// import { LongPressEventType, useLongPress } from "use-long-press";
import { Link as RouterLink,useLocation } from 'react-router-dom';
import { Grid, Typography, Card, CardContent,ButtonBase,Button, Tooltip } from '@mui/material';
 import CreateCategory from "../AdminDiet/component/CreateCategory";
import useLongPress from '../AdminDiet/components/UseLongPress';
import Logo from "../../assets/nova.svg";
import Peas from "../../assets/Peas.svg";
import axios from 'axios';
import {  Snackbar } from '@mui/material';
import MuiAlert from '@mui/lab/Alert';
import CreateInstantDietPlan from './components/CreateInstantDietPlan';
import { Link } from "react-router-dom";
import AlertDialog from '../UserStats/AlertDialog';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import Page from 'src/components/Page'
const title = {
    fontFamily: "Inter-Bold",
    fontSize: "30px",
    color: "#112866",
};
const plusStyle = {
    width: "34px",
    height: "26px",
    backGround: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px"
   
  };
const maintitle = {
    fontFamily: 'Inter-Bold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    color: "#112866",
};
export default function AdminDietCategory(props) {
    const childcomref = useRef();
    const childcomrefAlert=useRef();
    
    const navigate=useNavigate();
    const childComponentRef = useRef(null);
    const [longPressCount, setlongPressCount] = useState(0)
    const [clickCount, setClickCount] = useState(0)
    const [categoryData, setCategoryData] = useState([])
    const [isitem,setItem] = useState()
    const [showState,setShowState] = useState(false)
    const location = useLocation();
    const [messageOfUserStatus,setMessageOfUserStatus]=useState("Done");

    const onLongPress = (itemName) => {
      console.log('longpress is triggered');
      // functiona need
     
      childcomref.current.handleClickOpen()
      setlongPressCount(longPressCount + 1)
    };
    
    const onClick = (e) => {
      console.log('click is triggered');
      setClickCount(clickCount + 1)
    }
  
    const defaultOptions = {
      shouldPreventDefault: true,
      delay: 200,
    };

    const handeInstantCreateDietPlan=()=>{

    }
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
    


    useEffect(() => {
        
        categoryhit();
    }, []);
    const categoryhit = async => {
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: 'https://novapwc.com/api/getAllCategories?type=food',
            headers: { 'Content-Type': 'application/json' },
        };
        axios(config)
            .then((response) => {
                setCategoryData(response?.data?.data)
                 console.log(response?.data?.data, "<------------------------111setCategoryDatasetCategoryData");
                //childcomrefAlert.current.handleClickOpenAlert();
            })
            .catch((error) => {
                console.log(error);
            });


    }

    const parentToHitData=(value)=>{
        console.log(value,'---val')
        if(value==='Rename'){
            
            handleToggleAlert();
           
        }
        else if(value==='Create'){
           
            handleToggleAlert();
            
            
        }
        else{
           
            handleToggleAlert();
           
        }
        categoryhit();
    }

    const handleClickEdit=(e,categoryName,categoryId)=>{
        //console.log(val,'val');
        childcomref.current.handleClickOpenEdit(categoryName,categoryId)
    }

    const [openAlert, setOpenAlert] = useState(false);

  const handleToggleAlert = () => {
    
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
   
    console.log('setOpenAlert(false);');
    setOpenAlert(false);
  };

    return (
        <Page title=" Diet Category " >
        {/* <CreateInstantDietPlan ref={childComponentRef} ></CreateInstantDietPlan> */}
            <Grid container justifyContent='space-between' alignItems='center'>
                <Grid item>
            {<img src={Logo} alt="nova logo" style={{ height: "auto", width: "250px", marginBottom:'10px'}} />}

                </Grid>
                <Grid item>
                        <Button  onClick={() => {
                           
                            //childComponentRef.current.handleClickOpen()
                            const today = new Date();
                            const Obj1 = {
                                category: '',
                                value: '',
                              };
                            const intialValues = {
                                interval: '',
                                startDate: moment(today)?.format('DD-MM-YYYY'),
                                endDate: moment(today)?.format('DD-MM-YYYY'),
                                category: '',
                                items: [Obj1],
                                pathname:location.pathname,
                                selectedUser:'',
                                id:''
                              };
                            const encodedData = encodeURIComponent(JSON.stringify(intialValues));
                            //navigate(`/dashboardadmin/createinstandietplan?data=${encodedData}`);
                            navigate(`/dashboardadmin/createinstandietplan`,{state:intialValues})
                        }

                            }>Create Instant Diet Plan</Button>
                    </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid p={3}  xs={12} spacing={2} container display="flex" justifyContent="space-between">
                    <Grid  item>
                        <Typography style={title} variant='h3'>
                            Diet Categories {categoryData?.length>0?'('+categoryData?.length+')':""}
                        </Typography>
                        
                    </Grid>
                    
                    
                </Grid>
            </Grid>

            <div className="App">
            

   
    </div>
            {categoryData ? categoryData?.map(item => {
                return (
                   

 <Card key={item?.category_id} style={{backgroundColor:"#EBF5FF", margin:"10px"}}>
            
<Grid container   justifyContent="space-between" alignItems="center" style={{padding:"30px"}}>
    <Grid xs={11} to="/dashboardadmin/adminproteins" sx={{textDecoration:'none'}} component={RouterLink} state={{data:item}}  style={{padding:"5px"}} item>
        
        <Typography variant="body1" component="span" style={maintitle} >
        {item?.category_name}

        </Typography>
    </Grid>
  
        
        <Grid xs={1} alignSelf='end' item>
            <Tooltip title='Edit Diet Category'>
             <Button onClick={e=>{handleClickEdit(e,item?.category_name,item?.category_id)}}>Edit</Button>
             </Tooltip>
             
             </Grid>
        
        
        
        
       
        
   
</Grid>

</Card>
                );
            })
            :
            <div style={{ display: "flex", justifyContent: "center", flexDirection:"column", alignItems: "center" , height:"45vh" }}  >
           
                <Typography   align="center" variant='h4' >No Diet Categories Found</Typography>

                </div>
            
            }

               
            <CreateCategory  categoryData={categoryData} categoryhit={()=>{parentToHitData()}}  ref={childcomref} setShowState ={() =>{
                setItem("")
                setShowState(false)
                
            }}  />
            {console.log(categoryData,"<--------bjuhjuhjnjhnjhn")}
            {/* <useLongPressCount/>  state={{ categoryData:categoryData  }} */}
            <AlertDialog Message="Created Successfully" ref={childcomrefAlert}/>
            
        </Page>
    );
}




{/* <Card   key={item.category_id}  style={{ backgroundColor: "#F0E7F5", margin: '1rem', boxShadow: '#c4c4c4', }}>
                       
                      
                            <Grid container spacing={2}  component={RouterLink} state={{data:item}} sx={{ textDecoration: 'none' }} justifyContent='center' alignItems='center'>
                                <Grid  to="/dashboardadmin/adminproteins" component={RouterLink} state={{data:item}} item xs={9} spacing={2} md={10} >
                                    <Grid item >
                                    <Typography variant="body1" component="span" style={maintitle}>
                                        {item?.category_name}
                                        </Typography>
                                        
                                    </Grid>
                                </Grid>
                                <Grid display={'flex'} item xs={3} md={2}>
                                    
                                    <Button onClick={e=>{handleClickEdit(e,item.category_name,item.category_id)}} sx={{ height: 10,width:25, padding: 1, margin: 2 }}> Edit</Button>
                                    
                                </Grid>
                            </Grid>
                        
                        
                        
 </Card> */}

// <Card key={item.category_id} style={{backgroundColor:"#F0E7F5", margin:"10px"}}>
            
// <Grid container  sx={{textDecoration:'none'}} justifyContent="space-between" alignItems="center" style={{padding:"30px"}}>
//     <Grid item style={{padding:"5px"}}>
        
//         <Typography variant="body1" component="span" style={maintitle}>
//         {item.category_name}
//         </Typography>
//     </Grid>
//     <Grid item>
//         <Grid display='flex' flex-direction='row'>
//         <Grid item> <Button onClick={() => childComponentRef.current.handleClickOpenEdit(item.category_name,item.category_id)}>Edit</Button></Grid>
//         <Grid state={{data:item}}  to="/dashboardadmin/adminproteins" component={RouterLink} item>
//         <Typography variant="h5" component="span" style={plusStyle}>
//         <img  src={Arrowforward} alt="Arrowforward logo" />
//         </Typography>
//         </Grid>
//         </Grid>
        
//     </Grid>
// </Grid>

// </Card>