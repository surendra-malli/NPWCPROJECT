import * as React from 'react';
import { useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DeleteIcon from '@mui/icons-material/Delete';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { RadioGroup } from '@mui/material';
import axios from 'axios';
import {

 
  Radio,
 
  

  DialogContent,
  Icon
} from '@mui/material';




import Iconify from 'src/components/iconify/Iconify';

import {CardContent,Card, Stack, Grid, TextField ,MenuItem,InputLabel,NativeSelect,FormControl} from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const currencies = [
    {
      value: 'USD',
      label: 'helllooo',
    },
    {
      value: 'EUR',
      label: 'carbohydrates',
    },
    {
      value: 'BTC',
      label: 'Protein',
    },
    {
      value: 'JPY',
      label: 'Fats',
    },
  ];

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



 const FullScreenDialog=React.forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);
  const [grams, setgrams] = React.useState('');
  const [images,setImages] = useState([])
  const [viewImage, setViewImage] = React.useState(false);
  const [categorydata,setCategorydata]=useState(props.categorydata);
  const[categoryname,setCategoryName]=useState(categorydata.category_name)
  const [itemName,setItemName]=useState("");
  const [itemdescription,setItemdescription]=useState("")
  const [itemCalories,setItemCalories]=useState("")
  console.log(categorydata,'----categorydata---')
  const [reload,setReload]=React.useState(false);
  const [action,setAction]=useState('Create')
  const deleteImage = (index) => {
    images.splice(index, 1);
    setImages([...images]);
  };
  // useEffect({
  //   formData.item_image=images[0].toString().slice(22,);
  // },[images])
  const [formDataEdit,setFormDataEdit]=useState({})

  React.useImperativeHandle(ref, () => ({
    editClick
  }))
  useEffect(()=>{
    setFormDataEdit(formDataEdit)
  },[formDataEdit])
  function editClick(val){
    
    setFormDataEdit(val);
    setAction('Edit');
    
    console.log(formDataEdit,'data from edit click',val);
    setItemName(val.item_name);
    setItemCalories(val.calories);
    setItemdescription(val.description);

    setOpen(true);
  }
  

  const [formData,setFormData]=useState(
    {
      "item_name":"",
      "time_or_weight":500,
      "units":"grams",
      "calories":"",
      "category_id":categorydata.category_id,
      "description":"",
      "item_image":"",
      "sets":0,
      "counts":0,
      "type":"food"
  }

  )


  
  

  function getBase64(file, callback) {

    const reader = new FileReader();

    reader.addEventListener('load', () => callback(reader.result));

    reader.readAsDataURL(file);
  }
