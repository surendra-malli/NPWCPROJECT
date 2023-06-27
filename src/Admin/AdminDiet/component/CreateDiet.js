import * as React from 'react';
import axios from 'axios';
// import Button from '@mui/material/Button';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Dialog from '@mui/material/Dialog';
import {Button, ButtonBase, CardContent, Card , DialogContent, DialogContentText,Typography, Grid, TextField ,MenuItem,InputLabel,NativeSelect,FormControl} from '@mui/material';
// import  ButtonBase  from '@mui/material';
import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Iconify from 'src/components/iconify/Iconify';
import AlertDialog from '../../UserStats/AlertDialog'








// import {   DialogContent, DialogContentText,  } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Plusimage from "../../../assets/Plusimage.svg";   
import { Form } from 'react-router-dom';



const currencies = [
  {
    value: 'USD',
    label: 'Ten',
  },
  {
    value: 'EUR',
    label: 'Twenty',
  },
  {
    value: 'BTC',
    label:'Thirty',
  },
  {
    value: 'JPY',
    label: 'Fats',
  },
];


const Transition = React.forwardRef( (props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullScreenDialog = forwardRef((props, ref) => {
  const childcomrefAlert=useRef();
  const [open, setOpen] = React.useState(false);
  const [name,setName]=useState('');
  const[diet,setDiet]=useState({});
  const [viewImage, setViewImage] = React.useState(false);
  const [action,setAction]=useState("Create");
  const [reload,setReload]=React.useState(false);
  const [dataOfItem,setData]=useState("");
  const [images,setImages]=useState([])
  const handleClickOpen = () => {
    if(action==='Edit'){
      console.log('inside edit action',diet);
     
    }
    else if(action==='create'){
      console.log(action,'inside123');
      
        setDiet({
          "calories":"",
          "category_id":"",
          "counts":"",
          "description":"",
          "item_image":"",
          "item_name":"",
          "type":"",
        })

        
    }
    
    setOpen(true);
  };

  const handleClose = () => {
    setDiet({})
    deleteImage(0);
    setOpen(false);
    setData("")
    setAction("Create")
  };
  const handleCloseSave=()=>{

    if(action==='Edit'){
      console.log('data to post ',diet?.calories);
      apiHitEdit();
      
    }
    else{
      apiHit();
    }
   
    //console.log('data to post ',diet);
   
   
    
  }

useEffect(()=>{
  //console.log((diet),'exxercise inside effect');
  
    console.log('inside')
    setData(dataOfItem);
    setDiet(dataOfItem);
  
  
},[dataOfItem])

  const [sets, setsets] = React.useState('');

  const handleChanges = (event) => {
    setsets(event.target.value);
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(()=>{
    setAction(action);
  },[action])

  const handleCloseDelete=()=>{
    DeleteDietPlan();
    setOpen(false);
    setAction("");
    setDiet("")
  }
  
  useImperativeHandle(ref, () => ({
   async handleClickEdit(data,action){
      setAction("Edit");
     //console.log(action,'setAction')
      const dt=data;
      setData(data);
      const imagData='https://aipse.in'+data?.item_image;
      getBase64FromUrl(imagData)
      console.log(imagData,'imagData')
      // setImages([imagData])
      console.log(dataOfItem,'to teset')
      
      
      console.log(data,'data.item_image');

      console.log(diet,'--data from edit 1',dt);

      //console.log(dt,'111',diet)
      //convertImageEdit(data.category_id,'check');
      
      //console.log('inside edit action',diet,action);
      handleClickOpen();
    }
    
}))

function getBase64(file, callback) {

  const reader = new FileReader();

  reader.addEventListener('load', () => callback(reader.result));

  reader.readAsDataURL(file);
}
  



// useEffect(()=>{
//     setImages(images);
// },[images])

const convertImage = async(e) => {
  console.log("e.target.files[0]",e.target.files[0])
  // data.append('emp_id', userid);
  // data.append('file', e.target.files[0]);
  // setImagePath([...imagePath, e.target.files[0]])
  const imageData = URL.createObjectURL(e.target.files[0]);
  //console.log(imageData, "files")
   getBase64(e.target.files[0], function (base64Data) {
    console.log('getBase64')
    setImages( [base64Data])
    setViewImage(true);
    // console.log(images,'----images----');
    console.log(base64Data,'base64Data')
  //   setViewImage(true)
  
});

  console.log("upload method is calling ",images[0]?.toString().slice(22,))
  //console.log(images[0],'slicing-----',images[0].toString().slice(22,),'----image to upload----');
  diet.item_image=images[0]?.toString().slice(22,);
  
  // setFormData(formData=>({
  //   ...formData,
  //   [item_image]:images[0]?.toString().slice(22,)
  // }))
   //setImages([])
  setReload(!reload);
  
  //alert("Photo Uploaded Successfully..")
  
}



const getBase64FromUrl = async (url) => {
  console.log(url,'urlurl')
  
  const data = await fetch(url);
  const blob = await data.blob();
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = () => {
      const base64data = reader.result;   
      setImages([base64data]);
      resolve(base64data);
    }
  });
}

console.log(images[0],'----images----222');




const deleteImage = (index) => {
  images.splice(index, 1);
  setImages([...images]);
};



const DeleteDietPlan=()=>{

  let data = JSON.stringify({
    "item_id": diet.item_id,
  });
  
  let config = {
    method: 'PUT',
    maxBodyLength: Infinity,
    url: 'http://44.212.136.151:8081/api/deleteItem',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    //alert('Diet plan deleted Successfully');
    childcomrefAlert.current.handleClickOpenAlert('Diet Item Deleted Successfully');
    props.dataHitParent();
  })
  .catch((error) => {
    console.log(error);
  });
}



const apiHit=async=>{

  if(diet?.calories==='' || diet?.item_name==='' || diet?.item_name===undefined || diet?.calories===undefined){
    childcomrefAlert.current.handleClickOpenAlert('Please fill all fields');
  }
  else{
   
    console.log('00000000000')

  let data = JSON.stringify({
    "item_name": diet?.item_name,
    "time_or_weight": 500,
    "units": "grams",
    "calories":parseInt(diet?.calories),
    "category_id": props.categorydata.category_id,
    "description":diet?.description,
    "item_image": images?.toString().slice(images.toString()[22]===','?23:22,),
    "sets": 0,
    "counts": 0,
    "type": "food",
   
  });
  
  let config = {
    method: 'POST',
    maxBodyLength: Infinity,
    url: 'http://44.212.136.151:8081/api/postOverAllDietPlan',
    headers: {
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    //alert('Diet plan created Successfully');
    childcomrefAlert.current.handleClickOpenAlert('Diet Item Created Successfully');
    setDiet({})
  setAction("Create")
  deleteImage(0);
  setData("");
    props.dataHitParent();
  })
  .catch((error) => {
    console.log(error);
  });
  setOpen(false);
  
}
}

const apiHitEdit=async()=>{
  if(diet?.calories==='' || diet?.item_name==='' || diet?.item_name===undefined || diet?.calories===undefined){
    childcomrefAlert.current.handleClickOpenAlert('Please Fill All Fields');
  }
  else{
  let data = JSON.stringify({
    "item_name": diet?.item_name,
    "time_or_weight": 500,
    "units": "grams",
    "calories": parseInt(diet?.calories),
    "category_id": dataOfItem.category_id,
    "description":diet?.description,
    "item_image":images?.toString().slice(images.toString()[22]===','?23:22,),
    "sets": 0,
    "counts": 0,
    "type": "food",
    "item_id":dataOfItem.item_id
   
  });
  
  let config = {
    method: 'PUT',
    maxBodyLength: Infinity,
    url: 'http://44.212.136.151:8081/api/EditItemExerciseHandler',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
 await axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data),'------edit response');
    //alert('Diet plan updated Successfully');
    childcomrefAlert.current.handleClickOpenAlert('Diet Item Updated Successfully');
    setDiet({})
    setAction("Create")
    deleteImage(0);
    setData("");
    props.dataHitParent();
  })
  .catch((error) => {
    console.log(error);
  });
  setOpen(false)
 
}



}

  


  return (
    <div>
      <Button
          id="create-poa-button"
          variant="contained"
          onClick={handleClickOpen}
          style={{
            float: 'right',
            marginLeft: '1rem',
            
            padding: '0.3rem',
            marginTop: '-0.5rem',
            position: 'fixed',
            zIndex: '1',
            bottom: 40,
            right: 40,
          }}
          sx={{
            ':hover': {
                bgcolor: "#007AFF", // theme.palette.primary.main
                color: 'white',
                border: '#ffd796'
            },
            ':active': {
                bgcolor: "#007AFF",
                color: "#9B59B6"
            },
            bgcolor: '#007AFF',
            color: "white",
            border: 'none'
        }} 
          title=""
        >
          {/* style={{ float: "right", marginLeft:100, borderRadius: "50%", padding: "0.2rem", position:'relative', zIndex: '-1',marginRight:10,marginTop:15}} */}
          <span style={{ fontSize: '1rem' }}>Create Diet Item</span>
        </Button>
     
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        
        <ButtonBase sx={{ width: "auto", height: "auto" }}>
                <img src={Plusimage} alt="nova logo" style={{ height: "70", width: "70px" ,  alignContent:"flex-end"}} />
          </ButtonBase>
        
      </Button> */}
      <Dialog
        fullScreen
        open={open}

        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' ,backgroundColor:"#007AFF" ,color:"white"}}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              sx={{color:'white'}}
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1,color:'white' }} variant="h6" component="div">
              {action} Diet Item
            </Typography>
            <Button sx={{color:'white'}} autoFocus color="inherit" onClick={handleCloseSave}>
              save
            </Button>
            { action==='Edit' &&(
              <Button sx={{color:'white'}}autoFocus color="inherit" onClick={handleCloseDelete}>
                Delete
              </Button>)
            } 
          </Toolbar>
        </AppBar>
        
           
        <DialogContent sx={{ background: "#f9fafb" }}>
         {/* <DialogContentText>
           
  </DialogContentText> */}

          <Card style={{padding:"20px 5px", margin:"0px auto"}}>
         {/* < ArrowBackIosIcon/>  */}
            
            
                <CardContent>
                    <Grid container flexDirection="column" spacing={1}>
                        <Grid xs={12}   mb={2}  sx={{borderColor:"#007AFF"}} Item>
                            <TextField onChange={(e)=>setDiet({...diet,item_name:e?.target?.value})} value={diet.item_name} label="Name" sx={{borderColor:"purple"}} variant='outlined' fullWidth/>
                        </Grid>

                    
                    
                        {/* <Grid xs={12}  mb={2}   variant='outlined' 
                         Item>
                            <TextField label="Choose Exercise Image"  fullWidth/>
                        </Grid>
                       
                            <Grid mb={2}   Item>
                               <Grid container flexDirection="row" justifyContent="space-between">
                                    <Grid  md={6} lg={6}    item>
                                        <TextField  label="count"  variant='outlined'  fullWidth/></Grid>
                                    <Grid md={5.5} lg={5.5} xs={5.5}  item > 
                                    
                                    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sets</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sets}
          label="Set"
          onChange={handleChanges}
        >
          <MenuItem value={10}>Teniu</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
                                    
                                    
                                    </Grid>
                              
                                 </Grid>  
                                        
                            </Grid> */}

