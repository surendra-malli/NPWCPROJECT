import { Grid, Typography, Select, FormControl, InputLabel } from '@mui/material';
import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Backbutton from "../../assets/Backbutton.svg";

import Userfiggirl from "../../assets/Userfiggirl.svg";
import Userfig from "../../assets/Userfig.svg";

export default function Adminuserlist() {
    return (
        <div>
             
             <Grid container flexDirection="row">
                <Grid  style={{margin:"10px"}} >
                <img src={Backbutton} className='dinning-img' alt="dinning" />

                </Grid>
                <Grid>
                <Typography style={{margin:"10px", fontSize:"20px",fontWeight:"bold"}}>USERS</Typography>
                </Grid>
            
                    
                        
                        
             
             </Grid>
             
             
              

            
              


       
<Card sx={{ minWidth: 275 }} style={{margin:"20px"}}>
                    <CardContent>
                    <Grid container flexDirection="row" >
                        
                        <div>
                        <img src={Userfig} alt="diet logo" style={{height: "auto",borderRadius:"40px", width: "auto"}}/>
                        </div>
                        <div>
                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>Sahib</span>
                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} >
                            @username
                        </Typography>
                        </div>
                       
                        
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>



          

            <Card sx={{ minWidth: 275 }} style={{margin:"20px"}}>
                    <CardContent>
                    <Grid container flexDirection="row" >
                        
                        <div>
                        <img src={Userfiggirl} className='dinning-img' alt="dinning" />
                        </div>
                        <div>
                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>Amreen</span>
                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} justifyContent="flex-center" >
                            @username
                        </Typography>
                        </div>
                       
                        
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>

            








            <Card sx={{ minWidth: 275 }} style={{margin:"20px"}}>
                    <CardContent>
                    <Grid container flexDirection="row" >
                        
                        <div>
                        <img src={Userfig} className='dinning-img' alt="dinning" />
                        </div>
                        <div>
                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>sahib</span>
                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} justifyContent="flex-center" >
                            @username
                        </Typography>
                        </div>
                       
                        
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>




            <Card sx={{ minWidth: 275 }} style={{margin:"20px"}}>
                    <CardContent>
                    <Grid container flexDirection="row" >
                        
                        <div>
                        <img src={Userfiggirl} className='dinning-img' alt="dinning" />
                        </div>
                        <div>
                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>Amreen</span>
                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} justifyContent="flex-center" >
                            @username
                        </Typography>
                        </div>
                       
                        
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>



            <Card sx={{ minWidth: 275 }} style={{margin:"20px"}}>
                    <CardContent>
                    <Grid container flexDirection="row" >
                        
                        <div>
                        <img src={Userfig} className='dinning-img' alt="dinning" />
                        </div>
                        <div>
                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>Asim</span>
                        <Typography style={{ fontSize:"15px" ,color:"black",marginLeft:"10px"}} justifyContent="flex-center" >
                            @username
                        </Typography>
                        </div>
                       
                        
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>
          



    

           






    


        


    





    


    
            


        </div>


    );
}