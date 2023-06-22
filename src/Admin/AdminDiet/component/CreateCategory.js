import * as React from 'react';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { CardContent, Stack, TextField, Typography, AppBar,Toolbar,Grid, Tooltip} from '@mui/material';
import axios from 'axios';
import AlertDialog from 'src/Admin/UserStats/AlertDialog';
//import Tooltip from '@mui/material/Tooltip';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});






const CreateCategory = forwardRef((props, ref,categoryData,setShowState,showState) => {
    const childcomrefAlert=useRef();


const [readOnlyAction,setReadOnlyAction]=useState(false)
  let message='';
  
const [editing, setEditing] = useState(true);
const [value, setValue] = useState('Initial value');



const deleteHit=async=>{
    let data = JSON.stringify({
        "category_id":createData?.category_id, 
      });
      
      let config = {
        method: 'PUT',
        maxBodyLength: Infinity,
        url: 'https://aipse.in/api/deletecategory',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        props.categoryhit(0)
        childcomrefAlert.current.handleClickOpenAlert('Category Deleted Sucessfully');
      })
      .catch((error) => {
        console.log(error);
      });

}

  //console.log(categoryData,showState,"<-------------------forwardRefforwardRef-")
      const [open, setOpen] = React.useState(false);
      const [createData, setCreateData] = useState({
          "category_name": "",
          "type": " "
      })
      const [renameData, setRenameData] = useState({
          "category_id": "",
          "category_name": "",
          "type": ""
  
      })
      const [action,setAction]=useState("");
      const [categoryDataApi,setCategoryDataApi]=useState([]);
  
    //   useEffect(() => {
          
    //       addCategory();
    //   }, []);
  

    const handleSave=async=>{
        if(action==='edit'){
            RenameHit();
        }else if(action==='create'){
            addCategory();
        }
        //setOpen(false);
        message='category Renamed Sucessfully'
        //childcomrefAlert.current.handleClickOpenAlert('category Renamed Sucessfully');
    }
  
      const addCategory = async() => {
        if(createData?.category_name===''){
            childcomrefAlert.current.handleClickOpenAlert('Please fill All Fields');
        }

        else{
  
          let data = JSON.stringify({
              "category_name": createData?.category_name,
              "type": "food"
          });
  
          let config = {
              method: 'post',
              maxBodyLength: Infinity,
              url: 'https://aipse.in/api/AddCategories',
              headers: {
                  'Content-Type': 'text/plain'
              },
              data: data
          };
  
  
          axios.request(config)
              .then((response) => {
                  if (response.code == "200") {
                      setCreateData({
                          "category_name": "",
                          "type": "food "
                      })
  
  
  
                  }
                  props.categoryhit(1)
                      //  < alert/>
                      childcomrefAlert.current.handleClickOpenAlert('Category Added Sucessfully');
                  console.log((response.data.data, "-----create dataikiii"));
  
                  setOpen(false);
  
              })
              .catch((error) => {
                  console.log(error);
              });

        }
  
      }
  
      const categoryhit = async => {
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: 'https://aipse.in/api/getAllCategories?type=food',
            headers: { 'Content-Type': 'application/json' },
        };
        axios(config)
            .then((response) => {
                setCategoryDataApi(response?.data?.data)
                 console.log(response?.data?.data, "<------------------------111setCategoryDatasetCategoryData");
                //childcomrefAlert.current.handleClickOpenAlert();
            })
            .catch((error) => {
                console.log(error);
            });


    }
  
  
      const alreadyPresent=(str)=>{
        
         
           for(let i=0;i<categoryDataApi?.length;i++){
            if(categoryDataApi[0]?.category_name===str){
              console.log(str)
              return true;
            }
           }       
           return false;
                 
             

              
  
  
      
      }
  
  
      const RenameHit = async => {
          if(alreadyPresent(createData?.category_name)){
            childcomrefAlert.current.handleClickOpenAlert('Category Already Exist');
          }

        else{
  
          let data = JSON.stringify({
              "category_id":createData?.category_id,
              //  "category_name": createData?.category_name,
              "category_name": createData?.category_name,
  
              "type": "food"
          });
  
  
  
          let config = {
              method: 'PUT',
              maxBodyLength: Infinity,
              // url: baseUrl+'updatecategory',
              url: "https://aipse.in/api/updatecategory",
              headers: {
                  'Content-Type': 'application/json'
              },
              data: data
  
          };
  
          axios(config)
              .then((response) => {
                  setRenameData(response?.data?.data)
                  console.log(response.data.data, "<-----------------setDelete Dataset DeleteData");
                  childcomrefAlert.current.handleClickOpenAlert('Category Renamed Sucessfully');
                  props.categoryhit(2)
                  setOpen(false)
              })
              .catch((error) => {
                  console.log(error);
              });
            }
            
      }
    
  
  
  
      useImperativeHandle(ref, () => ({
          handleClickOpenEdit(categoryName,categoryId) {
              // setCreateData({...createData, category_name:itemName })
              setCreateData({
                ...createData,
                category_name:categoryName,
                category_id:categoryId

              })
              console.log("handle click");
              setEditing(false);
              setOpen(true);
              setAction('edit');
          }
          
      }))
      const handleClickOpen = (e) => {
  
        setEditing(true);
          setOpen(true);
          setAction('create');
      };
  
      const handleClose = (e) => {
        setCreateData({...createData, category_name:"" })
          setOpen(false);
      };
      const handleCloseDelete=()=>{
        deleteHit();
        setCreateData({...createData, category_name:"" })
          setOpen(false);
      }
      

      const handleRename=()=>{
        setEditing(true);
        console.log(editing,'editin')
    //    RenameHit();
    //     console.log('rename',createData);
    //     setOpen(false);
      }
  
      // const location = useLocation();
      // console.log(props, " props");
      // console.log(location, " useLocation Hook");
      // const  categoryData = location.state?.categoryData;
      // {console.log(categoryData,"import data ");}
  
  
      const handleTextFieldBlur = () => {
        //setEditing(false);
      };
    //   const handleButtonClick = () => {
    //     setEditing(true);
    //   };
  
  
  
      return ( 
      <div >
  
              <Button id = "create-poa-button"
              variant = "contained"
              onClick = { handleClickOpen }
              style = {
                  {
                      float: 'right',
                      marginLeft: '1rem',
                      padding: '0.3rem',
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
              }
              }
              title = "" >
                <Tooltip >
              <span style = {   { fontSize: '1rem' } } > Create Diet Category </span> 
              </Tooltip>
              </Button >
  
              < Dialog position = "fixed"
  
              open = { open }
              TransitionComponent = { Transition }
              keepMounted onClose = { handleClose }
              aria-describedby = "alert-dialog-slide-description" >
              < AppBar sx = {
                  { position: 'relative', backgroundColor: "#007AFF" }
                  
              }  >
              < Toolbar >
                <Grid container justifyContent='space-between'>
               
             { action==='edit' && (
             <Grid item>
             <Tooltip title='Rename Diet Item'>
             
             <Typography sx = {{ cursor:'pointer',color:'white' } }
              
              component = "div" onClick={handleRename}> Rename</Typography>
              </Tooltip>
              </Grid>
              )
              
              }
             

              <Grid item>
  
              < Typography sx = {
                  { ml: 2, flex: 1,color:'white'}
              }
              
              component = "div" >
              Category </Typography> 

              </Grid> 

              
               <Grid item>
                <Tooltip title='Close'>
              <Typography onClick = { handleClose }
              sx = {
                  { ml: 2, flex: 1 ,cursor:'pointer',color:'white'}
              }
              
              component = "div" >
              Close </Typography>
              </Tooltip>
              
              </Grid> 
              {
              // <Button sx={{marginTop:"5px",ml:2, fontSize:"17px"}} autoFocus color="inherit" onClick={handleClose}>
              //               close
              //             </Button> 
          } 
          </Grid>
          </Toolbar> 
          </AppBar >
  
          <DialogContent >
  
          {/* <TextField  label = "create new category" onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) } value = { createData?.category_name } fullWidth >

          </TextField>  */}

          {/* <TextField
          onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) }
          value = { createData?.category_name }
          fullWidth
       // disabled={!editing}
        InputProps={{
          readOnly: !editing,
          onBlur: handleTextFieldBlur,
          
        }}
      /> */}

      <TextField onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) }  
          fullWidth
          value = { createData?.category_name } 
          InputProps={{
            readOnly: !editing,
            
            
          }}
         
      ></TextField>
      {/* <Button onClick={handleButtonClick} disabled={editing}>edit</Button> */}
          </DialogContent > 
          <DialogActions >
            <Tooltip title='Save'>
          <Button sx={{color:'lightgreen'}} onClick = { handleSave } > Save </Button> 
          </Tooltip>
  
  {  action==='edit' &&
  <Tooltip title='Delete'>
      <Button onClick = { handleCloseDelete } > Delete </Button> 
      </Tooltip> }
      </DialogActions > 
                </Dialog>


                <AlertDialog Message={message} ref={childcomrefAlert}/>
  
      </div>
  );
  })
  
  
  export default CreateCategory;