<Typography variant="body2" gutterBottom>Choose Diet Image</Typography>
<div id="project-input-tag-div" style={{ display: 'flex' ,marginTop:"10px" , marginBottom:"10px"}}>
                  <label id="input-tag-project-multi-drawer" for="inputTag" style={{ cursor: 'pointer', display: 'flex' }}>
                    
                    <Iconify id="camera-icon" icon={'mdi:camera'} sx={{ width: 25, height: 25, ml: 2, color: '#007AFF' }} />
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
                                

                        
                        <Grid xs={12}   mb={2}  
                         Item>
                            <TextField type="number" value={diet?.calories} onChange={(e)=>{
                              if(e?.target?.value>0 || e?.target?.value==='')
                              setDiet({...diet,calories:e?.target?.value})
                              
                              }} label="Calories" variant='outlined' fullWidth/>
                        </Grid>
                        {/* <Grid mb={2} xs={12}     Item>
                                      
                        
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Type Of Exercise</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select Type Of Exercise"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten123</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
           
                        

                                            
                                   
                        </Grid>  */}
                        
                        <Grid xs={12}   mb={2}  style={{ borderRadius:"10px"}}
                        Item>
                            <TextField  InputProps={{
                                  readOnly: true,
                                }}  label="Category"  value={props.categorydata.category_name} name="item_name" variant='outlined' fullWidth/>
                        </Grid>

                        <Grid xs={12}   mb={2}    Item>
                            <TextField label="Description"   value={diet.description} onChange={(e)=>setDiet({...diet,description:e?.target?.value})} variant='outlined' multiline rows={5} fullWidth/>
                        </Grid>

                    </Grid>
                   
                   
                </CardContent>
               
                    
               
            </Card>
          </DialogContent>
            
           
        
       
      </Dialog>
      <AlertDialog Message="Created Successfully" ref={childcomrefAlert}/>
    </div>
  );
})

export default  FullScreenDialog;
