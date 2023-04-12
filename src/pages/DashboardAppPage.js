// @mui
import { Grid, Typography, Select, FormControl, InputLabel } from '@mui/material';


import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import MenuItem from '@mui/material/MenuItem';
import DietPlan from './DietPlan';
import Logo from "./pictures/nova.svg";
import Diet from "./pictures/Diet.svg";
import Exerciselogo from "./pictures/Exerciselogo.svg";
// components

// sections

// ----------------------------------------------------------------------

export default function DashboardAppPage() {

  return (
  <div >
    <img src={Logo} alt="nova logo" style={{height: "auto", width: "250px", marginLeft: "30px"}}/>
    <CardContent>
    <Grid >
      <Card sx={{ minWidth: 275 }} style={{backgroundColor:"#D1A6E7"}}>
        <CardContent >
          <div style={{display:'flex',flexDirection:"row",position:'relative',marginBottom:'1rem'}}>
          <Typography color="black" variant='h5' >
            Hello, Seema
          </Typography>
          <FormControl sx={{ minWidth: 120,position:'absolute',right:0 }} size="small">
          <Select defaultValue="Today">
            <MenuItem value="Today" >Today</MenuItem>
            <MenuItem value="Next Week">Next Week</MenuItem>
            <MenuItem value="Previous Week">Previous Week</MenuItem>
          </Select>
          </FormControl>
          <br/>
          </div>


          <Card sx={{ minWidth: 275 }} style={{backgroundColor:"#8D25C1"}}>
            <Typography color="purple" variant='h4' >
              <div style={{display:'flex',alignContent:'center',justifyContent:'center',alignItems:"center",margin: "10px"}}>
                <span style={{color:"white" ,margin: "5px" }}>
                  15
                </span>
                <span style={{color:"black" ,margin: "5px"}}>
                    March
                </span>
                <span style={{color:"black",margin: "5px"}}>
                  2023
                </span>
              </div>
            </Typography>

          </Card>
          
        </CardContent>
      </Card>
      </Grid>
    </CardContent>
    
    
   


    <Card  sx={{ minWidth: 275 }} style={{backgroundColor:"#212121",margin:"10px"}}>
                    <CardContent   to="/dashboard/dietplan" component={RouterLink} sx={{textDecoration:'none'}}>
                    <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                        <Grid item xs={4} alignItems="center" justifyContent="center">
                               <CardContent>
                                <Typography style={{ marginLeft:'10%', fontSize:"25px" ,color:"#E1B725"}}>
                                  120
                                </Typography>
                                <Typography style={{ fontSize:"10px" ,color:"white"}}>Servings recommended</Typography>
                                </CardContent>
                        </Grid>
                        <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",alignSelf:'center',alignContent:'center',}}>
                        <img src={Diet}  alt="dinning" />
                        </Grid>
                        <Grid item  alignItems="center" justifyContent="center">
                               <CardContent>
                                <Typography style={{ fontSize:"25px" ,color:"#E1B725"}}>
                                  16
                                </Typography>
                                <Typography style={{ fontSize:"10px" ,color:"white"}}>Servings left</Typography>
                                </CardContent>
                        </Grid>
                        
                       
                        
                       
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>
    
            <Card  sx={{ minWidth: 275 }} style={{backgroundColor:"#212121",margin:"10px"}}>
                    <CardContent   to="/dashboard/Exercise" component={RouterLink} sx={{textDecoration:'none'}}>
                    <Grid container flexDirection="row" spacing="1" alignItems="center" justifyContent="center" >
                        <Grid item xs={4} alignItems="center" justifyContent="center">
                               <CardContent>
                                <Typography style={{ marginLeft:'10%', fontSize:"25px" ,color:"#E1B725"}}>
                                  100
                                </Typography>
                                <Typography style={{ fontSize:"10px" ,color:"white"}}>exercise recommended</Typography>
                                </CardContent>
                        </Grid>
                        <Grid item xs={4}  sx={{justifyContent:'center',alignItems:"center",alignSelf:'center',alignContent:'center',}}>
                        <img src={Exerciselogo}  alt="dinning" />
                        </Grid>
                        <Grid item  alignItems="center" justifyContent="center">
                               <CardContent>
                                <Typography style={{ fontSize:"25px" ,color:"#E1B725"}}>
                                  10
                                </Typography>
                                <Typography style={{ fontSize:"10px" ,color:"white"}}>exercise left</Typography>
                                </CardContent>
                        </Grid>
                        
                       
                        
                       
                        
                        
                        
                        
                        
                        </Grid>
                    </CardContent>
            </Card>


    
    
    
  </div>
  );
}
