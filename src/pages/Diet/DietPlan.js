import React from 'react';

// import '../css/DietPlan.css';


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
// import Poultry from "../pictures/Poultry.svg";
import Logo from "../pictures/nova.svg";
import Diet from "../pictures/Diet.svg";
import Peas from "../pictures/Peas.svg";
import Arrowforward from "../pictures/Arrowforward.svg";
import ProteinChicken from "../pictures/ProteinChicken.svg"
// import companyimage from '../images/CompanyName.png';

// import chicken from '../images/chicken.png';

// import peas from '../images/peas.png'

// import dinning from '../images/dinningicon.png';

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
    fontWeight: "400",
    fontSize: "25px",
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

  
export default function DietPlan(){

      
     
    return (
        
        <div className='dietplan-container'>
            <CardContent className='dietplan-companyname'>
                <img src={Logo} alt="loading" className='dietplan-companyname-image'/>
                
            </CardContent>
            <CardContent>
                <Grid container justifyContent="space-between">
                        <Grid item className="my-grid-item" style={{marginleft:"30px"}}>
                            <span style={{fontWeight: "bold"}}>Diet Plan</span>
                        </Grid>
                        <Grid item className="my-grid-item" style={{marginRight:"30px"}}>
                            <span>Today</span>
                        </Grid>
                </Grid>
            </CardContent>
            
            <Grid>
                <Card style={{backgroundColor:"#D1A6E7",margin:"10px"}}>
                    <Grid container justifyContent="space-between" flexDirection={"row"} alignItems="center" item >
                    <Grid item xs={6}> 
                    <Card xs={6} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                        <Grid container flexDirection="row" paddingTop={1} >
                        
                           <Grid item>
                            
                           <Typography ml={1} variant="body1" component="span" style={totalservingsStyle} style={{ fontSize:"30px" ,color:"white"}}>
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
                    </Grid>
                     <Grid item xs={6}>
                    <Card  xs={6} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                    <Grid container flexDirection="column" justifyItems="center">
                        
                        <Grid item paddingTop={1}>
                        <Typography  style={{ fontSize:"13px" ,color:"black",marginLeft:"10px"}}>Today's Intakes</Typography>
                        </Grid>
                        <Grid item>

                       
                        <Grid ml={2} container flexDirection="row">
                           <Grid item><Typography style={{ fontSize:"35px" ,color:"white",fontWeight:"40px"}}>100</Typography></Grid>
                           <Grid item><Typography mt={3} style={{ fontSize:"12px" ,color:"white",fontWeight:"20px"}}>servings</Typography></Grid>
                            </Grid>
                        </Grid>
                        
                        
                        
                    </Grid>

                    </Card>
                    </Grid>
                    </Grid>
               
                    
                    
                </Card>
            </Grid>
        
        
        
        
        
        <Grid Item>
             <Card  style={{backgroundColor:"#212121",margin:"20px"}}>
                    <CardContent>
                        <Grid container flexDirection="row" justifyContent="space-between">
                            
                            <Grid  xs={6} Item>
                                <CardContent sx={{alignItems:"center",alignSelf:'center',alignContent:"center"}}>
                                <Typography style={{ fontSize:"20px" ,color:"#E1B725"}}>60 servings Left</Typography>
                                </CardContent>
                            </Grid>
                        
                            <Grid mt={2} item xs={6}> 
                            <CardContent sx={{alignItems:"center",alignSelf:'center',alignContent:"center"}}>
                                 <img src={Diet} className='dinning-img' alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                                 </CardContent>
                            </Grid>
                            
                        </Grid>
                    </CardContent>
            </Card>
        </Grid>
           

            <Card  style={{backgroundColor:"#F0E7F5",margin:"20px"}}>
                
                    <Grid container  to="/dashboard/protein" component={RouterLink} sx={{textDecoration:'none'}}justifyContent="space-between" flexDirection={"row"} alignItems="center" style={{padding:"5px"}}>
                     
                     <Grid item xs={8} marginLeft={1}>
                            <Typography variant="body1" component="span" style={proteinStyle}>
                                proteins
                            </Typography>
                        </Grid>
                        <Grid item xs={3}  alignItems="flex-end" sx={{alignItems:"center" ,alignContent:"center",alignText:"center"}} >
                            <Grid  sx={{alignItems:"center" ,alignContent:"center",alignText:"center"}} >
                            <Typography >
                            <img src={Arrowforward} alt="Arrowforward logo" />
                            </Typography>
                            </Grid>

                             
                             
                                </Grid>

                        
                       {/* <Grid item>
                            <Typography variant="body1" component="span" style={totalservingsStyle}>
                        45 Calories/Servings
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" component="span" style={dayservingsStyle}>
                            13/servings/Day
                            </Typography>
    </Grid> */}
                        
                    
                       
                    </Grid>
                    
                    <Grid  container flexDirection="row" spacing={1} >
                    <Grid item xs={4}  >
                            <Grid container     >
                                <Grid item marginLeft={3}>
                                
                                    <Typography  style={{ color: "black" }}>
                                    7 
                                    </Typography>
                                    <Typography  style={{ color: "black" }}>
                                     Calories 
                                    </Typography>
                                    <Typography  style={{ color: "black" }}>
                                     remained
                                    </Typography>
                                
                                
                                
                                
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    
                        <Grid item xs={4}  >
                            
                                
                                    
                                        <img src={ProteinChicken} alt="chicken" />
                                    
                                
                                  
                                       <Typography   style={{ color: "black" }}>
                                         10 calories
                                       </Typography>
                                    
                                    
                                
                            
                        </Grid>
                        
                       <Grid  item xs={4}  >
                                
                                    
                                        <img src={Peas}  alt="peas" />
                                  
                               
                                    <Typography  style={{ color: "black"}}>
                                    50 calories
                                    </Typography>
                                    
                               
                            </Grid>
                     
                    </Grid>
   
               
            </Card>

            
           
           
            <Card style={{backgroundColor:"#F0E7F5",margin:"20px"}} >
            
                    <Grid container  to="/dashboard/protein" component={RouterLink} sx={{textDecoration:'none'}} alignItems="center" style={{padding:"0px"}}>
                     <Grid item xs={9}>
                     <CardContent>
                     <Grid item>
                           
                            <Typography variant="body1" component="span" style={proteinStyle}>
                                Carbohydrates 
                            </Typography>
                            
                        </Grid>

                        <Grid item>
                           
                            <Typography variant="body1" component="span" style={proteinStyle}>
                                fruits 
                            </Typography>
                            
                        </Grid>

                        <Grid item>
                            <Typography variant="body1" component="span" style={totalservingsStyle}>
                        45 Calories/Servings
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" component="span" style={dayservingsStyle}>
                            13/servings/Day
                            </Typography>
                        </Grid>
                        
                        </CardContent>
                        </Grid>    
                        <Grid item xs={2}  alignItems="flex-end"  >
                           <CardContent >
                            <Typography variant="h5" component="span"    style={plusStyle}>
                            <img src={Arrowforward} alt="Arrowforward logo" />
                            </Typography>
                            </CardContent> 
                        </Grid>
                        
                    </Grid>
                    
                    
                
               </Card>

            <Card style={{backgroundColor:"#F0E7F5",margin:"20px"}}  >
                    <Grid container   to="/dashboard/protein" component={RouterLink} sx={{textDecoration:'none'}} alignItems="center" style={{padding:"0px"}}>
                     <Grid item xs={9}>
                     <CardContent>
                     <Grid item>
                           
                            <Typography variant="body1" component="span" style={proteinStyle}>
                                Carbohydrates 
                            </Typography>
                            
                        </Grid>

                        <Grid item>
                           
                            <Typography variant="body1" component="span" style={proteinStyle}>
                                Vegetables
                            </Typography>
                            
                        </Grid>

                        <Grid item>
                            <Typography variant="body1" component="span" style={totalservingsStyle}>
                        45 Calories/Servings
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" component="span" style={dayservingsStyle}>
                            13/servings/Day
                            </Typography>
                        </Grid>
                        
                        </CardContent>
                        </Grid>    
                        <Grid item xs={2}  alignItems="flex-end"  >
                           <CardContent >
                            <Typography variant="h5" component="span"    style={plusStyle}>
                            <img src={Arrowforward} alt="Arrowforward logo" />
                            </Typography>
                            </CardContent> 
                        </Grid>
                        
                    </Grid>
                    
                    
   
               </Card> 


               
            
                    <Card style={{backgroundColor:"#F0E7F5",margin:"20px"}} >
                    <Grid container   alignItems="center" style={{padding:"0px"}}>
                     <Grid item xs={9}>
                     <CardContent>
                    <Grid container justifyContent={"row"}>
                     <Grid item >
                           
                            <Typography variant="body1" component="span" style={proteinStyle}>
                                Carbohydrates 
                            </Typography>
                            
                        </Grid>
                        
                     </Grid>
            

                       <Grid container item flexDirection={"row"}>
                        
                        <CardContent style={{marginTop:-20}}>
                        <Grid item>
                            <Typography variant="body1" component="span" style={totalservingsStyle}>
                        45 Calories/Servings
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5" component="span" style={dayservingsStyle}>
                            13/servings/Day
                            </Typography>
                        </Grid>
                        </CardContent>
                        <Grid item   >
                            
                                
                                    
                                        <img src={ProteinChicken} className='chicken-img' alt="chicken" />
                                    
                                
                                  
                                       <Typography   style={{ color: "black" }}>
                                         10 calories
                                       </Typography>
                                    
                                    
                                
                            
                        </Grid>
                        <Grid item   >
                            
                                
                                    
                                        <img src={ProteinChicken} className='chicken-img' alt="chicken" />
                                    
                                
                                  
                                       <Typography   style={{ color: "black" }}>
                                         10 calories
                                       </Typography>
                                    
                                    
                                
                            
                        </Grid>
                        

                        </Grid>
                        
                        </CardContent>
                        </Grid>    
                        <Grid item xs={2}  alignItems="flex-end"  >
                           <CardContent >
                            <Typography variant="h5" component="span"    style={plusStyle}>
                            <img src={Arrowforward} alt="Arrowforward logo" />
                            </Typography>
                            </CardContent> 
                        </Grid>
                        
                    </Grid>
                    
                    
   
               </Card> 
           
           
         </div>

         
    );
}