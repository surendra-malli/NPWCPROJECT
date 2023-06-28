import * as React from 'react';
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { CardContent, Stack, TextField, Typography, AppBar,Toolbar,Grid} from '@mui/material';
import axios from 'axios';
import AlertDialog from 'src/Admin/UserStats/AlertDialog';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});






const CreateCategoryExercise = forwardRef((props, ref,categoryData,setShowState,showState) => {
    const childcomreffAlert=useRef();
    const [categoryDataApi,setCategoryDataApi]=useState([]);

const [readOnlyAction,setReadOnlyAction]=useState(false)
  let message='';
  
const [editing, setEditing] = useState(true);
const [value, setValue] = useState('Initial value');

useEffect(()=>{
categoryhit();
},[])

const deleteHit=async=>{
    let data = JSON.stringify({
        "category_id":createData?.category_id, 
      });
      
      let config = {
        method: 'PUT',
        maxBodyLength: Infinity,
        url: 'https://novapwc.com/api/deletecategory',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        props.categoryHit(0)
        childcomreffAlert.current.handleClickOpenAlert('Category Deleted Successfully');
      })
      .catch((error) => {
        console.log(error);
      });

}

  console.log(categoryData,showState,"<-------------------forwardRefforwardRef-")
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
        message='Category Renamed Successfully'
        //childcomreffAlert.current.handleClickOpenAlert('category Renamed Successfully');
    }
    const checkDuplicate=(str)=>{
      let flag=false;
      categoryDataApi.map(item=>{
        if(item?.category_name===str) flag=true;
        //console.log(item?.category_name)
      })
      //console.log(str,'jjjjj')
      return flag;
    }
  
    const addCategory = async() => {
      if(createData?.category_name===''){
          childcomreffAlert.current.handleClickOpenAlert('Please fill all fields');
          
      }
      else if(checkDuplicate(createData?.category_name)){
        
        childcomreffAlert.current.handleClickOpenAlert(`Category ${createData?.category_name} already present`);
      }

      else{

        let data = JSON.stringify({
            "category_name": createData?.category_name.trim(),
            "type": "exercise"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://novapwc.com/api/AddCategories',
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
                        "type": "exercise"
                    })



                }
                props.categoryHit(1)
                    //  < alert/>
                    childcomreffAlert.current.handleClickOpenAlert('Category Added Successfully');
                console.log((response.data.data, "-----create dataikiii"));
                // props.categoryHit(1)

                setOpen(false);

            })
            .catch((error) => {
                console.log(error);
            });

      }

    }

  
  
  
  
  
  
      const RenameHit = async => {

        if(checkDuplicate(createData?.category_name)){
        
          childcomreffAlert.current.handleClickOpenAlert(`Category ${createData?.category_name} already present`);
        }
  
        else {
          let data = JSON.stringify({
              "category_id":createData?.category_id,
              //  "category_name": createData?.category_name,
              "category_name": createData?.category_name.trim(),
  
              "type": "exercise"
          });
  
  
  
          let config = {
              method: 'PUT',
              maxBodyLength: Infinity,
              // url: baseUrl+'updatecategory',
              url: "https://novapwc.com/api/updatecategory",
              headers: {
                  'Content-Type': 'application/json'
              },
              data: data
  
          };
  
          axios(config)
              .then((response) => {
                  setRenameData(response?.data?.data)
                  console.log(response.data.data, "<-----------------setDelete Dataset DeleteData");
                  childcomreffAlert.current.handleClickOpenAlert('Category Renamed Successfully');
                  props.categoryHit(2)
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
            url: 'https://novapwc.com/api/getAllCategories?type=exercise',
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
          createData.category_name="";
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
        setEditing(false);
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
                          //bgcolor: "#F0E7F5", // theme.palette.primary.main
                          color: 'white',
                          border: '#ffd796'
                      },
                      ':active': {
                          bgcolor: "#007AFF",
                          color: "white"
                      },
                      bgcolor: '#007AFF',
                      color: "white",
                      border: 'none'
                  }
              }
               >
  
              <span > Create Exercise Category </span> 
              </Button >
  
              < Dialog position = "fixed"
  
              open = { open }
              TransitionComponent = { Transition }
              keepMounted onClose = { handleClose }
              aria-describedby = "alert-dialog-slide-description" >
              < AppBar sx = {
                  { position: 'relative', backgroundColor: "#007AFF" }
              } >
              < Toolbar >
              <Grid container justifyContent='space-between'>
                
              { action==='edit' &&
              <Grid item>
              <Typography sx = {{ ml: 2, flex: 1,cursor:'pointer',color:'white' } }
              
              component = "div" onClick={handleRename}> Rename </Typography>
               </Grid>
              }
             

              <Grid item>
  
              < Typography sx = {
                  { ml: 2, flex: 1,color:'white' }
              }
              
              component = "div" >
              Category </Typography> 
              </Grid>

              <Grid item>
              <Typography onClick = { handleClose }
              sx = {
                  { ml: 2, flex: 1,cursor:'pointer',color:'white' }
              }
              
              component = "div" >
              Close </Typography> 
              </Grid>
              {
              /* <Button sx={{marginTop:"5px",ml:2, fontSize:"17px"}} autoFocus color="inherit" onClick={handleClose}>
                            close
                          </Button> */
          } 
             </Grid>
          
          </Toolbar> 
          </AppBar >
  
          <DialogContent >
  
          {/* <TextField  label = "create new category" onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) } value = { createData?.category_name } fullWidth >

          </TextField>  */}

          <TextField
          onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) }
          value = { createData?.category_name }
          fullWidth
        
        InputProps={{
          readOnly: !editing,
          
          
        }}
      />
      {/* <Button onClick={handleButtonClick} disabled={editing}>edit</Button> */}
          </DialogContent > 
          <DialogActions >
          <Button sx={{color:'lightgreen'}} onClick = { handleSave } > Save </Button> 
  
  { action==='edit' &&
      <Button onClick = { handleCloseDelete } > Delete </Button> }
      </DialogActions > 
                </Dialog>


                <AlertDialog Message={message} ref={childcomreffAlert}/>
  
      </div>
  );
  })
  
  
  export default CreateCategoryExercise;