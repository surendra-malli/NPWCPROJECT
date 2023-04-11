// @mui
import { Grid, Typography, Select, FormControl, InputLabel } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import MenuItem from '@mui/material/MenuItem';
import Logo from "./pictures/nova.svg";
import Diet from "./pictures/Diet.svg";
import Excercise from "./pictures/excercise.svg";
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
    
    
    <CardContent>
      <Card style={{backgroundColor:"black"}} >
        <CardContent style={{padding:"20px 15px"}}>
          <Grid container flexDirection="row" sx={{justifyContent:'center'}} >
          <div>
          <Typography  color="blue" variant='h5'>
            <div style={{marginLeft:"-15px"}}>
              <div style={{color:"yellow" ,margin: "5px"}}>
                120
              </div>
              <div style={{color:"white",margin :"5px"}}>
                  servings
              </div>
              <div style={{color:"white",margin:"5px"}}>
                recommended
              </div>
            </div>
            </Typography>
          </div>
          <img src={Diet} alt="diet logo" style={{height: "auto", width: "auto"}}/>
            <div>
              <Grid container flexDirection="column"> 
              <Typography  color="blue" variant='h5'>
                <div style={{color:"yellow" ,margin: "5px"}}>60</div>
                <div style={{color:"white",margin :"5px"}}>servings</div>
                <div style={{color:"white",margin:"5px"}}>recommended</div>
              </Typography>                   
              </Grid>  
            </div>    
          </Grid>                   
          </CardContent>
      </Card>
    </CardContent>
    
    
    <CardContent>
    <Card style={{backgroundColor:"black"}} >
        <CardContent style={{padding:"20px 15px"}}>
          <Grid container flexDirection="row" sx={{justifyContent:'center'}}>
          <div>
          <Typography  color="blue" variant='h5'>
            <div style={{marginLeft:"-15px"}}>
              <div style={{color:"yellow" ,margin: "5px"}}>
                20
              </div>
              <div style={{color:"white",margin :"5px"}}>
                excercises
              </div>
              <div style={{color:"white",margin:"5px"}}>
                recommended
              </div>
            </div>
            </Typography>
          </div>
          <img src={Excercise} alt="excercise logo" style={{height: "auto", width: "auto"}}/>
            <div>
              <Grid container flexDirection="column"> 
              <Typography  color="blue" variant='h5'>
                <div style={{color:"yellow" ,margin: "5px"}}>10</div>
                <div style={{color:"white",margin :"5px"}}>excercises</div>
                <div style={{color:"white",margin:"5px"}}>left</div>
              </Typography>                   
              </Grid>  
            </div>    
          </Grid>                   
          </CardContent>

      </Card>
    </CardContent>
  </div>
  );
}
