import * as React from 'react';
import { useState,useEffect,useRef } from 'react';
import moment from 'moment';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { format } from 'date-fns';
import { Link as RouterLink, useNavigate} from 'react-router-dom';

import { DemoContainer , DemoItem} from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import DropdownUsers from './UsersDropDownExercise';
import axios from 'axios'
import InactiveProfile from './InactiveProfile';
import AlertDialog from '../../UserStats/AlertDialog'

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {CardContent, Card, Stack, Grid, TextField ,MenuItem,InputLabel,NativeSelect,FormControl} from '@mui/material';
import { useLocation } from 'react-router-dom';


// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Action } from 'history';
import { values } from 'lodash';




const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
  
});
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));
const currencies = [
    {
      value: 'week',
      label: 'week',
    },
    {
      value: 'month',
      label: 'month',
    },
    {
      value: 'day',
      label: 'day',
    }
  ];

  function changeHandler(e){
    console.log(e?.target.value)
    
  }

  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));


  const datepicker={
    minWidth: 200,
    maxWidth: 400,
    '@media (max-width: 600px)': {
      minWidth: 150,
      maxWidth: 300,
    },
  }



  
const  CreateInstantExercisePlan= React.forwardRef((props, ref) => {
    
let  navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const childcomrefAlert=useRef();
    const [userData,setUserData]=useState("")
   const [flag,setFlag]=useState("falsee");
   const[usersDataSelected,setUserDataSelected]=useState({});
   
    const [open, setOpen] = React.useState(true);
    const [dataOfDiet,setDataOfDiet]=useState("")
    const [categoryData,setCategoryData]=useState([])
    const childComponentRef = useRef(null);

    const [action,setAction]=useState("");
    const today = new Date();
    const Obj1 = {
      category: '',
      value: '',
    };
    const location = useLocation();
const encodedData = new URLSearchParams(location.search).get('data');
const objectData = location?.state;

    const intialValues = {
      interval: 0,
      startDate: moment(today)?.format('DD-MM-YYYY'),
      endDate: "",
      category: '',
      items: [Obj1],
    };
    const [valuesD, setValuesD] = useState(objectData);


 

    console.log(objectData,'intial values');

    useEffect(()=>{
        console.log(valuesD,'inside effect')
    },[valuesD])
    const [dateVisible, setDateVisible] = useState(false);
    const addButton = () => {
      setValuesD({...valuesD, items: [...valuesD?.items, Obj1]});
    };

  
    const dataDelete = (i,index) => {
      console.log(i,'iii',index,'indexx')
    let firstData = [...valuesD?.items]
    console.log(i,"<---asdasdas", firstData)
    const filterData  =firstData?.filter((itm,ind)=>ind!==index)
    console.log(filterData,"<--fghbjnk")
    if(i?.Diet_id){
    var data = JSON.stringify({
      "diet_id": i?.Diet_id
    });
    
    var config = {
      method: 'PUT',
    maxBodyLength: Infinity,
      url: 'https://aipse.in/api/deleteDiet',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
   setValuesD({...valuesD,items:filterData})
    alert("Category Deleted Successfully")


      console.log(JSON.stringify(response.data));
      props.apiHitParent();
    })
    .catch(function (error) {
     alert("Something Went Wrong")

      console.log(error);
    });
  }
  else{
    setValuesD({...valuesD,items:filterData})
    // Alert?.alert("delete")
  }
    // const data = {...valuesD};
    // data?.items.pop();

    // setValuesD(data);
  };

    const dataHit =()=>{

      let config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: 'https://aipse.in/api/listallusers',
        headers: { }
      };
      
      axios.request(config)
      .then(async(response) => {
        console.log(response.data?.data,'response.data?.data?')
        
        console.log('datahit callled');
          
         setStatusOfUser(response.data?.data);
          
        
        //console.log("dataass is ",datass());
        })
        .catch((error) => {
          console.log(error);
        });
}

