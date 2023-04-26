import * as React from 'react';
// import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import {Button, ButtonBase, CardContent, Card , DialogContent, DialogContentText,Typography, Grid, TextField ,MenuItem,InputLabel,NativeSelect,FormControl} from '@mui/material';
// import  ButtonBase  from '@mui/material';

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
import { BorderColor } from '@mui/icons-material';


const Transition = React.forwardRef( (props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


 const design={
  
  ackgroundColor:"#F7EEFC", 
  borderRadius:"9px"
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
            borderRadius: '50%',
            padding: '0.2rem',
            marginTop: '-0.5rem',
            position: 'fixed',
            zIndex: '1',
            bottom: 40,
            right: 40,
          }}
          sx={{
            ':hover': {
              bgcolor: '#ffd796', // theme.palette.primary.main #ffd796
                color: '#ff7424', //#ff7424
              border: '#ffd796',
              borderStyle:"solid",
              BorderColor:"#9B54BF",
              
            },
            bgcolor: 'white', //ffd796 white
            color: '#9B54BF',
            border: '3px',
            borderStyle:"solid",
            BorderColor:"#9B54BF",
              
            
          }}
          title="Create POA"
        >
          {/* style={{ float: "right", marginLeft:100, borderRadius: "50%", padding: "0.2rem", position:'relative', zIndex: '-1',marginRight:10,marginTop:15}} */}
          <span style={{ fontSize: '2rem' }}>+</span>
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
        <AppBar sx={{ position: 'relative', backgroundColor:"#F7EEFC" , color:"black" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1, }} variant="h6" component="div">
            Create Exercise Items
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        
           
        <DialogContent sx={{ background: "#f9fafb" }}>
         {/* <DialogContentText>
           
  </DialogContentText> */}

          <Card style={{padding:"20px 5px", margin:"0px auto"}}>
         {/* < ArrowBackIosIcon/>  */}
            
            
                <CardContent>
                    <Grid container flexDirection="column" spacing={1}>
                        <Grid xs={12}   mb={2}  style={{backgroundColor:"#F7EEFC", borderRadius:"9px"}}
                        Item>
                            <TextField label="Name" variant='outlined' fullWidth/>
                        </Grid>

                    
                    
                        <Grid xs={12}  mb={2}  style={{backgroundColor:"#F7EEFC" , borderRadius:"9px"}}
                         Item>
                            <TextField label="Choose Exercise Image" variant='outlined' fullWidth/>
                        </Grid>
                       
                            <Grid mb={2}   Item>
                               <Grid container flexDirection="row" justifyContent="space-between">
                                    <Grid  md={6} lg={6} xs={6} style={{backgroundColor:"#F7EEFC",borderRadius:"9px"}}  item>
                                        <TextField   label="Count" variant='outlined'  fullWidth/></Grid>
                                    <Grid md={5} lg={5} xs={5} style={{backgroundColor:"#F7EEFC", borderRadius:"9px"}} sx={{ border:'2px',borderColor:" #DEDEDE", borderStyle:"solid" }} item > 
                                    <FormControl variant='outlined'  >
                                            <InputLabel  variant='ourtlined'>
                                                Sets
                                            </InputLabel>
                                            <NativeSelect
                                             variant='outlined'
                                                defaultValue={30}
                                                inputProps={{
                                                name: 'age',
                                                id: 'uncontrolled-native',
                                                }}
                                            >
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                            </NativeSelect>
                                            </FormControl></Grid>
                              
                                 </Grid>  
                                        
                            </Grid>

                                
                                

                        
                        <Grid xs={12}   mb={2}  style={{backgroundColor:"#F7EEFC", borderRadius:"9px" }}
                         Item>
                            <TextField label="Calories" variant='outlined' fullWidth/>
                        </Grid>
                        <Grid mb={2} xs={12}    sx={{ border:'2px',borderColor:" #DEDEDE", borderStyle:"solid" }} style={{backgroundColor:"#F7EEFC" , borderRadius:"9px"}}
                             Item>
                                       <FormControl variant='outlined' fullWidth>
                                            <InputLabel variant="ourtlined" htmlFor="uncontrolled-native">
                                                Select Type Of Exercise
                                            </InputLabel>
                                            <NativeSelect
                                             variant='outlined'
                                                defaultValue={30}
                                                inputProps={{
                                                name: 'age',
                                                id: 'uncontrolled-native',
                                                }}
                                            >
                                                <option value={10}>Ten</option>
                                                <option value={20}>Twenty</option>
                                                <option value={30}>Thirty</option>
                                            </NativeSelect>
                                            </FormControl>
                        </Grid> 
                        <Grid xs={12}   mb={2}  style={{backgroundColor:"#F7EEFC", borderRadius:"9px"}}
                         Item>
                            <TextField label="Description" variant='outlined' multiline rows={5} fullWidth/>
                        </Grid>

                    </Grid>
                   
                   
                </CardContent>
               
                    
               
            </Card>
          </DialogContent>
            
           
        
       
      </Dialog>
    </div>
  );
}
