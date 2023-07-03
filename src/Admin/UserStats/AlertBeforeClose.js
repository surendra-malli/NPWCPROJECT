import * as React from 'react';
import { useState,forwardRef, useImperativeHandle } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect } from 'react';
import {Typography,Grid,Card,CardContent} from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const AlertDialog = forwardRef((props, ref) => {

  const [open, setOpen] =useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    handleClickOpenAlert
}))
const [message,setMessage]=useState("Sucesfully Done");
// useEffect(()=>{
//     handleClickOpen();
// },[message])
const handleClickOpenAlert=(msg)=>{
  console.log(message,'msgggggg')
    setMessage(msg);
   

    handleClickOpen();
    
}

const handleSave=()=>{
    props.saveChanges();
}

const handleDiscard=()=>{
    props.discardChanges();
}

  return (
    <>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container flexDirection="column" alignItems='center' justifyContent='space-between'>
                <Grid sx={{cursor:'pointer'}} onClick={handleSave} item>
            <CardContent>
           <Typography>Save Changes</Typography>
           </CardContent>
            </Grid>
            <Grid sx={{cursor:'pointer'}} onClick={handleDiscard} item>
         <CardContent>
           <Typography>Discard Changes</Typography>
           </CardContent>
           </Grid>
           </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
})

export default AlertDialog;