function setStatusOfUser(users){
  console.log('setStatusOfUser called')
  let s=1;
  users.map((itm,index)=>{
    // console.log(itm,"<--qwewqeqw")
    if(itm?.id===valuesD?.id){
      if(itm?.status==='inactive'){
        childcomrefAlert.current.handleClickOpenAlert('Diet Plan cannot be created on In active Users');

        //alert('Diet Plan cannot be created on In active Users');
        const newObj={...itm,email:itm.email_id};
        //childComponentRef.current.handleClickOpenData(newObj)
        const objectData =valuesD;
        console.log(valuesD,'teset fot in active ')
          // objectData.email_id=selectedUser1.email;
          // objectData.user_name=selectedUser1.value
          // objectData.id=selectedUser1.id;
          // valuesD.id=selectedUser1.id

          objectData.pathnamePrevious=[location.pathname]
          
          objectData.pathnameCurrent=[location.pathname,0]
          const encodedData = encodeURIComponent(JSON.stringify(objectData));
          navigate('/dashboardadmin/adminprofile',{state:objectData});

        s=0
        //console.log('userId',userId,flag)
        
        //itm[email]=itm.email_id;
       
        return;
      }
    }
    if(index===users?.length-1){
      if(itm?.id===valuesD?.id){
        if(itm?.status==='inactive'){
          
          
          console.log('userId',valuesD?.id)
        }
        else{
         
          addItems();
        }
      }
      else if(s===1){
        
        addItems();
        
      }
     
    }
  return {label: itm?.user_name, value: itm?.user_name,status:itm?.status,id:itm?.id,email:itm?.email_id}
})
}
      // apihit
    //  setUserData(datass)

const addItemsHandler=()=>{
  console.log('addItemsHandler called')
  dataHit();
}
const addItems = () => {
  if(valuesD?.interval===0){
    let msg='Please fill all fields'
    childcomrefAlert.current.handleClickOpenAlert(msg);
  }
  else{
  let newss = {};
  let flag=false;
  const categoryData = valuesD?.items?.map(itm => {
    newss = {...newss, [itm?.category]: parseInt(itm?.value)};
    if(itm?.category==='' || itm?.value===''){
      flag=true;
    }
    return {
      [itm?.category]: parseInt(itm?.value),
    };
  });
  if(flag){
    let msg='Please fill all fields'
    childcomrefAlert.current.handleClickOpenAlert(msg);
  }
  else{
  let alldata = {};
  const totaldata = valuesD?.items?.map(itm => {
    alldata = {
      ...alldata,
      [itm?.category]: parseInt(parseInt(itm?.value) * parseInt(valuesD?.interval)),
    };
    return {
      [itm?.category]: parseInt(itm?.value * valuesD?.interval),
    };
  });
   console.log(valuesD,"<--fdcghvbj")
  const reqyest = {
    user_id: valuesD.id,
    start_date:moment(valuesD?.startDate,"DD-MM-YYYY").format('DD-MM-YYYY'),
    end_date:moment(valuesD?.endDate,"DD-MM-YYYY").format('DD-MM-YYYY'),
    type: 'exercise', 
    interval:
      valuesD?.interval == 7
        ? 'week'
        : valuesD?.interval == 30
        ? 'month'
        : '2 month',
    category: newss,
    total_servings: alldata,
 

   };
  let config = {
    method: 'POST',
    maxBodyLength: Infinity,
  //  url: baseUrl + '/assignDietPlanForPatient',
   url: `https://aipse.in/api/assignDietPlanForPatient`,

    headers: {
      'Content-Type': 'application/json',
    },
    data: [reqyest],
  };

  axios
    .request(config)
    .then(response => {
     let msg='Diet Plan Created Successfully'
      childcomrefAlert.current.handleClickOpenAlert(msg);
      // console.log(JSON.stringify(response.data));
      //navigate('/dashboardadmin/alldietplan',{state:{data:usersDataSelected}})
      const objectData = valuesD;
      objectData.pathnamePrevious=['/dashboardadmin/Adminexercise']
    
      objectData.pathnameCurrent=[location.pathname,0]
     
     // navigate(`/dashboardadmin/alldietplan?data=${encodedData}`);
     navigate('/dashboardadmin/listallexerciseplan',{state:objectData})

      props.apiHitParent();
    })
    .catch(error => {
       console.log(error);
    });
    {  console.log([reqyest],"<--gdfhdfdfhdfh")}

    setOpen(false);
  }
  
}
};


  

