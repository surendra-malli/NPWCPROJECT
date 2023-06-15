import * as React from 'react';
<<<<<<< HEAD
=======
import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
>>>>>>> aastha
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
<<<<<<< HEAD
import { CardContent, Grid, Stack, TextField, Typography,AppBar,Toolbar,IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState,useEffect } from 'react';
import axios from 'axios';
=======
import { CardContent, Stack, TextField, Typography, AppBar,Toolbar,} from '@mui/material';
import axios from 'axios';
import AlertDialog from 'src/Admin/UserStats/AlertDialog';
>>>>>>> aastha

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

<<<<<<< HEAD
const  CreateCategory= React.forwardRef((props, ref) => {
  const [createData, setCreateData] = useState({
    "category_name": "",
    "type": " "
})

  const [open, setOpen] = React.useState(false);
  const [editing, setEditing] = useState(true);

  const [renameData, setRenameData] = useState({
    "category_id": "",
    "category_name": "",
    "type": ""

})
const [action,setAction]=useState("");
  React.useImperativeHandle(ref, () => ({
    handleClickOpenEdit
  }));
 function handleClickOpenEdit(categoryName,categoryId){
    setCreateData({
      ...createData,
      category_name:categoryName,
      category_id:categoryId

    })
    setEditing(false);
              setOpen(true);
              setAction('edit');
    setOpen(true);
  }

  const handleClickOpen = () => {
    setEditing(true);
    setAction('create');
    setOpen(true);
  };
const handleClose=()=>{
  setCreateData({...createData, category_name:"" })
  setOpen(false);
}
  const handleCloseSave = () => {
    if(action==='edit'){
      RenameHit();
  }else if(action==='create'){
      addCategory();
  }
  
    setOpen(false);

  };

  const handleRename=()=>{
    //RenameHit();
    setEditing(true);
   }
   const handleCloseDelete=()=>{
    deleteHit();
    setCreateData({...createData, category_name:"" })
      setOpen(false);
  }
  

   const RenameHit = async => {
  
    let data = JSON.stringify({
        "category_id":createData?.category_id,
        
        "category_name": createData?.category_name,

        "type": "exercise"
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
            //console.log(response.data.data, "<-----------------setDelete Dataset DeleteData");
        })
        .catch((error) => {
            console.log(error);
        });
}


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
    })
    .catch((error) => {
      console.log(error);
    });
}

