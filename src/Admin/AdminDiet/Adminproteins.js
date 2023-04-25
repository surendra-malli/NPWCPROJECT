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
import Fish from "../../assets/Fish.svg";


export default function Protein() {

   
    


    return (
        <div>
            { <img src={Logo} alt="nova logo" style={{ height: "auto", width: "250px", marginLeft: "30px" }} />}


            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardContent >
                        <Typography  variant='h3'>
                                Proteins 
                            </Typography>

                        <Typography>
                        45 Calories / Servings
                        </Typography>
                        <Typography  >
                        13 Servings / Day
                        </Typography>
                            
                    </CardContent>
                </Grid>
                <Grid item xs={6} >
                    <CardContent >
                        <Card sx={{Width: 200,height:110}} style={{backgroundColor:"#E1B725"}}>
                            <Typography variant="h3" style={{textAlign:"center"}}>
                                7
                            </Typography>
                            <Typography variant="h5" style={{textAlign:"center"}}>
                                serving
                            </Typography>
                            <Typography variant="h5" style={{textAlign:"center"}}>
                                remained 
                            </Typography>
                        </Card>
                    </CardContent>
                </Grid>
            </Grid>







    <CardContent >
        <Card >
            <Typography variant="body1" style={{padding:"30px", color:"#9B54BF"}} >
            Weigh AFTER cooked / 1 serving = 1 cooked oz
            </Typography>
        </Card>
    </CardContent>

           






    <Card style={{backgroundColor:"#F0E7F5",margin:'1rem',boxShadow: '#c4c4c4', }}>
        <CardContent>
            <Grid container spacing={2} justifyContent='center' alignItems='center' >
                 <Grid item xs={2} md={2}>
                <ButtonBase sx={{ width: "auto", height: "auto" }}>
                    <img src={Poultry} alt="nova logo" style={{height: "100", width: "100px"}}/>
                </ButtonBase>
                </Grid> 
                <Grid item xs={10} spacing={2} md={10} >
                    <Grid item xs>
                        <div style={{display:'flex'}}>
                            <Typography gutterBottom variant="h5" component="div">
                            Fish
                            </Typography>
                            
                        </div>
                    <Typography variant="body2" gutterBottom>
                    fresh, canned or frozen, Cod, Flounder, Haddock, Halibut.
                    </Typography>
                    
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>


        
    <Card style={{backgroundColor:"#F0E7F5",margin:'1rem',boxShadow: '#c4c4c4', }}>
        <CardContent>
            <Grid container spacing={2} justifyContent='center' alignItems='center' >
                 <Grid item xs={2} md={2}>
                <ButtonBase sx={{ width: "auto", height: "auto" }}>
                    <img src={Poultry} alt="nova logo" style={{height: "100", width: "100px"}}/>
                </ButtonBase>
                </Grid> 
                <Grid item xs={10} spacing={2} md={10} >
                    <Grid item xs>
                        <div style={{display:'flex'}}>
                            <Typography gutterBottom variant="h5" component="div">
                            Fish
                            </Typography>
                            
                        </div>
                    <Typography variant="body2" gutterBottom>
                    fresh, canned or frozen, Cod, Flounder, Haddock, Halibut.
                    </Typography>
                    
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>

    





    <Card style={{backgroundColor:"#F0E7F5",margin:'1rem',boxShadow: '#c4c4c4', }}>
        <CardContent>
            <Grid container spacing={2} justifyContent='center' alignItems='center' >
                 <Grid item xs={2} md={2}>
                <ButtonBase sx={{ width: "auto", height: "auto" }}>
                    <img src={Poultry} alt="nova logo" style={{height: "100", width: "100px"}}/>
                </ButtonBase>
                </Grid> 
                <Grid item xs={10} spacing={2} md={10} >
                    <Grid item xs>
                        <div style={{display:'flex'}}>
                            <Typography gutterBottom variant="h5" component="div">
                            Fish
                            </Typography>
                            
                        </div>
                    <Typography variant="body2" gutterBottom>
                    fresh, canned or frozen, Cod, Flounder, Haddock, Halibut.
                    </Typography>
                    
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
    </Card>

    


    
            


        </div>


    );
}

