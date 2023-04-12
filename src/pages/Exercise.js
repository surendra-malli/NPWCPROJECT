import React from 'react';
import { Link as RouterLink } from 'react-router-dom';




import Box from '@mui/material/Box';

import Card from '@mui/material/Card';

import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';


import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';


// import { makeStyles } from '@material-ui/core/styles';

// import CardMedia from '@material-ui/core/CardMedia';

// import companyimage from '../images/CompanyName.png';

// import chicken from '../images/chicken.png';

// import peas from '../images/peas.png'

// import ExerciseLogo from '../images/ExerciseLogo.png';

import Poultry from "./pictures/Poultry.svg";
import Exerciselogo from "./pictures/Exerciselogo.svg";
import Logo from "./pictures/nova.svg";

const plusStyle = {
    width: "34px",
    height: "26px",
    backGround: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px"
   
  };
  const proteinStyle={
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "35px",
    lineHeight: "38px",

    color: "#000000"
  };
  const totalservingsStyle={
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    
    color: "#000000"
  };
  const dayservingsStyle={
    fontFamily: 'Poppins',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    
    color: "#000000"
  };
  
export default function Exercise(){

      
     
    return (
        <Card className='dietplan-container'>
            <CardContent className='dietplan-companyname'>
                <img src={Logo} alt="loading" className='dietplan-companyname-image'/>
                
            </CardContent>
            <CardContent>
                <Grid container justifyContent="space-between">
                        <Grid item className="my-grid-item" style={{marginleft:"30px"}}>
                            <span style={{fontWeight: "bold"}}>Exercise</span>
                        </Grid>
                        <Grid item className="my-grid-item" style={{marginRight:"30px"}}>
                            <span>Today</span>
                        </Grid>
                </Grid>
            </CardContent>
            
            <Grid>
                <Card style={{backgroundColor:"#D1A6E7",margin:"10px"}}>
                    <Grid container justifyContent="space-between" alignItems="center" item >
                    <Card sx={{minWidth:145,minHeight:65}} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                        <Grid container flexDirection="row"  >
                        
                           <Grid item>
                            
                           <Typography ml={1} variant="body1" component="span" style={totalservingsStyle} style={{ fontSize:"40px" ,color:"white"}}>
                                            15
                                    </Typography>
                            </Grid> 
                            <Grid item>
                                <Grid  container flexDirection="column"  style={{backgroundColor:"#8D25C1",margin:"10px"}} >
                                    <Grid item>
                                        <Typography variant="h5" component="span" style={{ fontSize:"15px" ,color:"black",marginTop:"10px"}}>
                                                March
                                        </Typography>
                                    </Grid>
                                
                                    <Grid item>
                                        <Typography  variant="h5" component="span" style={{ fontSize:"15px" ,color:"black",marginBottom:"10px"}}>
                                                2023
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                           
                            
                        </Grid>
                    </Card>
                    <Card sx={{minWidth:145,minHeight:65}} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                    <Grid container flexDirection="column" justifyItems="center">
                        
                        <Grid item>
                        <Typography  style={{ fontSize:"13px" ,color:"black",marginLeft:"10px"}}>Today's Goal</Typography>
                        </Grid>
                        <Grid item>

                       
                        <Grid ml={2} container flexDirection="row">
                           <Grid item><Typography style={{ fontSize:"35px" ,color:"white",fontWeight:"40px"}}>20</Typography></Grid>
                           <Grid item><Typography mt={3} style={{ fontSize:"12px" ,color:"white",fontWeight:"20px"}}>Exercise</Typography></Grid>
                            </Grid>
                        </Grid>
                        
                        
                        
                    </Grid>

                    </Card>
                    </Grid>
                    
                    
                </Card>
            </Grid>
        <Grid Item>
             <Card sx={{ minWidth: 275 }} style={{backgroundColor:"#212121",margin:"20px"}}>
                    <CardContent>
                        <Grid container flexDirection="row" justifyContent="space-between">
                            
                            <Grid mt={2} Item>
                                <Typography style={{ fontSize:"20px" ,color:"#E1B725"}}>10 Exercise Left</Typography>
                               
                            </Grid>
                        
                            <Grid item> 
                                 <img src={Exerciselogo} className='dinning-img' alt="dinning" />
                            </Grid>
                            
                        </Grid>
                    </CardContent>
            </Card>
        </Grid>
           

           

            <Card sx={{ minWidth: 275 }} style={{backgroundColor:"#F0E7F5",margin:"20px"}}>
                <CardContent to="/dashboard/aerobic" component={RouterLink} sx={{textDecoration:'none'}}>
                <Grid container justifyContent="space-between" alignItems="center" style={{padding:"5px"}}>
                    <Grid item>
                        
                        <Typography variant="body1" component="span" style={proteinStyle}>
                        Aerobic<br/>Activity
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h5" component="span" style={plusStyle}>
                        +
                        </Typography>
                    </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }} style={{backgroundColor:"#F0E7F5",margin:"20px"}}>
            <Grid container justifyContent="space-between" alignItems="center" style={{padding:"5px"}}>
                <Grid item>
                    <Typography variant="body1" component="span" style={proteinStyle}>
                       Strength<br/>
                        Training
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h5" component="span" style={plusStyle}>
                    +
                    </Typography>
                </Grid>
            </Grid>
            
            </Card>
           
           
         </Card>
    );
}