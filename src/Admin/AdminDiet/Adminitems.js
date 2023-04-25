import { Grid, Typography,  Select, FormControl, InputLabel } from '@mui/material';
import * as React from 'react';



import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import ButtonBase from '@mui/material/ButtonBase'

import  { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Logo from "../../assets/nova.svg";
import Poultry from "../../assets/Poultry.svg";
// import Fish from "../../assets/Fish.svg";


export default function Protein() {

   
    


    return (
        <div>
            { <img src={Logo} alt="nova logo" style={{ height: "auto", width: "250px", marginLeft: "30px" }} />}


            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardContent >
                        <Typography  variant='h3'>
                                Items
                            </Typography>

                        
                            
                    </CardContent>
                </Grid>
                
            </Grid>







   

           






    <Card style={{backgroundColor:"#F0E7F5",margin:'1rem',boxShadow: '#c4c4c4', }}>
        <CardContent>
            <Grid container spacing={2} justifyContent='center' alignItems='center' >
                 
            <Grid item xs={10} spacing={2} md={10} >
                    <Grid item xs>
                       
                            <Typography gutterBottom variant="h5" component="div">
                            Carbohydrates Fruits
                            </Typography>
                            
                
                    </Grid>
                </Grid>
                 
                 <Grid item xs={2} md={2}>
                <ButtonBase sx={{ width: "auto", height: "auto" }}>
                    <img src={Poultry} alt="nova logo" style={{height: "100", width: "100px"}}/>
                </ButtonBase>
                </Grid> 
                
            </Grid>
        </CardContent>
    </Card>


        
    <Card style={{backgroundColor:"#F0E7F5",margin:'1rem',boxShadow: '#c4c4c4', }}>
        <CardContent>
            <Grid container spacing={2} justifyContent='center' alignItems='center' >
            <Grid item xs={10} spacing={2} md={10} >
                    <Grid item xs>
                        
                            <Typography gutterBottom variant="h5" component="div">
                            Fats
                            </Typography>
                            
                        
                    
                    
                    </Grid>
                </Grid>
                 
                 <Grid item xs={2} md={2}>
                <ButtonBase sx={{ width: "auto", height: "auto" }}>
                    <img src={Poultry} alt="nova logo" style={{height: "100", width: "100px"}}/>
                </ButtonBase>
                </Grid> 
                
            </Grid>
        </CardContent>
    </Card>




    <Card style={{backgroundColor:"#F0E7F5",margin:'1rem',boxShadow: '#c4c4c4', }}>
        <CardContent>
            <Grid container spacing={2} justifyContent='center' alignItems='center' >
                 
            <Grid item xs={10} spacing={2} md={10} >
                    <Grid item xs>
                       
                            <Typography gutterBottom variant="h5" component="div">
                            Carbohydrates Vegetables
                            </Typography>
                            
                
                    </Grid>
                </Grid>
                 
                 <Grid item xs={2} md={2}>
                <ButtonBase sx={{ width: "auto", height: "auto" }}>
                    <img src={Poultry} alt="nova logo" style={{height: "100", width: "100px"}}/>
                </ButtonBase>
                </Grid> 
                
            </Grid>
        </CardContent>
    </Card>

    





    <Card style={{backgroundColor:"#F0E7F5",margin:'1rem',boxShadow: '#c4c4c4', }}>
        <CardContent>
            <Grid container spacing={2} justifyContent='center' alignItems='center' >
                
                <Grid item xs={10} spacing={2} md={10} >
                    <Grid item xs>
                        
                            <Typography gutterBottom variant="h5" component="div">
                            Proteins
                            </Typography>
                            
                        
                    
                    
                    </Grid>
                </Grid>
                <Grid item xs={2} md={2}>
                <ButtonBase sx={{ width: "auto", height: "auto" }}>
                    <img src={Poultry} alt="nova logo" style={{height: "100", width: "100px"}}/>
                </ButtonBase>
                </Grid> 
            </Grid>
        </CardContent>
    </Card>

    


    
            


        </div>


    );
}