const checkDuplicateCategory=(data,dup)=>{
  let flag=false;
 data?.map((item)=>{
  if(item.category===dup) flag=true
 })

 return flag
}

      const [userId,setUserId]=useState()
      
      const handleDataChangeUserId = (newData) => {
        setUserDataSelected(newData);
        console.log(newData.id,'new data')
        setUserId(newData.id);
      };

    
    
    React.useImperativeHandle(ref, () => ({
      editClick,
      handleClickOpen
    }));
   
   
    function editClick(val){
     

      console.log('edit clicked');
      const val1=val;
      setDataOfDiet(val1);

      
      
      setAction('Edit');
      

      handleClickOpen();
    
    }



   
  
    const handleClickOpen = () => {

      setOpen(true);
     
      setValuesD(intialValues);
     
    };
  
    const handleClose = (e) => {
      
     setValuesD(intialValues);
     console.log(intialValues,'intialvalues111');
    //  props.apiHitParent();
    //  setAction("");
    navigate('/dashboardadmin/AdminExercise');
      setOpen(false);
    };
   
    const handleCloseSave=async(e)=>{
     
        //console.log('hitting create')
        addItemsHandler();
      
      
      
    }
    const handleCloseDelete=()=>{
      DeleteDietPlan();
      setOpen(false);
      setAction("");
    }
    useEffect(()=>{
      categoryhit();
    },[])
   
    const categoryhit = async => {
      let config = {
          method: 'GET',
          maxBodyLength: Infinity,
          url: 'https://aipse.in/api/getAllCategories?type=exercise',
          headers: { 'Content-Type': 'application/json' },
      };
      axios(config)
          .then((response) => {
              setCategoryData(response?.data?.data)
              console.log(response?.data?.data, "<------------------------111setCategoryDatasetCategoryData");
          })
          .catch((error) => {
              console.log(error);
          });

  }
   
   


    
  
    return (
      <div>
        <AlertDialog Message="Created Sucessfully" ref={childcomrefAlert}/>
          
      
        {/* <Button variant="contained" style={{
          float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem",
          position: 'fixed', zIndex: '1', bottom: 40, right: 40
        }}
       onClick={handleClickOpen} 
        sx={{
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
        }} >
  
  
          <span style={{ fontSize: "2rem" }}>+</span>
        </Button> */}
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
              <Typography sx={{ ml: 2, flex: 1, fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px' }} variant="h6" component="div">
                Create Exercise Plan
              </Typography>
              <Button autoFocus color="inherit" onClick={handleCloseSave}>
                save
              </Button>
              { action==='Edit' &&(
              <Button autoFocus color="inherit" onClick={handleCloseDelete}>
                Delete
              </Button>)
            }     
            </Toolbar>
          </AppBar>
          {/* <Card style={{padding:"20px 5px", margin:"0px"}}><CardContent> */}
          <Stack m={3}>
            <Typography  style={{display: 'inline-block',marginRight:"30", fontFamily: 'Inter-SemiBold', lineHeight: "38px", marginLeft:'10px'}} variant='h5' gutterLeft >Select Interval </Typography>
            </Stack>
  
  
          {/* <Stack marginLeft={3}> 
          <TextField
          onClick={changeHandler}
            id="outlined-select-currency"
            select
            label="Select Your Interval"
            defaultValue="month"
          >
              {currencies.map((option) => (
              <MenuItem key={option.value} value={option.label} name= {option.value} label={option.label}>
                {option.label}
              </MenuItem>
            ))}</TextField></Stack> */}

<Stack  m={3}><DropdownUsers  valuesD={valuesD} onDataChangeuserId={handleDataChangeUserId}></DropdownUsers></Stack>


            <Stack m={3}>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Interval</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={valuesD?.interval}
          label="Select Interval"
          onChange={e => {
            console.log(valuesD?.startDate,"<--valuesD?.startDate")
          const newDate = moment(valuesD?.startDate,"DD-MM-YYYY")
            ?.add( e?.target?.value, 'days')
             ?.format('DD-MM-YYYY');
            console.log(newDate,"<---newDate",e,typeof e,valuesD?.startDate)
          setValuesD({
            ...valuesD,
            interval:parseInt(e?.target?.value) ,
            endDate: newDate,
          });
          console.log(parseInt(e?.target?.value),'parseInt(e?.target?.value)')
        }}
         
        > 
              <MenuItem value="7">Week</MenuItem>
                  <MenuItem value="30">Month</MenuItem>
                  <MenuItem value="90">3 Month</MenuItem>
        </Select>
      </FormControl>
            </Stack>


 
            
  
  
       
            <Grid container  id="date-picker-stack" flexDirection="row">
        <Grid  xs={6} xl={6}   item>
         
        <CardContent>  
          <LocalizationProvider   dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DesktopDatePicker']} >
          <DatePicker  label="Start Date"  slotProps={{ textField: { fullWidth: true } }}
          
                  onChange={date => {
                    if (date) {
                       console.log(moment(date)?.format('DD-MM-YYYY'),"<---eee")
                      const newDate = moment(date)
                        ?.add(valuesD?.interval, 'days')
                        ?.format('DD-MM-YYYY');
                        console.log(newDate,date,valuesD?.interval,"<--qwert")
                      setValuesD({
                        ...valuesD,
                        startDate: moment(date)?.format('DD-MM-YYYY'),
                        endDate: newDate,
                      });
                    }
                  }}
                     renderInput={(params) => <TextField {...params} sx={{ gridColumn: "span 4" }}/>} />
        </DemoContainer>
        
      </LocalizationProvider>
      </CardContent>  
         </Grid>
  
         <Grid item xs={6} xl={6}  fullWidth mt="10px">
         
         <CardContent alignItems='center'>  
         <TextField label="End Date" value={valuesD.endDate} variant='outlined'  fullWidth/>
       </CardContent>  
          </Grid>
   




       
       
       </Grid> 

       {
        valuesD?.items?.map((item,index)=>{
          return (

            <Stack marginLeft={3}   marginRight={2}>
            <Grid mb={4}   Item><Card> <CardContent>
                <Grid container flexDirection="row" justifyContent="space-between" >
                    
                    <Grid item xs={4}  md={5} lg={5}> 
                                   
       <FormControl fullWidth>
        <InputLabel >Category</InputLabel>
        <Select
          l
          value={item.category}
          label="Category"
          onChange={e => {

          
            
            const data = [...valuesD?.items];
            let flag=checkDuplicateCategory(data, e?.target?.value)
            if(flag){
              let msg=`Category ${e?.target?.value} Already Selected`
            childcomrefAlert.current.handleClickOpenAlert(msg);
            }else{
            data[index] = {...data[index], category: e?.target?.value};
            setValuesD({...valuesD, items: data});
            }
          
          }}
          
        >
         
         {categoryData?.map((option,index) => (
        <MenuItem key={option?.category_name} value={option?.category_name}>
          {option?.category_name}
        </MenuItem>
           ))}
         
            
        </Select>
           </FormControl>
              </Grid>
                                              
            <Grid xs={5}  md={5} lg={5} marginRight={1} item>
                                                  
                                              
                <TextField label="Sets" 
                type='number'
                  onChange={e => {

          
            
                    const data = [...valuesD?.items];
                    data[index] = {...data[index], value: e?.target?.value};
                    setValuesD({...valuesD, items: data});
                
                }}
                
                variant='outlined' value={item.value} fullWidth/>
                                  
                                      </Grid>
    
                                      <Grid xs={2} md={1} lg={1}  item> 
                    {index!==0 && (
                    
                     <IconButton
              
                >
                  <DeleteIcon 
                  
                  
                  onClick={() => {
                    dataDelete(valuesD?.items[index],index);
                  }}
                  
                  />
                </IconButton>)
        }</Grid>
                                  
                    </Grid></CardContent> </Card>   </Grid>
                </Stack>
          )
        })
       }
  


         
  
  
       
       
      

        
              
  
        <Button variant="contained" onClick={addButton} style={{
          float: "right", marginLeft: "1rem", borderRadius: "50%", padding: "0.2rem", marginTop: "-0.5rem",
          position: 'fixed', zIndex: '1', bottom: 40, right: 40
        }}
    
        sx={{
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
        }} >
  
  
          <span style={{ fontSize: "2rem" }}>+</span>
        </Button>
        <InactiveProfile ref={childComponentRef}></InactiveProfile>
            
        </Dialog>
      </div>
    );
  });


 

export default CreateInstantExercisePlan