const addCategory = async() => {
  
  
  let data = JSON.stringify({
      "category_name": createData?.category_name,
      "type": "exercise"
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
                  "type": "exercise"
              })



          }
          //props.categoryhit()
              //  < alert/>
          console.log((response.data.data, "-----create dataikiii"));

          setOpen(false);

      })
      .catch((error) => {
          console.log(error);
=======





const CreateCategoryExercise = forwardRef((props, ref,categoryData,setShowState,showState) => {
    const childcomreffAlert=useRef();


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
        props.categoryHit(0)
        childcomreffAlert.current.handleClickOpenAlert('category Delete Sucessfully');
      })
      .catch((error) => {
        console.log(error);
>>>>>>> aastha
      });

}

<<<<<<< HEAD
const handleTextFieldBlur = () => {
  setEditing(false);
};
  
  return (
    <div >
    
    <Button
          id="create-poa-button"
          variant="contained"
          onClick={handleClickOpen}
          style={{
            float: 'right',
            marginLeft: '1rem',
            borderRadius: '50%',
            padding: '0.2rem',
            marginTop: '-0.5rem',
            position: 'fixed',
            zIndex: '1',
            bottom: 40,
            right: 40,
          }}
         
      // sx={{
      //   ':hover': {
      //       bgcolor: '#ffd796', // theme.palette.primary.main #ffd796
      //         color: '#ff7424', //#ff7424
      //       border: '#ffd796',
      //       borderStyle:"solid",
      //       BorderColor:"#9B54BF",
            
      //     },
      //     bgcolor: 'white', //ffd796
      //     color: '#9B54BF',
      //     border: '3px',
      //     borderStyle:"solid",
      //     BorderColor:"#9B54BF",
        
      // }} 



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
      }} 
    


          title="Create POA"
        >
          {/* style={{ float: "right", marginLeft:100, borderRadius: "50%", padding: "0.2rem", position:'relative', zIndex: '-1',marginRight:10,marginTop:15}} */}
          <span style={{ fontSize: '2rem' }}>+</span>
        </Button>
    
     <Dialog 
   
       
        position="fixed"
       
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
       aria-describedby="alert-dialog-slide-description"
      >
        

        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
          <Typography  onClick={handleRename} sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Rename
            </Typography>
            
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Category
            </Typography>
            <Button sx={{marginTop:"5px",ml:2, fontSize:"17px"}} autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
      


        {/* <AppBar sx={{ position: 'relative' }}>
          <Toolbar >
            <Stack spacing={2} direction={"row"}>
          <Typography style={{textAlign:"flex-start"}} variant="h6" component="div">
              Rename
            </Typography>
            
            <Typography style={{textAlign:"center",justifyContent:"center",alignSelf:"center"}} variant="h6" component="div">
              Category
            </Typography>
            <Button style={{textAlign:"flex-end"}}  autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
            </Stack>
          </Toolbar>
        </AppBar> */}
        
        <DialogContent>
          <TextField 
        
          onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) }
          value = { createData?.category_name }
          fullWidth
          disabled={!editing}
          InputProps={{
=======
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
        setOpen(false);
        message='category Renamed Sucessfully'
        //childcomreffAlert.current.handleClickOpenAlert('category Renamed Sucessfully');
    }
  
    const addCategory = async() => {
      if(createData?.category_name===''){
          childcomrefAlert.current.handleClickOpenAlert('Please fill All Fields');
      }

      else{

        let data = JSON.stringify({
            "category_name": createData?.category_name,
            "type": "exercise"
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
                        "type": "exercise"
                    })



                }
                props.categoryhit(1)
                    //  < alert/>
                    childcomrefAlert.current.handleClickOpenAlert('category Added Sucessfully');
                console.log((response.data.data, "-----create dataikiii"));
                props.categoryHit(1)

                setOpen(false);

            })
            .catch((error) => {
                console.log(error);
            });

      }

    }

  
  
  
  
  
  
      const RenameHit = async => {
  
          let data = JSON.stringify({
              "category_id":createData?.category_id,
              //  "category_name": createData?.category_name,
              "category_name": createData?.category_name,
  
              "type": "exercise"
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
                  childcomreffAlert.current.handleClickOpenAlert('category Renamed Sucessfully');
                  props.categoryHit(2)
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
              </Button >
  
              < Dialog position = "fixed"
  
              open = { open }
              TransitionComponent = { Transition }
              keepMounted onClose = { handleClose }
              aria-describedby = "alert-dialog-slide-description" >
              < AppBar sx = {
                  { position: 'relative', backgroundColor: "purple" }
              } >
              < Toolbar >
              <Typography sx = {{ ml: 2, flex: 1 } }
              variant = "h6"
              component = "div" onClick={handleRename}> Rename </Typography>
  
              < Typography sx = {
                  { ml: 2, flex: 1 }
              }
              variant = "h6"
              component = "div" >
              Category </Typography> 
              <Typography onClick = { handleClose }
              sx = {
                  { ml: 2, flex: 1 }
              }
              variant = "h6"
              component = "div" >
              Close </Typography> {
              /* <Button sx={{marginTop:"5px",ml:2, fontSize:"17px"}} autoFocus color="inherit" onClick={handleClose}>
                            close
                          </Button> */
          } </Toolbar> 
          </AppBar >
  
          <DialogContent >
  
          {/* <TextField  label = "create new category" onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) } value = { createData?.category_name } fullWidth >

          </TextField>  */}

          <TextField
          onChange = {(e) => setCreateData({...createData, category_name:e.target.value }) }
          value = { createData?.category_name }
          fullWidth
        disabled={!editing}
        InputProps={{
>>>>>>> aastha
          readOnly: !editing,
          onBlur: handleTextFieldBlur,
          
        }}
<<<<<<< HEAD

          label="create new category" fullWidth> 

          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSave}>Save</Button>
          <Button onClick={handleCloseDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
      
     
    </div>
  );
});

export default CreateCategory;
=======
      />
      {/* <Button onClick={handleButtonClick} disabled={editing}>edit</Button> */}
          </DialogContent > 
          <DialogActions >
          <Button onClick = { handleSave } > Save </Button> 
  
  
      <Button onClick = { handleCloseDelete } > Delete </Button> 
      </DialogActions > 
                </Dialog>


                <AlertDialog Message={message} ref={childcomreffAlert}/>
  
      </div>
  );
  })
  
  
  export default CreateCategoryExercise;
>>>>>>> aastha
