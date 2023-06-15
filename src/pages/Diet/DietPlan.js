import {React, useEffect, useState }from 'react';

// import '../css/DietPlan.css';

import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import {   Select, FormControl, InputLabel } from '@mui/material';
import Card from '@mui/material/Card';
import axios from 'axios';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';

import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import { MarginOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';


 // import { makeStyles } from '@material-ui/core/styles';

// import CardMedia from '@material-ui/core/CardMedia';
// import Poultry from "../pictures/Poultry.svg";
import Logo from "../../assets/nova.svg";
import Diet from "../../assets/Diet.svg";
import Peas from "../../assets/Peas.svg";
import Arrowforward from "../../assets/Arrowforward.svg";
import ProteinChicken from "../../assets/ProteinChicken.svg"

// import companyimage from '../images/CompanyName.png';

// import chicken from '../images/chicken.png';

// import peas from '../images/peas.png'

// import dinning from '../images/dinningicon.png';

import  "../styles.css";


const title={
    
    fontFamily:"Inter-Bold",
    fontSize:"30px" ,
    color:"#112866",
};
 const caloriesremained={
    fontFamily:"Inter-Regular",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    color:"#112866",
 };

 const exercise={
    fontFamily:"Inter-Regular",
    fontSize:"12px" ,
    color:"white",
    fontWeight:"20px",

 }
 

const plusStyle = {
    width: "34px",
    height: "26px",
    backGround: "#FFFFFF",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "7px"
   
  };
  const proteinStyle={
    fontFamily: 'Inter-SemiBold',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "18px",
    // lineHeight: "38px",

    color: "#112886",

   
  };
  const totalservingsStyle={
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    // lineHeight: "15px",
    color:"#112866",
    // color: "#000000"
  };
  const day={
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize:"30px",
    lineHeight: "15px",
    color:"white",
    marginLeft:'1'

  };

const month={
    fontFamily: 'Inter-Regular',
    fontSize:"15px" ,
    
    marginTop:"10px",
    alignSelf:"center",
    color:"#112866",
}

const year={
    fontFamily: 'Inter-Regular',
    fontSize:"15px" ,
    
    marginBottom:"10px",
    color:"#112866",
};

const caloriesremainedNo={
    color:"#112866",
    fontSize:"30px"
}

  const dayservingsStyle={
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "12px",
    lineHeight: "15px",
    color:"#112866",
       
  };

  const maincardStyle={
    backgroundColor:"#F0E7F5",
    margin:"10px"

  };
  const todaysgoal={
    fontFamily:'Inter-Regular',
    fontSize:"15px" ,
    
   // marginLeft:"0px",
    color:"#112866",
  };

  const servingleft={
    fontFamily:'Inter-Regular',

    fontSize:"20px" ,
    color:"#E1B725"
  };
  const regular={
    fontFamily:'Inter-Regular',
    color:"#112866"
  }



export default function DietPlan(){



    const [count, setCount] = useState(0);

        useEffect(() => {
      getData()
    },[]);
   

    const getData=()=>{
        axios.get('')
        .then(response => {
        setCount(response.data)
        //   console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
      
     
    return (
        
        <div className='dietplan-container'>
            <CardContent className='dietplan-companyname'>
                <img src={Logo} alt="loading" className='dietplan-companyname-image'/>
                
            </CardContent>
            
           
            <Grid container   style={{display:'flex',flexDirection:"row",position:'relative'}}>
               <Grid item xs={6}>
               <CardContent >
                         <Typography  variant='h5' style={title} >
                              Diet plan
                          </Typography>    

               </CardContent>
               </Grid>
               

         

            <Grid  item xs={6} mt={1} >
              <CardContent  >
                      <FormControl  sx={{ position:'absolute',right:6 }} size="small">
                     <Select sx={{backgroundColor:"white"}} defaultValue="Today">
                     <MenuItem value="Today"  >Today</MenuItem>
                     <MenuItem value="Next Week">Next Week</MenuItem>
                     <MenuItem value="Previous Week">Previous Week</MenuItem>
                     </Select>
                     </FormControl>
                 <br/>
                
              </CardContent>
              </Grid>
                   

           
         
          
          </Grid>

         
            
        
          
            
          
        
            <Grid>
                <Card  style={{backgroundColor:"#D1A6E7",margin:"10px"}}>
                    <Grid container  item flexDirection={'row'} alignItems="center"  >
                      <Grid item xs={6}> 
                    <Card  sx={{minHeight:80}} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                        <Grid container mt={1} justifyContent="center" alignItems="center" item flexDirection="row" >
                        
                           <Grid item mt={1.5} >
                            
                           <Typography variant="body1" component="span" style={day} >
                                            15
                                    </Typography>
                            </Grid> 
                            <Grid item>
                                <Grid  container flexDirection="column"  style={{backgroundColor:"#8D25C1",margin:"10px"}} >
                                    <Grid item>
                                        <Typography variant="h5" component="span" style={month}>
                                                March
                                        </Typography>
                                    </Grid>
                                
                                    <Grid item>
                                        <Typography  variant="h5" component="span" style={year}>
                                                2023
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                           
                            
                        </Grid>
                    </Card>
                    </Grid> 

                    <Grid item xs={6}>
                    <Card  sx={{minHeight:80}} style={{backgroundColor:"#8D25C1",margin:"10px"}}>
                    <Grid container  justifyContent="center" alignItems="center" flexDirection="column" >
                        
                        <Grid item mt={1}>
                        <Typography  style={todaysgoal}>Today's Goal</Typography>
                        </Grid>
                        <Grid item>

                       
                        <Grid  container flexDirection="row">
                           <Grid item ><Typography style={{ fontSize:"35px" ,color:"white",fontWeight:"40px"}}>20</Typography></Grid>
                           <Grid item><Typography mt={3}  ml={0.5} style={exercise}>Exercise</Typography></Grid>
                            </Grid>
                        </Grid>
                        
                        
                        
                    </Grid>

                    </Card>
                    </Grid>


                    </Grid>
                    
                    
                </Card>
            </Grid>  
        
         
                
            
        
        
        
            
        
           

            
            <Card  style={{backgroundColor:"#212121",margin:"10px"}} >
                    <Grid container    sx={{textDecoration:'none'}} alignItems="center" >
                    <Grid item xs={8} alignItems="flex-end"  >
                        <Grid item  container justifyContent="center" alignItems="center">
                        <CardContent sx={{alignItems:"center",alignSelf:'center',alignContent:"center"}}>
                                <Typography variant="body1" component="span"   style={servingleft}>
                                    60 servings left
                                </Typography>
                                 </CardContent>
                        </Grid>
                           
                        </Grid>

                     
                         
                       

                        <Grid item xs={4} alignItems="flex-end"  >
                        <Grid item  container justifyContent="center" alignItems="center">
                        <CardContent sx={{alignItems:"center",alignSelf:'center',alignContent:"center"}}>
                                 <img src={Diet} className='dinning-img' alt="dinning" style={{display: 'block', margin: 'auto'}}/>
                                 </CardContent>
                        </Grid>
                           
                        </Grid>
                        
                    </Grid>
                    
                    
   
               </Card> 
            
           
            <Card style={maincardStyle} >
                    
                    <CardContent  >
                     <Grid  container flexDirection={"column"} item  to="/dashboard/protein" component={RouterLink}  sx={{textDecoration:'none'}}>
                    <Grid container item   spacing={1} justifyContent={"row"}>
                     <Grid item xs={6}>
                           
                            <Typography variant="body1" component="span" style={proteinStyle}>
                                Proteins
                            </Typography>
                            
                        </Grid>
                        <Grid item  container justifyContent="center" alignItems="center"  xs={3}>

                        <img src={ProteinChicken}  alt="chicken" />

                        </Grid>
                        <Grid item xs={3} container justifyContent="center" alignItems="center">

                        <img src={ProteinChicken}  alt="chicken" />

                        </Grid>
                     </Grid>
            
                   

                     <Grid container  justifyContent={"row"}  spacing={1}>
                     <Grid container item xs={6} flex-direction={'row'}>
                            <Grid item    >
                            <Typography  variant="body1" sx={caloriesremainedNo}>
                                {count}   
                            </Typography>
                            </Grid>
                            <Grid item mb={0.7}  flexDirection={"column"} alignSelf={"flex-end"}>
                            <Typography style={caloriesremained} >
                                calories remained 
                            </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} container justifyContent="center" alignItems="center"  >

                        <Typography style={totalservingsStyle} > 
                            10 Calories
                        </Typography>

                        </Grid>
                        <Grid item xs={3} container justifyContent="center" alignItems="center" >
                        <Typography style={totalservingsStyle}>
                            8 Calories
                        </Typography>

                      

                        </Grid>
                     </Grid>


                     </Grid> 
                       
                        
                        
                       
                     </CardContent>
                        
                    
                    
                    
   
               </Card> 
           
           

            <Card style={maincardStyle}  >
                    <CardContent to="/dashboard/protein" component={RouterLink} sx={{textDecoration:'none'}}>
                    <Grid container  spacing={1} margin="10px" alignItems="center">
                     <Grid item xs={6} >
                     
                     <Grid item  alignSelf={'center'}>
                           
                            <Typography variant="body1"  component="span" style={proteinStyle}>
                                Carbohydrates vegetables
                            </Typography> 
                            
                        </Grid>

                        
                       
                        
                       
                        </Grid>    
                        <Grid item xs={5} margin={1}    >
                        
                        <Grid item container container justifyContent="center" alignItems="center" >
                            <Typography alignContent="center" variant="body1" component="span" style={totalservingsStyle}>
                             45 Calories/Servings
                            </Typography>
                            
                            
                        </Grid>
                        <Grid item   container justifyContent="center" alignItems="center"  >
                             <Typography alignContent="center" variant="body1" component="span" style={totalservingsStyle} >
                                 13/servings/Day
                            </Typography>
                        </Grid> 
                        
                          
                           
                        </Grid>
                        
                    </Grid>
                    </CardContent>
                    
                    
   
               </Card> 

               <Card style={maincardStyle}  >
                    <CardContent to="/dashboard/protein" component={RouterLink} sx={{textDecoration:'none'}}>
                    <Grid container  spacing={1} margin="10px" alignItems="center">
                     <Grid item xs={6} >
                     
                     <Grid item  alignSelf={'center'}>
                           
                            <Typography variant="body1" Wrap component="span" style={proteinStyle}>
                                Carbohydrates Fruits
                            </Typography> 
                            
                        </Grid>

                        
                       
                        
                       
                        </Grid>    
                        <Grid item xs={5} margin={1}    >
                        
                        <Grid item container container justifyContent="center" alignItems="center" >
                            <Typography alignContent="center" variant="body1" component="span" style={totalservingsStyle}>
                             45 Calories/Servings
                            </Typography>
                            
                            
                        </Grid>
                        <Grid item   container justifyContent="center" alignItems="center"  >
                             <Typography alignContent="center" variant="body1" component="span" style={totalservingsStyle} >
                                 13/servings/Day
                            </Typography>
                        </Grid> 
                        
                          
                           
                        </Grid>
                        
                    </Grid>
                    </CardContent>
                    
                    
   
               </Card>    

                

                

            {/*   <Card style={maincardStyle}  >
                    <CardContent to="/dashboard/protein" component={RouterLink} sx={{textDecoration:'none'}}>
                    <Grid container    alignItems="center" >
                     <Grid item xs={8}>
                     <CardContent>
                     <Grid item alignSelf={'center'}>
                           
                            <Typography variant="body1" component="span"  style={proteinStyle}>
                                Carbohydrates veg..
                            </Typography> 
                             
                        </Grid>

                        
                       
                        
                        </CardContent>
                        </Grid>    
                        <Grid item xs={3}  alignItems="flex-end"  >
                        <Grid item  container justifyContent="center" alignItems="center">
                            <Typography alignContent="center" variant="body1" component="span" style={totalservingsStyle}>
                               45 Calories/Servings
                            </Typography>
                            
                             
                        </Grid>
                        <Grid item container justifyContent="center"  >
                             <Typography alignContent="center" variant="body1" component="span" style={totalservingsStyle} >
                                 13/servings/Day
                            </Typography>
                        </Grid> 
                           
                        </Grid>
                        
                    </Grid>
                    </CardContent>
                    
                    
   
    </Card>
    
    
    
    */}

     {/*   <card style={{backgroundColor:"#212121",margin:"10px"}}> 
            
               <Grid container to="/dashboard/protein" component={RouterLink} sx={{textDecoration:'none'}} backgroundColor="#F0E7F5" borderRadius={3} spacing={1} margin="10px" alignItems="center">
                    
                     <Grid item xs={7}  >
                     
                     
                           
                            <Typography variant="body1"  component="span" style={proteinStyle}>
                                Carbohydrates Fruits
                            </Typography> 
                            
                      

                        
                       
                        
                       
                        </Grid>    
                        <Grid item xs={4} margin={1} ml={1} alignItems={"flex-left"}  >
                         
                        
                            
                            <Typography alignContent="center"   variant="body1" component="span" style={totalservingsStyle}>
                             45 Calories/Servings 
                            </Typography>
                            
                        
                            <br />
                             <Typography alignContent="center" variant="body1" component="span" style={totalservingsStyle} >
                                 13/servings/Day
                            </Typography>
                        
                        
                          
                           
                        </Grid>
                         
                        
                    </Grid> 

                          
        </card>    */}           
      {/* <Card style={maincardStyle}  >
                    <CardContent to="/dashboard/protein" component={RouterLink} sx={{textDecoration:'none'}}>
                    <Grid container  spacing={1} margin="10px" alignItems="center">
                     <Grid item xs={6} >
                     
                     
                           
                            <Typography variant="body1"  component="span" style={proteinStyle}>
                                Carbohydrates Fruits
                            </Typography> 
                            
                        
                        
                       
                        
                       
                        </Grid>    
                        <Grid item xs={5}  container justifyContent="center" alignItems="center"  margin={1}  >
                         
                        
                            
                            <Typography alignContent="center"    variant="body1" component="span" style={totalservingsStyle}>
                             45 Calories/Servings  <br /> 13/servings/Day
                            </Typography>
                            
                           <br />
                        
                       
                        
                          
                           
                        </Grid>
                        
                    </Grid>
                    </CardContent>
                    
                    
   
    </Card> */}
               

               
            
                 
           
         </div>

         
    );
}