const convertImage = (e) => {
    console.log("this is calleddddfdsfs",e)
    // data.append('emp_id', userid);
    // data.append('file', e.target.files[0]);
    // setImagePath([...imagePath, e.target.files[0]])
    const imageData = URL.createObjectURL(e.target.files[0]);
    console.log(imageData, "files")
    getBase64(e.target.files[0], function (base64Data) {
      console.log('getBase64')
      setImages([ base64Data])
      setViewImage(true);
      console.log(images,'----images----');
      console.log(base64Data,'base64Data')
    //   setViewImage(true)
    
  });
    console.log("upload method is calling ")
    //console.log(images[0],'slicing-----',images[0].toString().slice(22,),'----image to upload----');
    formData.item_image=images[0]?.toString().slice(22,);
    
    // setFormData(formData=>({
    //   ...formData,
    //   [item_image]:images[0]?.toString().slice(22,)
    // }))
     setImages([])
    setReload(!reload);
    console.log(formData,'formData');
    //alert("Photo Uploaded Successfully..")
    
  }


  const UploadImages = async(e) =>{
    if (images.length === 0) {
      alert("No photos to upload.")
      throw new Error('No photos to upload.');
    }
      
  
      if(images.length<=0){
        alert("No Image is Selected!");
        setReload(!reload);
      }
      else{
        console.log("upload method is calling ")
        console.log(images[0],'slicing-----',images[0].toString().slice(22,),'----image to upload----');
        formData.item_image=images[0].toString().slice(22,);
        setImages([])
        setReload(!reload);
        alert("Photo Uploaded Successfully..")
      }
     
            
  
      }
  
  
  

  const handleChanges = (event) => {
    setgrams(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    // alert("form saved sucesfully");

   
    setOpen(false);
    
  };
  const handleCloseSave=()=>{
    console.log(formData,'--data to post in api')
    console.log("form saved");
    if(action==='Edit') {
      apiHitEdit();
      console.log(formDataEdit,'formDataEditSave')
      props.dataHitParent();
    }
   else apiHit();
    setOpen(false);
    props.dataHitParent();
  }


  const apiHitEdit=async=>{

    let data = JSON.stringify({
      "item_id":formDataEdit?.item_id,
      "item_name": formDataEdit?.item_name,
      "time_or_weight": 500,
      "units": "grams",
      "calories": formDataEdit?.calories,
      "category_id": formDataEdit?.category_id,
      "description":formDataEdit?.description,
      "item_image": formData?.item_image,
      "sets": 0,
      "counts": 0,
      "type": "food"
    });
    
    let config = {
      method: 'PUT',
      maxBodyLength: Infinity,
      url: 'https://aipse.in/api/EditItemExerciseHandler',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data),'------edit response');
    })
    .catch((error) => {
      console.log(error);
    });



  }
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    console.log(event?.target.value,'input from user');
    var val=event?.target.value;
    console.log(event?.target.label,'input from label');
    console.log(event?.target.name,'input from name');
    var label=event?.target.name;
    console.log(label,'label')
    if(label==='item_name'){
      setItemName(val.item_name);
    }
    
    if(label==='description'){
      setItemdescription(val.description);
    }
     setFormData(formData=>({
      ...formData,
      [label]:val
     }));
     if(action==='Edit'){
      setFormDataEdit(formDataEdit=>({
        ...formDataEdit,
        [label]:val
       }));
     }

     
     console.log(formData,'form data');


    setAge(event.target.value);
  };

  const handleChangeCalories = (event) => {
    console.log(event?.target.value,'input from user');
    var val=parseInt(event?.target.value);
    console.log(event?.target.label,'input from label');
    console.log(event?.target.name,'input from name');
    var label=event?.target.name;
    console.log(label,'label')
    setItemCalories(val.calories);
     setFormData(formData=>({
      ...formData,
      [label]:val
     }));
     if(action==='Edit'){
      setFormDataEdit(formDataEdit=>({
        ...formDataEdit,
        [label]:val
       }));
       console.log(formDataEdit,'formDataEdit');
     }

     
     console.log(formData,'form data');


    setAge(event.target.value);
  };


      const apiHit=async=>{
        let data = JSON.stringify({
          "item_name": formData?.item_name,
          "time_or_weight": 500,
          "units": "grams",
          "calories": formData?.calories,
          "category_id": formData?.category_id,
          "description":formData?.description,
          "item_image": formData?.item_image,
          "sets": 0,
          "counts": 0,
          "type": "food",
          "item_id":formData?.item_id,
        });
        
        let config = {
          method: 'POST',
          maxBodyLength: Infinity,
          url: 'https://aipse.in/api/postOverAllDietPlan',
          headers: {
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      }


  return (
    <div>
        
    
      <Button variant="contained" style={{
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
      </Button>
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
              {action} Diet Item
            </Typography>
            <Button autoFocus color="inherit" onClick={handleCloseSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        
         {/* buzz code comes here */}

         <DialogContent sx={{ background: "#f9fafb" }}>
         {/* <DialogContentText>
           
  </DialogContentText> */}

          <Card style={{padding:"20px 5px", margin:"0px auto"}}>
         {/* < ArrowBackIosIcon/>  */}
            
            
                <CardContent>
                    <Grid container flexDirection="column" spacing={1}>
                        <Grid xs={12}   mb={2}  style={{ borderRadius:"10px"}}
                        Item>
                            <TextField  value={itemName} onChange={handleChange} label=" Item Name"  name="item_name" variant='outlined' fullWidth/>
                        </Grid>
                       

                        <div id="project-input-tag-div" style={{ display: 'flex' ,marginTop:"10px" , marginBottom:"10px"}}>
                  <label id="input-tag-project-multi-drawer" for="inputTag" style={{ cursor: 'pointer', display: 'flex' }}>
                    <Iconify id="camera-icon" icon={'mdi:camera'} sx={{ width: 25, height: 25, ml: 2, color: '#ff7424' }} />
                    &nbsp;
                    <input
                      style={{ display: 'none' }}
                      accept="image/png, image/gif, image/jpeg"
                      id="inputTag"
                      type="file"
                      onChange={(e) => {
                        convertImage(e);
                      }}
                    />
                  </label>
                
                  <br />
         {/* <div>
           <Button
           id="upload-btn"
           onClick={()=>UploadImages(1)}
           
           sx={{
             '&:hover': {
               backgroundColor: '#ffd796',
             },
             color: '#ff7424',
             backgroundColor: '#ffd796',
             marginLeft: '10px',
           }}
         >
           Upload   
         </Button></div> */}

         {images?.map((itm,index) => {
                   
                   return <div style={{ display: 'flex', margin: '1rem' }}>
                     <img src={itm} style={{ height: '50px', width: '70px',marginTop:20 }} />
                     <Iconify
                             onClick={() => {
                               deleteImage(index);
                             }}
                             icon={'typcn:delete'}
                             sx={{ width: 16, height: 16, ml: 1, color: 'red' }}
                           />
                     </div>
                   
                 })}
                        </div>
                    
    {/* <Grid xs={12}  mb={2}  
      Item>
        <TextField onChange={handleChange} name="item_image" label="Choose Diet Image" variant='outlined' fullWidth/>
    </Grid> */}
    
        {/* <Grid mb={2}    Item>
            <Grid container flexDirection="row"  justifyContent="space-between">
                <Grid  md={6} lg={6} xs={6}    item>
                    <TextField   label="Weight" variant='outlined'  fullWidth/></Grid>
                <Grid md={5.5} lg={5.5} xs={5.5}   item > 
                
                <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Grams</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={grams}
          label="Grams"
          onChange={handleChanges}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                                    
                                    
                                    </Grid>
                              
                                 </Grid>  
                                        
         </Grid> */}

                                
                                

                        
                        <Grid xs={12}   mb={2}  
                         Item>
                            <TextField onChange={handleChangeCalories} value={itemCalories}  name="calories" label="Calories" variant='outlined' fullWidth/>
                        </Grid>
                        
                        <Grid xs={12}   mb={2}  style={{ borderRadius:"10px"}}
                        Item>
                            <TextField  InputProps={{
                                  readOnly: true,
                                }}  label="Category"  value={categoryname} name="item_name" variant='outlined' fullWidth/>
                        </Grid>
                             
                        <Grid xs={12}   mb={2}  
                         Item>
                            <TextField value={itemdescription} name="description" onChange={handleChange} label="Description" variant='outlined' multiline rows={5} fullWidth/>
                        </Grid>
                        

                    </Grid>
                   
                   
                </CardContent>
               
                    
               
            </Card>
          </DialogContent>
        


      </Dialog>
    </div>
  );
});

export default FullScreenDialog;


// buzz forms code:

// <div>
// <Grid style={{backgroundColor:"#FFD580"}}>
//    <Typography>PAGE 1</Typography>



// <Card sx={{mt:4, margin:"20px"}}>
// <CardContent>
//    <Typography>Email</Typography>
//    <Stack mt={2} mb={2}>
//            <TextField  label="Your Answer" variant="outlined" color="common" />
//        </Stack> 
//        </CardContent>
// </Card>


// <Card sx={{mt:2, margin:"20px"}} >
// <CardContent>
//    <Typography>Name of the Assessor
// </Typography>
//    <Stack mt={2} mb={2}>
//            <TextField  label="Your Answer" variant="outlined" color="common" />
//        </Stack> 
// </CardContent>
// </Card>

// <Card sx={{ margin:"20px"}}>
// <CardContent>
// <Stack>
//        <Typography variant="body2"> Date of the evaluation of the training/meeting</Typography>
//        <Stack mt={2}>
//          <InputLabel variant="standard" id="demo-simple-select-standard-label">Answer</InputLabel>
//          <Select variant="standard" color="common"
//            fullWidth
//            labelId="demo-simple-select-standard-label"
//            id="demo-simple-select-standard"
//          >
//            <MenuItem value="" style={{backgroundColor:'gray'}}>
//              <em>Select Answer</em>
//            </MenuItem>
//            <MenuItem value="Strongly Agree">Strongly Agree</MenuItem>
//            <MenuItem value="Agree">Agree</MenuItem>
//            <MenuItem value="Disagree">Disagree</MenuItem>
//            <MenuItem value="Strongly Disagree">Strongly Disagree</MenuItem>
//          </Select>
//        </Stack>
//      </Stack>
// </CardContent>
// </Card>
// <Card sx={{ margin:"20px"}}>
// <CardContent>
// <Stack mt={2}>
//        <Typography>
//           Program Assessment
//        </Typography>
//        <Stack mt={2}>
//          <FormGroup>
//            <FormControlLabel value="Self Shakti Training Program"  control={<Radio />} label="Self Shakti Training Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Gelathi Program" control={<Radio />} label="Gelathi Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Self Shakti by Gelathi" control={<Radio />} label="Self Shakti by Gelathi" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Green Program" control={<Radio />} label="Green Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Vyapar Program" control={<Radio />} label="Vyapar Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//          </FormGroup>
//        </Stack>
//      </Stack>
// </CardContent>
// </Card>
// <Card sx={{ margin:"20px"}}>
// <CardContent>
// <Stack mt={2}>
//        <Typography>
//           Name of the District /ಜಿಲ್ಲೆಯ ಹೆಸರು
//        </Typography>
//        <Stack mt={2}>
//          <FormGroup>
//            <FormControlLabel value="Tumkur"  control={<Checkbox />} label="Tumkur" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Bangalore Urban" control={<Checkbox />} label="Banagalore Urban" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Bangalore Rural" control={<Checkbox />} label="Bangalore Rural" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Kolar" control={<Checkbox />} label="Kolar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Chikaballapur" control={<Checkbox />} label="Chikaballapur" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Chitradurga"  control={<Checkbox />} label="Chitradurga" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Hassan" control={<Checkbox />} label="Hassan" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Ramanagara" control={<Checkbox />} label="Ramanagara" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Mandaya" control={<Checkbox />} label="Mandaya" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Chamrajanagara" control={<Checkbox />} label="Charajanagara" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//          </FormGroup>
//        </Stack>
//      </Stack>
// </CardContent>
// </Card>
// <Card sx={{ margin:"20px"}}>
// <CardContent>
// <Stack mt={2}>
//        <Typography>
//           Name of the Taluk/ತಾಲ್ಲೂಕಿನ ಹೆಸರು
//        </Typography>
//        <Stack mt={2}>
//          <FormGroup>
//            <FormControlLabel value="Tumkur"  control={<Checkbox />} label="Tumkur" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Bangalore Urban" control={<Checkbox />} label="Banagalore Urban" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Bangalore Rural" control={<Checkbox />} label="Bangalore Rural" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Kolar" control={<Checkbox />} label="Kolar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Chikaballapur" control={<Checkbox />} label="Chikaballapur" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Chitradurga"  control={<Checkbox />} label="Chitradurga" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Hassan" control={<Checkbox />} label="Hassan" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Ramanagara" control={<Checkbox />} label="Ramanagara" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Mandaya" control={<Checkbox />} label="Mandaya" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Chamrajanagara" control={<Checkbox />} label="Charajanagara" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//          </FormGroup>
//        </Stack>
//      </Stack>

// </CardContent>
// </Card>

// <Card sx={{ margin:"20px"}}>
// <CardContent>
// <Stack>
//        <Typography variant="body2">Name of the village and the venue of meeting/training/ಗ್ರಾಮದ ಹೆಸರು ಮತ್ತು ಸಭೆ / ತರಬೇತಿಯ ಸ್ಥಳ</Typography>
//        <Stack mt={2} mb={2}>
//            <TextField  label="Your Answer" variant="outlined" color="common" />
//        </Stack>  
//      </Stack>

// </CardContent>
// </Card>



// </Grid>
// <br/>

// {/* 2 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-2
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Gelathi program</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Name of the Gelathi Facilitator
//  </Typography>
//  <RadioGroup>
//    <FormControlLabel control={<Radio  />} label="Sangeetha S" />
//    <FormControlLabel control={<Radio  />} label="Swarna. N" />
//      <FormControlLabel control={<Radio  />} label="Mamatha N" />
//      <FormControlLabel control={<Radio  />} label="Nagalatha J" />
//      <FormControlLabel control={<Radio  />} label="Preeti Sandeep Naik" />
//      <FormControlLabel control={<Radio  />} label="Gayathri.M" />
//      <FormControlLabel control={<Radio  />} label="Anitha. N" />
//      <FormControlLabel control={<Radio  />} label="Shobha.M.R" />
//      <FormControlLabel control={<Radio  />} label="Nethravathi G" />
//      <FormControlLabel control={<Radio  />} label="Deepa B.R" />
//      <FormControlLabel control={<Radio  />} label="Anitha" />
//      <FormControlLabel control={<Radio  />} label="Nagaveni.N" />
//      <FormControlLabel control={<Radio  />} label="Sridevi" />
//      <FormControlLabel control={<Radio  />} label="Megha B" />
//      <FormControlLabel control={<Radio  />} label="Kalpana P.S." />
//      <FormControlLabel control={<Radio  />} label="Sudha D" />
//      <FormControlLabel control={<Radio  />} label="Mamatha K" />
//      <FormControlLabel control={<Radio  />} label="Pavithra. R" />
//      <FormControlLabel control={<Radio  />} label="Maya R" />
//      <FormControlLabel control={<Radio  />} label="Mamatha B.R" />
//      <FormControlLabel control={<Radio  />} label="Rajeshwari. J M" />
//      <FormControlLabel control={<Radio  />} label="Shobarani" />
//      <FormControlLabel control={<Radio  />} label="Malini K" />
//      <FormControlLabel control={<Radio  />} label="Ambika C" />
//      <FormControlLabel control={<Radio  />} label="Roopa N M" />
//      <FormControlLabel control={<Radio  />} label="Pavithra K" />
//      <FormControlLabel control={<Radio  />} label="Shaila" />
//      <FormControlLabel control={<Radio  />} label="Sunitha.B" />
//      <FormControlLabel control={<Radio  />} label="Mamtaz" />
//      <FormControlLabel control={<Radio  />} label="Rehana.A" />
//      <FormControlLabel control={<Radio  />} label="Farhana.B" />
//      <FormControlLabel control={<Radio  />} label="Roopa.R" />
//      <FormControlLabel control={<Radio  />} label="Gangarathna" />
//      <FormControlLabel control={<Radio  />} label="Mangala" />
//      <FormControlLabel control={<Radio  />} label="Saraswathamma V" />
//      <FormControlLabel control={<Radio  />} label="Lakshmi Devi M" />
//      <FormControlLabel control={<Radio  />} label="Aruna Kumari V" />
//      <FormControlLabel control={<Radio  />} label="Hemalatha G" />
//      <FormControlLabel control={<Radio  />} label="Latha" />
//      <FormControlLabel control={<Radio  />} label="Nirmala N" />
//      <FormControlLabel control={<Radio  />} label="Pallavi.P" />
//      <FormControlLabel control={<Radio  />} label="Lakshmi.M.R" />
//      <FormControlLabel control={<Radio  />} label="Shashikala K S" />
//      <FormControlLabel control={<Radio  />} label="Poornima S" />
//      <FormControlLabel control={<Radio  />} label="Divya Amala" />
//      <FormControlLabel control={<Radio  />} label="Mariya Deepa" />
//      <FormControlLabel control={<Radio  />} label="Vidyashree" />
//      <FormControlLabel control={<Radio  />} label="Manjula GP" />
//      <FormControlLabel control={<Radio  />} label="Indumathi G C" />
//      <FormControlLabel control={<Radio  />} label="Pushpanjali N" />
//      <FormControlLabel control={<Radio  />} label="Manjula K H" />
//      <FormControlLabel control={<Radio  />} label="Nagamani S" />
//      <FormControlLabel control={<Radio  />} label="Manjula K N" />
//      <FormControlLabel control={<Radio  />} label="Rajeshwari BP" />
//      <FormControlLabel control={<Radio  />} label="Meghana R" />
//      <FormControlLabel control={<Radio  />} label="Pallavi P" />
//      <FormControlLabel control={<Radio  />} label="Nagarathnamma" />
//      <FormControlLabel control={<Radio  />} label="Sharanamma" />
//      <FormControlLabel control={<Radio  />} label="Komala P.R" />
//      <FormControlLabel control={<Radio  />} label="Radhadevi S" />
//      <FormControlLabel control={<Radio  />} label="Shwetha.G.R" />
//      <FormControlLabel control={<Radio  />} label="Ranjitha.S" />
//      <FormControlLabel control={<Radio  />} label="Suma.B.M" />
//      <FormControlLabel control={<Radio  />} label="Manjula.C.N" />
//      <FormControlLabel control={<Radio  />} label="Roja.K.H" />
//      <FormControlLabel control={<Radio  />} label="Sunitha.G.N" />
//      <FormControlLabel control={<Radio  />} label="Priya.P" />
//      <FormControlLabel control={<Radio  />} label="Chaithanyya.K.L" />
//      <FormControlLabel control={<Radio  />} label="Mamatha.M.J" />
//      <FormControlLabel control={<Radio  />} label="Ramya.M" />
//      <FormControlLabel control={<Radio  />} label="Shobha.N" />
//      <FormControlLabel control={<Radio  />} label="Vijaya.N.C" />
//      <FormControlLabel control={<Radio  />} label="Manjula.K.C" />
//      <FormControlLabel control={<Radio  />} label="Kavitha B" />
//      <FormControlLabel control={<Radio  />} label="Jayalakshmamma" />
//      <FormControlLabel control={<Radio  />} label="Ranjitha S. TIPTUR" />
//      <FormControlLabel control={<Radio  />} label="Pavithra D" />
//      <FormControlLabel control={<Radio  />} label="Bhagyalakshmi" />
//      <FormControlLabel control={<Radio  />} label="Komala K" />
//      <FormControlLabel control={<Radio  />} label="Nethravathi V" />
//      <FormControlLabel control={<Radio  />} label="Kavithamma L" />
//      <FormControlLabel control={<Radio  />} label="Pushpalatha.M.C" />
//      <FormControlLabel control={<Radio  />} label="Pavitra K" />
// </RadioGroup>
// </CardContent>
//  </Card>

//  <Card  sx={{ marginTop:"20px"}}>
//      <CardContent>
//          <Typography>No of participants at the start of the session
//    </Typography>
//          <Stack mt={2} mb={2}>
//                  <TextField  label="Your Answer" variant="outlined" color="common" />
//              </Stack> 
//      </CardContent>
//  </Card>

//  <Card sx={{ marginTop:"20px"}}>
// <CardContent>
// <Stack mt={2}>
//        <Typography>
//        Assessment of
//        </Typography>
//        <Stack mt={2}>
//          <FormGroup>
           
//            <FormControlLabel control={<Radio  />} label="Circle Meeting" />
//                <FormControlLabel control={<Radio  />} label="Spoorthi Module 2" />
//                <FormControlLabel control={<Radio  />} label="Spoorthi Module 3" />
//                <FormControlLabel control={<Radio  />} label="Spoorthi Module 4" />
//                <FormControlLabel control={<Radio  />} label="Spoorthi Module 5" />
//                <FormControlLabel control={<Radio  />} label="Beehive Initiative Circle Meeting" />
//                <FormControlLabel control={<Radio  />} label="Green Module 1" />
//                <FormControlLabel control={<Radio  />} label="Green Module 2" />
//                <FormControlLabel control={<Radio  />} label="Green Module 3" />
//                <FormControlLabel control={<Radio  />} label="Green Module 4" />
//                <FormControlLabel control={<Radio  />} label="Green Module 5" />
//                <FormControlLabel control={<Radio  />} label="Vyapar Module 1" />
//                <FormControlLabel control={<Radio  />} label="Vyapar Module 2" />
//                <FormControlLabel control={<Radio  />} label="Vyapar Module 3" />
//                <FormControlLabel control={<Radio  />} label="Vyapar Module 4" />
//                <FormControlLabel control={<Radio  />} label="Vyapar Module 5" />
//                <FormControlLabel control={<Radio  />} label="Other…" />
//          </FormGroup>
//        </Stack>
//      </Stack>
// </CardContent>
//  </Card>

//  <Card sx={{marginTop:2}}>
//        <CardContent>
//        <Typography >
//        The Gelathi Facilitator competently carried out the following functions
//        </Typography>
//        <FormGroup>
//        <FormControlLabel control={<Checkbox  />} label="Reached the venue on time" />
//        <FormControlLabel control={<Checkbox  />} label="Confirmed a suitable venue to conduct the training" />
//        <FormControlLabel control={<Checkbox  />} label="Arranged drinking water facilities for the training" />
//        <FormControlLabel control={<Checkbox  />} label="Confirmed location had accessible washroom facilities" />
//        <FormControlLabel control={<Checkbox  />} label="Carried all the training materials with her" />
//        <FormControlLabel control={<Checkbox  />} label="Commenced the training on time" />
//        <FormControlLabel control={<Checkbox  />} label="Beehive Initiative Circle Meeting" />
//  </FormGroup>
// </CardContent>
//   </Card>


//   <Card sx={{marginTop:2}}>
//      <CardContent>
//                <Typography >
//                The Gelathi Facilitator carried out the following functions before the training/meeting started
//                </Typography>
//                <FormGroup>
//                <FormControlLabel control={<Checkbox  />} label="Group is made to sit in circle or proper shape" />
//                <FormControlLabel control={<Checkbox  />} label="Welcomed the gathering" />
//                <FormControlLabel control={<Checkbox  />} label="Briefed everyone about the rules of the meeting/training" />
//                <FormControlLabel control={<Checkbox  />} label="Started the session with a brief recap of previous sessions" />
//                <FormControlLabel control={<Checkbox  />} label="Gelathi Facilitator distributed the notes and seed pens or pencils" />
//                <FormControlLabel control={<Checkbox  />} label="Beehive Initiative Circle Meeting" />
//          </FormGroup>
//      </CardContent>
//      </Card>

// <Card  sx={{ marginTop:"20px"}}>
//        <CardContent>
//            <Typography>How many stories of success or change emerged from the recap
//      </Typography>
//            <Stack mt={2} mb={2}>
//                    <TextField  label="Your Answer" variant="outlined" color="common" />
//                </Stack> 
//        </CardContent>
// </Card>
// <Card  sx={{ marginTop:"20px"}}>
//        <CardContent>
//            <Typography>Mention name of the Gelathis with success stories and a story in couple of lines
//      </Typography>
//            <Stack mt={2} mb={2}>
//                    <TextField  label="Your Answer" variant="outlined" color="common" />
//                </Stack> 
//        </CardContent>
// </Card>

// </CardContent>
// </Grid>

// <br/>


// {/* 3 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-3
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Circle Meeting</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones the Gelathi Facilitator did NOT do
//  </Typography>
//  <FormGroup>
//    <FormControlLabel control={<Checkbox  />} label="Welcome and spoorthi song" />
//    <FormControlLabel control={<Checkbox  />} label="Introduction of GF, Gelathis and Buzz" />
//    <FormControlLabel control={<Checkbox  />} label="Set the ground rules" />
//    <FormControlLabel control={<Checkbox  />} label="Congratulate the Gelathis" />
//    <FormControlLabel control={<Checkbox  />} label="Collect opinion about the Buzz Self Shakthi training" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the Buzz GFs roles and responsibility" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the concept of Buzz Gelathi" />
//    <FormControlLabel control={<Checkbox  />} label="Brief about  functions of Buzz Gelathi" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the challenges of Buzz Gelathis during execution of her role" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the ambition of Buzz Gelathis" />
//    <FormControlLabel control={<Checkbox  />} label="Discuss the expectation of Buzz Gelathis" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the Spoorthi fellowship training" />
//    <FormControlLabel control={<Checkbox  />} label="Explain about Beehive initiative meeting" />
//    <FormControlLabel control={<Checkbox  />} label="Explain about Buzz Green programme" />
//    <FormControlLabel control={<Checkbox  />} label="Explain about the Buzz Vyapar programme" />
//    <FormControlLabel control={<Checkbox  />} label="Share the mobile number" />
//    <FormControlLabel control={<Checkbox  />} label="Get the sign, group photo and vote of thanks" />
//    <FormControlLabel control={<Checkbox  />} label="Other…" />
// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>

//  <br/>

//      {/* 4 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-4
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Spoorthi-2</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones the Gelathi Facilitator did NOT do
//  </Typography>
//  <FormGroup>
//    <FormControlLabel control={<Checkbox  />} label="Spoorthi Song" />
//    <FormControlLabel control={<Checkbox  />} label="Set the ground rules" />
//    <FormControlLabel control={<Checkbox  />} label="Introduction of GF and Gelathi" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the objective of the Spoorthi Training" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the duration of Spoorthi Fellowship" />
//    <FormControlLabel control={<Checkbox  />} label="Visualization of Tree activity" />
//    <FormControlLabel control={<Checkbox  />} label="Debrief of Visualization of Tree activity" />
//    <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's skills and shared in pair" />
//    <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's challenges and shared in pair" />
//    <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's resources and shared in pair"/>
//    <FormControlLabel control={<Checkbox  />} label="Share in pair how they resolve the challenges by using their own skills and resources" />
//    <FormControlLabel control={<Checkbox  />} label="Given name for Spoorthi-1" />
//    <FormControlLabel control={<Checkbox  />} label="Feedback done" />
// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>

// {/* 5 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-5
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Spoorthi-2</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones the Gelathi Facilitator did NOT do
//  </Typography>
//  <FormGroup>
//    <FormControlLabel control={<Checkbox  />} label="Spoorthi Song" />
//    <FormControlLabel control={<Checkbox  />} label="Paper cutting activity with instructions" />
//    <FormControlLabel control={<Checkbox  />} label="Debrief on the paper cutting activity" />
//    <FormControlLabel control={<Checkbox  />} label="Magic stick activity about the active listening" />
//    <FormControlLabel control={<Checkbox  />} label="Debrief the magic stick activity" />
//    <FormControlLabel control={<Checkbox  />} label="List down points about active listening" />
//    <FormControlLabel control={<Checkbox  />} label="Debrief the active listening activity" />
//    <FormControlLabel control={<Checkbox  />} label="Discuss about the Gelathi tool kit" />
//    <FormControlLabel control={<Checkbox  />} label=" Discussion about the borewell activity" />
//    <FormControlLabel control={<Checkbox  />} label="Given name for Spoorthi-2" />
//    <FormControlLabel control={<Checkbox  />} label="Feedback done" />
   

   

// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>        
// <br/>


//  {/* 6 */}
//  <Grid  backgroundColor={"#FFD580"}>
//  page-6
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Spoorthi-3</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones the Gelathi Facilitator did NOT do
//  </Typography>
//  <FormGroup>

//    <FormControlLabel control={<Checkbox  />} label="Spoorthi song" />
//    <FormControlLabel control={<Checkbox  />} label="Recap of Spoorthi-2" />
//    <FormControlLabel control={<Checkbox  />} label="The hand drawing activity" />
//    <FormControlLabel control={<Checkbox  />} label="Presentation of the hand drawing activity" />
//    <FormControlLabel control={<Checkbox  />} label="Debrief on the hand drawing activity" />
//    <FormControlLabel control={<Checkbox  />} label="List down elements of human growth" />
//    <FormControlLabel control={<Checkbox  />} label="Model village drawing done by Gelathis" />
//    <FormControlLabel control={<Checkbox  />} label="Presentation done by 2 Gelathis of model village drawing" />
//    <FormControlLabel control={<Checkbox  />} label="Discuss what elements do they want to make their village become model village" />
//    <FormControlLabel control={<Checkbox  />} label="Discuss as a  pair what they should do first to make their village as a model village?" />
//    <FormControlLabel control={<Checkbox  />} label="Debrief about the model village" />
//    <FormControlLabel control={<Checkbox  />} label="Given name for spoorthi-3" />
//    <FormControlLabel control={<Checkbox  />} label="Feedback" />
// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
//  </Grid>

// <br/>

//   {/* 7 */}
//   <Grid  backgroundColor={"#FFD580"}>
//  page-7
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Spoorthi-2</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones the Gelathi Facilitator did NOT do
//  </Typography>
//  <FormGroup>
//    <FormControlLabel control={<Checkbox  />} label="Spoorthi Song" />
//    <FormControlLabel control={<Checkbox  />} label="Set the ground rules" />
//    <FormControlLabel control={<Checkbox  />} label="Introduction of GF and Gelathi" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the objective of the Spoorthi Training" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the duration of Spoorthi Fellowship" />
//    <FormControlLabel control={<Checkbox  />} label="Visualization of Tree activity" />
//    <FormControlLabel control={<Checkbox  />} label="Debrief of Visualization of Tree activity" />
//    <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's skills and shared in pair" />
//    <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's challenges and shared in pair" />
//    <FormControlLabel control={<Checkbox  />} label="List down about the Gelathi's resources and shared in pair"/>
//    <FormControlLabel control={<Checkbox  />} label="Share in pair how they resolve the challenges by using their own skills and resources" />
//    <FormControlLabel control={<Checkbox  />} label="Given name for Spoorthi-1" />
//    <FormControlLabel control={<Checkbox  />} label="Feedback done" />
// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>


//   {/* 10 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-10
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Attendance</Typography>
//  <Typography variant = 'h5'>The purpose of the section is to collect quantitative data around participation, excitement, preparedness and the maintenance of interest level of the participants during the training.</Typography>
//  </CardContent>
// </Card>
// <Card  sx={{ marginTop:"20px"}}>
// <CardContent>
//    <Typography>How many women attended the training session?

//  </Typography>
//        <Stack mt={2} mb={2}>
//                <TextField  label="Your Answer" variant="outlined" color="common" />
//            </Stack> 
// </CardContent>
//  </Card>
//  </Card>
//  <Card  sx={{ marginTop:"20px"}}>
// <CardContent>
//    <Typography>How many women attended the training session?

//  </Typography>
//        <Stack mt={2} mb={2}>
//                <TextField  label="Your Answer" variant="outlined" color="common" />
//            </Stack> 
// </CardContent>
//  </Card>

 
// <Card sx={{marginTop:2}}>
//  <CardContent>
//  <Typography mb={2} >
//  Level of participation (1 is poor and 5 is excellent)
//  </Typography>
//    <Card sx={{display: 'flex',flexDirection:"column"}} >
//      <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}></CardContent>
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
//         <Typography>1</Typography>
//         <Typography>2</Typography>
//         <Typography>3</Typography>
//         <Typography>4</Typography>
//         <Typography>5</Typography>
         
//        </CardContent>
//      </CardContent>
//    {/* </Card>
//    <Card sx={{display: 'flex',flexDirection:"row"}}> */}
//    <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}>Reached the venue on or before time</CardContent>
       
//        <CardContent sx={{width:'70%' }}>
//          <RadioGroup style={{display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>

        
//            <FormControlLabel value="option1" control={<Radio />}  />
//            <FormControlLabel value="option2" control={<Radio />}  />
//            <FormControlLabel value="option3" control={<Radio />} />
//            <FormControlLabel value="option4" control={<Radio />} />
//            <FormControlLabel value="option5" control={<Radio />} /> 
//        </RadioGroup>
         
//        </CardContent>
//    </CardContent>

//    <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}>Present for the entire session</CardContent>
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between',alignItems:'center' }}>
//           {/* <RadioGroup sx={{width:'100%',display:'flex',flexDirection:'row',justifyContent: 'space-between'}}> */}
//        <FormControlLabel value="option1" control={<Radio />}  />
//        <FormControlLabel value="option2" control={<Radio />}  />
//        <FormControlLabel value="option3" control={<Radio />} />
//        <FormControlLabel value="option4" control={<Radio />} />
//        <FormControlLabel value="option5" control={<Radio />} />
//          {/* </RadioGroup> */}
//        </CardContent>
//    </CardContent>


//    <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}>Leave in the meeting/ training in between?</CardContent>
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
//        <FormControlLabel value="option1" control={<Radio />}  />
//        <FormControlLabel value="option2" control={<Radio />}  />
//        <FormControlLabel value="option3" control={<Radio />} />
//        <FormControlLabel value="option4" control={<Radio />} />
//        <FormControlLabel value="option5" control={<Radio />} />
         
//        </CardContent>
//    </CardContent>

//    <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}>Signed the ledger/meeting minute</CardContent>
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
//        <FormControlLabel value="option1" control={<Radio />}  />
//        <FormControlLabel value="option2" control={<Radio />}  />
//        <FormControlLabel value="option3" control={<Radio />} />
//        <FormControlLabel value="option4" control={<Radio />} />
//        <FormControlLabel value="option5" control={<Radio />} />
         
//        </CardContent>
//    </CardContent>

//    <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}>Brought the books / pens to take down notes?</CardContent>
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
//        <FormControlLabel value="option1" control={<Radio />}  />
//        <FormControlLabel value="option2" control={<Radio />}  />
//        <FormControlLabel value="option3" control={<Radio />} />
//        <FormControlLabel value="option4" control={<Radio />} />
//        <FormControlLabel value="option5" control={<Radio />} />
         
//        </CardContent>
//      </CardContent>
     
//    </Card>

//      </CardContent>
//  </Card>

// </CardContent>
// </Grid>

//   {/* 12 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-12
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography>
//          Self-Shakti 
//        </Typography>
//        <Typography>
//        DAY 1 Training Quality assessment
//        </Typography>
//  </CardContent>
// </Card>
// <Card sx={{ marginTop:"20px"}}>
// <CardContent>
// <Stack >
//        <Typography>
//          Day1 or Day 2
//        </Typography>
       
//        <Stack>
//          <FormGroup>
//            <FormControlLabel value="Yes"  control={<Radio />} label="Yes" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="No" control={<Radio />} label="No" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
           
//          </FormGroup>
//        </Stack>
//      </Stack>
// </CardContent>
// </Card>

//  </Card>

// </CardContent>
// </Grid>
// <br/>

// {/* 13 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-13
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Day-1</Typography>
//  </CardContent>
// </Card>
// <CardContent>
// <Stack mt={2}>
//        <Typography>
//        Name of the trainer being evaluated
//        </Typography>
//        <Stack mt={2}>
//          <FormGroup>
//            <FormControlLabel value="Shashikala K"  control={<Radio />} label="Shashikala K" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Manohar" control={<Radio />} label="Manohar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Madhusudhan" control={<Radio />} label="Madhusudhan" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Srinivas" control={<Radio />} label="Srinivas" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Vyapar Program" control={<Radio />} label="Vyapar Program" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Bojaraj" control={<Radio />} label="Bojaraj" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Kumaraswamy" control={<Radio />} label="Kumaraswamy" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Siraj" control={<Radio />} label="Siraj" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Kirana M" control={<Radio />} label="Kirana M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Mitun Rawath" control={<Radio />} label="Mitun Rawath" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Ashwini Y" control={<Radio />} label="Ashwini Y" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Harisha K A" control={<Radio />} label="Harisha K A" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Dinesh" control={<Radio />} label="Dinesh" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Harisha E" control={<Radio />} label="Harisha E" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Ashwini Y" control={<Radio />} label="Ashwini Y" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Harisha K A" control={<Radio />} label="Harisha K A" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Dinesh" control={<Radio />} label="Dinesh" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Harisha E" control={<Radio />} label="Harisha E" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>

//            <FormControlLabel value="Bojaraj" control={<Radio />} label="Bojaraj" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Kumaraswamy" control={<Radio />} label="Kumaraswamy" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Siraj" control={<Radio />} label="Siraj" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Kirana M" control={<Radio />} label="Kirana M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Mitun Rawath" control={<Radio />} label="Mitun Rawath" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Ashwini Y" control={<Radio />} label="Ashwini Y" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Harisha K A" control={<Radio />} label="Harisha K A" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Dinesh" control={<Radio />} label="Dinesh" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Harisha E" control={<Radio />} label="Harisha E" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Ravikumar R" control={<Radio />} label="Ravikumar R" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Pradeepa" control={<Radio />} label="Pradeepa" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Mohankumar" control={<Radio />} label="Mohankumar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Madhu D T" control={<Radio />} label="Madhu D T" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Lakshmi P" control={<Radio />} label="Lakshmi P" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Rajashekar O" control={<Radio />} label="Rajashekar O" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Sarvagnachary" control={<Radio />} label="Sarvagnachary" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Kirana A.L." control={<Radio />} label="Kirana A.L." onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Shivaraju.H.N" control={<Radio />} label="Shivaraju.H.N" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Prem Kumar H.M" control={<Radio />} label="Prem Kumar H.M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Murthy P" control={<Radio />} label="Murthy P" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Madhu. S" control={<Radio />} label="Madhu. S" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Mahendra.D.M" control={<Radio />} label="Mahendra.D.M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Raghavendra" control={<Radio />} label="Raghavendra" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Ramesh" control={<Radio />} label="Ramesh" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Chandankumar" control={<Radio />} label="Chandankumar" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Aparna B H" control={<Radio />} label="Aparna B H" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Mamatha H N" control={<Radio />} label="Mamatha H N" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Ningaraju M" control={<Radio />} label="Ningaraju M" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Ramaleela J R" control={<Radio />} label="Ramaleela J R" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Mounika" control={<Radio />} label="Mounika" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="Other…" control={<Radio />} label="Other…" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>


//          </FormGroup>
//        </Stack>
//      </Stack>
// </CardContent>

//  </Card>
 
// </CardContent>
// </Grid>
//  <br/>

//  {/* 14 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-14
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Before the training starts on Day 1</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones the Gelathi Facilitator did NOT do
//  </Typography>
//  <FormGroup>
//  Arrange the tent and the chairs in ‘u’ form
//  <FormControlLabel control={<Checkbox  />} label=" Arrange the tent and the chairs in ‘u’ form" />
//  <FormControlLabel control={<Checkbox  />} label="Play the video while the participants were entering" />
//  <FormControlLabel control={<Checkbox  />} label="Take the signature needed for the consent" />
//  <FormControlLabel control={<Checkbox  />} label="Collect information for the primary Baseline Data Ledger" />
//  <FormControlLabel control={<Checkbox  />} label="Read the consent form loudly" />
//  <FormControlLabel control={<Checkbox  />} label="Distribute the books and pencils to the participants with respect" />
//  <FormControlLabel control={<Checkbox  />} label="Express gratitude towards the Anganwadi teacher for her efforts" />
//  <FormControlLabel control={<Checkbox  />} label="Explain the training schedule and intended outcomes of the training to them" />
// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>

// {/* 15 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-15
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Module 1 (M1) Introduction of Buzz:</Typography>
//  </CardContent>
// </Card>
// <Card  >
// <CardContent>
//    <Typography>Name of the Assessor
// </Typography>
//    <Stack mt={2} mb={2}>
//            <TextField  label="Your Answer" variant="outlined" color="common" />
//        </Stack> 
// </CardContent>
// </Card>
//  </Card>


//  <Card sx={{marginTop:2}}>
//      <CardContent>
//                <Typography >
//                Check which ones the trainer did not do
//                </Typography>
//                <FormGroup>
//                <FormControlLabel control={<Checkbox  />} label="Set the ground rules" />
//                <FormControlLabel control={<Checkbox  />} label="Set the expectations of the participants" />
//                  <FormControlLabel control={<Checkbox  />} label="Introduce Buzz India" />
//                  <FormControlLabel control={<Checkbox  />} label="Create a learning environment" />
//                  <FormControlLabel control={<Checkbox  />} label="Engaged with participants to build a rapport" />
//                  <FormControlLabel control={<Checkbox  />} label="Promote trust and confidence in Buzz among participants" />
//                  <FormControlLabel control={<Checkbox  />} label="Introduce himself/herself" />
//                  <FormControlLabel control={<Checkbox  />} label="Ask the women to introduce themselves" />
//                  <FormControlLabel control={<Checkbox  />} label="Play the Buzz India video" />
//                  <FormControlLabel control={<Checkbox  />} label="Tell the participants that this training is for everyone, and that we have multiple processes of learning there’s verbal, texts, videos, pictures, songs" />
//                  <FormControlLabel control={<Checkbox  />} label="Mention life learning is more important and it is a lifelong process and implied that this is a learning environment" />
//                  <FormControlLabel control={<Checkbox  />} label="Sing the Buzz song along with the participants" />
//                  <FormControlLabel control={<Checkbox  />} label="Use the opening pitch during the introduction" />
//                  <FormControlLabel control={<Checkbox  />} label="Explain why the Buzz India training is only for women and not men" />
//                  <FormControlLabel control={<Checkbox  />} label="Explain the methodology and the training content well" />
//                  <FormControlLabel control={<Checkbox  />} label="Inform the importance of the book" />
//          </FormGroup>
//      </CardContent>
//  </Card>


//  <Card sx={{ marginTop:"20px"}}>
// <CardContent>
// <Stack mt={2}>
//        <Typography>
//        Were the women interactive?
//        </Typography>
//        <Stack mt={2}>
//          <FormGroup>
//            <FormControlLabel value="Yes"  control={<Radio />} label="Yes" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="No" control={<Radio />} label="No" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
           
//          </FormGroup>
//        </Stack>
//      </Stack>
// </CardContent>
//   </Card>
//   <Card sx={{ marginTop:"20px"}}>
// <CardContent>
// <Stack mt={2}>
//        <Typography>
//        Did any women leave the training session during or after the first module?
//        </Typography>
//        <Stack mt={2}>
//          <FormGroup>
//            <FormControlLabel value="Yes"  control={<Radio />} label="Yes" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="No" control={<Radio />} label="No" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
           
//          </FormGroup>
//        </Stack>
//      </Stack>
// </CardContent>
//   </Card>

//   <Card  sx={{ marginTop:"20px"}}>
//      <CardContent>
//          <Typography>If so, how many?
//    </Typography>
//          <Stack mt={2} mb={2}>
//                  <TextField  label="Your Answer" variant="outlined" color="common" />
//              </Stack> 
//      </CardContent>
// </Card>

// <Card sx={{ marginTop:"20px"}}>
// <CardContent>
// <Stack mt={2}>
//        <Typography>
//        Did this module take 20 minutes as allotted?
//        </Typography>
//        <Stack mt={2}>
//          <FormGroup>
//            <FormControlLabel value="Yes"  control={<Radio />} label="Yes" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
//            <FormControlLabel value="No" control={<Radio />} label="No" onChange={(event)=>handlecheckedata('borrowedmoney',event)}/>
           
//          </FormGroup>
//        </Stack>
//      </Stack>
// </CardContent>
//   </Card>


// </CardContent>


 



// </Grid>

// <br/>



//  {/* 37 */}
//  <Grid  backgroundColor={"#FFD580"}>
//  page-37
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Session-7 Financial goals</Typography>
//  </CardContent>
// </Card>
// <Card  sx={{ marginTop:"20px"}}>
// <CardContent>
//    <Typography>How many women attended the training session?

//  </Typography>
//        <Stack mt={2} mb={2}>
//                <TextField  label="Your Answer" variant="outlined" color="common" />
//            </Stack> 
// </CardContent>
//  </Card>

//  </Card>
//  <Card sx={{marginTop:2}}>
//  <CardContent>
//  <Typography >
//  Check which ones the Gelathi did not do
//  </Typography>
//  <FormGroup>

//  <FormControlLabel control={<Checkbox  />} label="Ask what the difference between a dream and a goal is?" />
//  <FormControlLabel control={<Checkbox  />} label="Tell the participants the difference between dream and goal?" />
//  <FormControlLabel control={<Checkbox  />} label="Ask for one volunteer who is willing to come forward and ask them to chart their financial goal on the board?" />

// </FormGroup>
// </CardContent>
//  </Card>

//  <Card sx={{marginTop:2}}>
//  <CardContent>
//  <Typography >
//  The Gelathi did not ask
//  </Typography>
//  <FormGroup>

//  <FormControlLabel control={<Checkbox  />} label="What is your goal?" />
//  <FormControlLabel control={<Checkbox  />} label="How much will it cost?" />
//  <FormControlLabel control={<Checkbox  />} label="In how many years do you want to achieve this goal?" />
//  <FormControlLabel control={<Checkbox  />} label="How much loan do you want to take for it?" />
//  <FormControlLabel control={<Checkbox  />} label="Do you know where you will take a loan from?" />
//  <FormControlLabel control={<Checkbox  />} label="How much will you save for the goal?" />

// </FormGroup>
// </CardContent>
//  </Card>

//  <Card sx={{marginTop:2}}>
//  <CardContent>
//  <Typography >
//  During the debrief did the Gelathi not ask:
//  </Typography>
//  <FormGroup>
//  <FormControlLabel control={<Checkbox  />} label="Does your goal look realistic to you?" />
//  <FormControlLabel control={<Checkbox  />} label="Can you increase your savings or your income?" />
//  <FormControlLabel control={<Checkbox  />} label="Can you increase the time frame to reach the goal?" />
//  <FormControlLabel control={<Checkbox  />} label="Do you know where you will take a loan from?" />
//  <FormControlLabel control={<Checkbox  />} label="How much will you save for the goal?" />

// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>
// {/* 38 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-38
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Session 8: Loans - group discussion of case studies</Typography>
//  </CardContent>
// </Card>
// <Card  sx={{ marginTop:"20px"}}>
// <CardContent>
//    <Typography>How many women attended the training session?

//  </Typography>
//        <Stack mt={2} mb={2}>
//                <TextField  label="Your Answer" variant="outlined" color="common" />
//            </Stack> 
// </CardContent>
//  </Card>

//  </Card>
//  <Card sx={{marginTop:2}}>
//  <CardContent>
//  <Typography >
//  Check which ones the Gelathi did not do:
//  </Typography>
//  <FormGroup>

//  <FormControlLabel control={<Checkbox  />} label="Make 4 groups from all the participants" />
//  <FormControlLabel control={<Checkbox  />} label="Give a case study to each group" />
//  <FormControlLabel control={<Checkbox  />} label="Made sure that the impression given was not of that loans are not necessary. They are important but to know the source of the loan, own credibility, credit worthiness, credit utilization and repayment strategy" />
//  </FormGroup>
// </CardContent>
//  </Card>

//  <Card sx={{marginTop:2}}>
//  <CardContent>
//  <Typography >
//  During the debrief did the Gelathi not ask:
//  </Typography>
//  <FormGroup>

//  <FormControlLabel control={<Checkbox  />} label="What was your group’s story or case study about?" />
//  <FormControlLabel control={<Checkbox  />} label="How much does that person need?" />
//    <FormControlLabel control={<Checkbox  />} label="How much do they have in their hand as saving or earning?" />
//    <FormControlLabel control={<Checkbox  />} label="What advice would you give that person?" />
//    <FormControlLabel control={<Checkbox  />} label="When can you save and reach a goal? When will you need to take a loan to reach it?" />
//    <FormControlLabel control={<Checkbox  />} label="Where can you get loans with minimum or no interest?" />
//    <FormControlLabel control={<Checkbox  />} label="What are productive loans? What are consumption loans?" />
// </FormGroup>
// </CardContent>
//  </Card>

 

// </CardContent>
// </Grid>
//  <br/>

//  {/* 39 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-39
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Post training </Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which one Trainer Did NOT do
//  </Typography>
//  <FormGroup>
  
//    <FormControlLabel control={<Checkbox  />} label="Thank the group for being a wonderful audience" />
//    <FormControlLabel control={<Checkbox  />} label="Gelati celebrate the certificate distribution" />
   
// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>





// {/* 40 */}
// <Grid backgroundColor={"#FFD580"}> 
// <CardContent>
//  page-40
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Green Module 1:</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones the trainer did not do
//  </Typography>
//  <FormGroup>
// <FormControlLabel control={<Checkbox  />} label="Introduction of GF and Green Motivators" />
// <FormControlLabel control={<Checkbox  />} label="Welcome the participants" />
// <FormControlLabel control={<Checkbox  />} label="List down the natural resources found in the visualization" />
// <FormControlLabel control={<Checkbox  />} label="Ask how was it for you?" />
// <FormControlLabel control={<Checkbox  />} label="Duration of Green Training" />
// <FormControlLabel control={<Checkbox  />} label="List down the points from the video" />
// <FormControlLabel control={<Checkbox  />} label="Present that weather severity table" />
// <FormControlLabel control={<Checkbox  />} label="Gave feedback to GF and GM" />
// <FormControlLabel control={<Checkbox  />} label="Discuss with three questions after weather severity table" />
// <FormControlLabel control={<Checkbox  />} label=" Set the ground rules" />
// <FormControlLabel control={<Checkbox  />} label="Visualization about the natural resources" />
// <FormControlLabel control={<Checkbox  />} label="Explain the objectives of the Green Training" />
// <FormControlLabel control={<Checkbox  />} label="Play the climate change video" />
// <FormControlLabel control={<Checkbox  />} label="Provided and discussed homework" />
// <FormControlLabel control={<Checkbox  />} label=" Green Song" />

// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>
// {/* 41 */}
// <Grid  backgroundColor={'#913831'}>
//  page-41
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Green Module 2:</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones the trainer did not do
//  </Typography>
//  <FormGroup>
//    <FormControlLabel control={<Checkbox  />} label="Welcome the participants" />
//    <FormControlLabel control={<Checkbox  />} label="Sang the green Song" />
//    <FormControlLabel control={<Checkbox  />} label="Recap of Day 1" />
//    <FormControlLabel control={<Checkbox  />} label="Homework check" />
//    <FormControlLabel control={<Checkbox  />} label=" Discuss about water" />
//    <FormControlLabel control={<Checkbox  />} label="List down the points about source and usage of water" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the water cycle activity" />
//    <FormControlLabel control={<Checkbox  />} label="Borewell activity in 2 groups" />
//    <FormControlLabel control={<Checkbox  />} label=" Discussion about the borewell activity" />
//    <FormControlLabel control={<Checkbox  />} label="Play the two videos regarding water" />
//    <FormControlLabel control={<Checkbox  />} label=" Discuss about the videos" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the 3 principals of save water" />
//    <FormControlLabel control={<Checkbox  />} label="Completed the water cycle activity by participants" />
//    <FormControlLabel control={<Checkbox  />} label="Provided feedback to GF and GM" />
//    <FormControlLabel control={<Checkbox  />} label="Completed and discussed homework" />
   

   

// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>
//  {/* 42 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-42
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Green Module 2:</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones the trainer did not do
//  </Typography>
//  <FormGroup>
//    <FormControlLabel control={<Checkbox  />} label="Welcome the participants" />
//    <FormControlLabel control={<Checkbox  />} label="Sang the green Song" />
//    <FormControlLabel control={<Checkbox  />} label="Recap of Day 1" />
//    <FormControlLabel control={<Checkbox  />} label="Homework check" />
//    <FormControlLabel control={<Checkbox  />} label=" Discuss about water" />
//    <FormControlLabel control={<Checkbox  />} label="List down the points about source and usage of water" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the water cycle activity" />
//    <FormControlLabel control={<Checkbox  />} label="Borewell activity in 2 groups" />
//    <FormControlLabel control={<Checkbox  />} label=" Discussion about the borewell activity" />
//    <FormControlLabel control={<Checkbox  />} label="Play the two videos regarding water" />
//    <FormControlLabel control={<Checkbox  />} label=" Discuss about the videos" />
//    <FormControlLabel control={<Checkbox  />} label="Explain the 3 principals of save water" />
   

   

// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>

 













// {/* 43 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-43
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Green Module 4</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones Gelati Facilitator did not do
//  </Typography>
//  <FormGroup>
  
// <FormControlLabel control={<Checkbox  />} label="Welcome" />
// <FormControlLabel control={<Checkbox  />} label="Green Song" />
// <FormControlLabel control={<Checkbox  />} label="Recap of Day" />
// <FormControlLabel control={<Checkbox  />} label="Checking the Homework" />
// <FormControlLabel control={<Checkbox  />} label="Explain the pollution and it types" />
// <FormControlLabel control={<Checkbox  />} label="Discuss about pollution and nonpollution activity in groups" />
// <FormControlLabel control={<Checkbox  />} label="List down the day to day usage things" />
// <FormControlLabel control={<Checkbox  />} label="List down which are the natural resources polluting, reasons & impact" />
// <FormControlLabel control={<Checkbox  />} label="Debrief about pollution and usage" />
// <FormControlLabel control={<Checkbox  />} label="Feedback GF and GM" />
// <FormControlLabel control={<Checkbox  />} label="Homework" />
   
// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>

// {/* 44 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-44
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Green Module 5</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which one Trainer Did NOT do
//  </Typography>
//  <FormGroup>
  
//  <FormControlLabel control={<Checkbox  />} label="Welcome" />
// <FormControlLabel control={<Checkbox  />} label="Green song" />
// <FormControlLabel control={<Checkbox  />} label="Recap of Day 4" />
// <FormControlLabel control={<Checkbox  />} label="Discussion about 3 principles of pollution and usage" />
// <FormControlLabel control={<Checkbox  />} label="List out of which things are polluting the environment" />
// <FormControlLabel control={<Checkbox  />} label="Discussion about 3 principles of prevention of environmental damage" />
// <FormControlLabel control={<Checkbox  />} label="List the steps that can be taken to conserve water, By 1 week,1 month, 1 year" />
// <FormControlLabel control={<Checkbox  />} label="List the steps that can be taken to conserve earth, By 1 week, 1 Month, 1 Year" />
// <FormControlLabel control={<Checkbox  />} label="Green village was discussed" />
// <FormControlLabel control={<Checkbox  />} label="My contacts activity" />
// <FormControlLabel control={<Checkbox  />} label="List/draw the natural resources in their village" />
// <FormControlLabel control={<Checkbox  />} label="Discuss the importance of forest, Lake, & Gomalas" />
// <FormControlLabel control={<Checkbox  />} label="Discuss the elements required for restoration of natural resources" />
// <FormControlLabel control={<Checkbox  />} label="Feedback GF and GM" />
// <FormControlLabel control={<Checkbox  />} label="Distribution of Certificates" />
   
// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>

// {/* 45 */}
// <Grid  backgroundColor={"#FFD580"}>
//  page-45
// <CardContent>
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Vyapar Training  1</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones Gelati facilitator did not do
//  </Typography>
//  <FormGroup>
  
//  <FormControlLabel control={<Checkbox  />} label="Check which ones Gelati facilitator did not do" />
//  <FormControlLabel control={<Checkbox  />} label="Question Type" />
//  <FormControlLabel control={<Checkbox  />} label="Welcome" />
//  <FormControlLabel control={<Checkbox  />} label="Set the Ground rules" />
//  <FormControlLabel control={<Checkbox  />} label="Explain the objectives of Vyapar training" />
//  <FormControlLabel control={<Checkbox  />} label="Duration of the Training" />
//  <FormControlLabel control={<Checkbox  />} label="Self Shakthi Training discussion" />
//  <FormControlLabel control={<Checkbox  />} label="List the different aspects of business" />
//  <FormControlLabel control={<Checkbox  />} label="what was the reason for starting this business" />
//  <FormControlLabel control={<Checkbox  />} label="Geetha Story-balance of vyapar and life" />
//  <FormControlLabel control={<Checkbox  />} label="Debrief about the Geetha Story" />
//  <FormControlLabel control={<Checkbox  />} label="What effects did Geetha’s life on business and vice versa" />
//  <FormControlLabel control={<Checkbox  />} label="What effects did your life on business and vice versa" />
//  <FormControlLabel control={<Checkbox  />} label="Form groups of  three Business women" />
//  <FormControlLabel control={<Checkbox  />} label="Listed Skills by Vyaparis" />
//  <FormControlLabel control={<Checkbox  />} label="Listed Resource by Vyaparis" />
//  <FormControlLabel control={<Checkbox  />} label="Repeated challenges by Vyaparis" />
//  <FormControlLabel control={<Checkbox  />} label="Group discussion - how to deal with the challenges" />
//  <FormControlLabel control={<Checkbox  />} label="Given name for Vyapar-1" />
//  <FormControlLabel control={<Checkbox  />} label="Feedback" />
//  <FormControlLabel control={<Checkbox  />} label="Homework" />
             
// </FormGroup>
// </CardContent>
//  </Card>

 
// <Card sx={{marginTop:2}}>
//  <CardContent>
//  <Typography mb={2} >
//  Level of participation (1 is poor and 5 is excellent)
//  </Typography>
//    <Card sx={{display: 'flex',flexDirection:"column"}} >
//      <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}></CardContent>
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
//         <Typography>1</Typography>
//         <Typography>2</Typography>
//         <Typography>3</Typography>
//         <Typography>4</Typography>
//         <Typography>5</Typography>
         
//        </CardContent>
//    </CardContent>
//    {/* </Card>
//    <Card sx={{display: 'flex',flexDirection:"row"}}> */}
//    <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}>Reached the venue on or before time</CardContent>
       
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
//          <RadioGroup sx={{width:'100%',display:'flex',flexDirection:'row',justifyContent: 'space-between'}}>

        
//        <FormControlLabel value="option1" control={<Radio />}  />
//        <FormControlLabel value="option2" control={<Radio />}  />
//        <FormControlLabel value="option3" control={<Radio />} />
//        <FormControlLabel value="option4" control={<Radio />} />
//        <FormControlLabel value="option5" control={<Radio />} /> </RadioGroup>
         
//        </CardContent>
//    </CardContent>

//    <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}>Present for the entire session</CardContent>
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
//        <FormControlLabel value="option1" control={<Radio />}  />
//        <FormControlLabel value="option2" control={<Radio />}  />
//        <FormControlLabel value="option3" control={<Radio />} />
//        <FormControlLabel value="option4" control={<Radio />} />
//        <FormControlLabel value="option5" control={<Radio />} />
         
//        </CardContent>
//    </CardContent>


//    <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}>Leave in the meeting/ training in between?</CardContent>
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
//        <FormControlLabel value="option1" control={<Radio />}  />
//        <FormControlLabel value="option2" control={<Radio />}  />
//        <FormControlLabel value="option3" control={<Radio />} />
//        <FormControlLabel value="option4" control={<Radio />} />
//        <FormControlLabel value="option5" control={<Radio />} />
         
//        </CardContent>
//    </CardContent>

//    <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}>Signed the ledger/meeting minute</CardContent>
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
//        <FormControlLabel value="option1" control={<Radio />}  />
//        <FormControlLabel value="option2" control={<Radio />}  />
//        <FormControlLabel value="option3" control={<Radio />} />
//        <FormControlLabel value="option4" control={<Radio />} />
//        <FormControlLabel value="option5" control={<Radio />} />
         
//        </CardContent>
//    </CardContent>

//    <CardContent sx={{display: 'flex',flexDirection:"row"}}>
//        <CardContent sx={{width:'30%'}}>Brought the books / pens to take down notes?</CardContent>
//        <CardContent sx={{width:'70%',display:'flex',flexDirection:'row',justifyContent: 'space-between' }}>
//        <FormControlLabel value="option1" control={<Radio />}  />
//        <FormControlLabel value="option2" control={<Radio />}  />
//        <FormControlLabel value="option3" control={<Radio />} />
//        <FormControlLabel value="option4" control={<Radio />} />
//        <FormControlLabel value="option5" control={<Radio />} />
         
//        </CardContent>
//    </CardContent>
     
//    </Card>

//      </CardContent>
//  </Card>

// </CardContent>
// </Grid>


//     {/* 49 */}
// <Grid backgroundColor={"#FFD580"}>
// <CardContent>
//  page -49 
//  <Card>
//  <Card sx = {{backgroundColor:'#ff7424'}} mt={2}>
//  <CardContent>
//  <Typography variant = 'h5'>Post - training on Day 1:</Typography>
//  </CardContent>
// </Card>
// <CardContent>
//  <Typography >
//  Check which ones the trainer did not do
//  </Typography>
//  <FormGroup>
// <FormControlLabel control={<Checkbox  />} label="Ask how was it for you?" />
// <FormControlLabel control={<Checkbox  />} label="Ask what did you learn new today?" />
// <FormControlLabel control={<Checkbox  />} label="Ask do you have any feedback for me as a trainer or for our organisation so that we can deliver the best experience for you?" />
// <FormControlLabel control={<Checkbox  />} label="Ask the women that if they have any doubts/questions they can ask right now in the group or ask in person?"/>
// <FormControlLabel control={<Checkbox  />} label="Tell the women what will be covered in the next training session" />
// <FormControlLabel control={<Checkbox  />} label="Ask them to share with their family what they have learnt?" />
// <FormControlLabel control={<Checkbox  />} label="Create excitement/curiosity among the participants about the next training session" />
// <FormControlLabel control={<Checkbox  />} label="Tell them that Buzz India will be following up on them for the next three years through a Buzz Gelathi" />
// <FormControlLabel control={<Checkbox  />} label="Explain the concept and functions of the Buzz Gelathi" />
// <FormControlLabel control={<Checkbox  />} label="Appreciate the Anganwadi teacher" />




// </FormGroup>
// </CardContent>
//  </Card>

// </CardContent>
// </Grid>
// <br/>


//  </div>