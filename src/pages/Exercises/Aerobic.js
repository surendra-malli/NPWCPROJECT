import { CardContent, Grid, ButtonBase, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import  { useState } from 'react';

// import WaterWalk from "./pictures/Waterwalk.svg"
// import Lunge from "./pictures/Lunge.svg"
// import Sidestep from "./pictures/Sidestep.svg"
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Poultry from "../../assets/Poultry.svg";
import SideStepping from "../../assets/SideStepping.svg";
import WaterWalking from "../../assets/WaterWalking.svg";
import ForwardLunge from "../../assets/ForwardLunge.svg";
import Logo from "../../assets/nova.svg";

import  "../styles.css";






const title={
  fontFamily:"Inter-Bold",
  fontSize:"30px",
  color:"#112886" 
};


const maintext = {
  fontFamily: 'Inter-Regular',
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "21px",
  color:"#112866",
  


};

const textparaStyle = {
  fontFamily: 'Inter-Regular',
  padding: "30px",
  color: "#9B54BF"
 
};

const maintitle = {
  fontFamily: 'Inter-Bold',

   // fontFamily: 'poppinsItalic',
  //  src: url('./fonts/Roboto-Regular.ttf') format('truetype'),
   fontStyle: "normal",
   fontWeight: "600",
   fontSize: "20px",
   color:"#112866"
 // fontFamily: "'Poppins', sans-serif",
  // src: `url(${poppinsItalic}) format('truetype')`,
  // lineHeight: "38px", 
};

const regular={
  fontFamily:'Inter-Regular',
  textAlign:"center",
  color:"black"

}



export default function Aerobic() {

    const [count1, setCount1] = useState(0);

    const handleIncrement1 = () => {
      setCount1(count1 + 1);
    };
  
    const handleDecrement1 = () => {
        if (count1 > 0){

            setCount1(count1 - 1);
        }
      
    };





    const [count2, setCount2] = useState(0);

    const handleIncrement2 = () => {
        
      setCount2(count2 + 1);
    };
  
    const handleDecrement2 = () => {
        if (count2 > 0){
            setCount2(count2 - 1);
        }
      
    };

    



    const [count3, setCount3] = useState(0);

    const handleIncrement3 = () => {
      setCount3(count3 + 1);
    };
  
    const handleDecrement3 = () => {
        if (count3 > 0){
            setCount3(count3 - 1);
        }
      
    };





  return (
    <div>
      <img
        src={Logo}
        alt="nova logo"
        style={{ height: "auto", width: "250px", marginLeft: "30px" }}
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CardContent>
            <Typography x variant="h3" style={title}>
              Aerobic Activity
            </Typography>
            
          </CardContent>
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Card sx={{ Width: 200, height: "auto" }} style={{ backgroundColor: "#E1B725" }}>
              <Typography variant="h3" style={regular}>
                7
              </Typography>
              <Typography variant="h5" style={regular}>
                activities
              </Typography>
              <Typography variant="h5" style={regular}>
                remained
              </Typography>
            </Card>
          </CardContent>
        </Grid>
      </Grid>

      <Card style={{ margin: "1rem"}}>
        <Typography  style={textparaStyle}>
          Engaging in Water Aerobics is a great way to stay active while
          limiting pain associated with arthritis.The water is a great place to
          get moving while adding resistance and without putting too much
          pressure on your joints.
        </Typography>
      </Card>

      
      <Card style={{backgroundColor: "#F0E7F5", margin: "1rem", boxShadow: "#c4c4c4", }}>
        <CardContent>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={2} md={2}>
              <ButtonBase sx={{ width: "auto", height: "auto" }}>
                <img src={SideStepping} alt="nova logo" style={{ height: "100", width: "100px" }} />
              </ButtonBase>
            </Grid>
            <Grid item xs={10} spacing={2} md={10}>
            <Grid item >
                  <Grid container flexDirection={"row"}>
                   <Grid item xs={8}>
                  <Typography gutterBottom variant="h5" component="div" style={maintitle}>
                    Forward Lunge
                  </Typography>
                  </Grid>
                  <Grid item xs={4} >
                  <Card  sx={{position:'absolute', right:10,borderRadius:1,boxShadow: '#c4c4c4'}} >
                                
                            
                                <IconButton onClick={handleDecrement1}>
                                <RemoveIcon />
                                 </IconButton>
                                 {count1}
                                 <IconButton onClick={handleIncrement1}>
                                 <AddIcon />
                                 </IconButton>
                                
  
                            
                            

                          
                         
                      </Card>
                      </Grid>  

                  </Grid>     
                
                <Typography variant="body2" mt={1} gutterBottom style={maintext}>
                  Stand in waist - or chest - high water, facing the pool
                  wall.Take sideways steps with your body and toes facing the
                  wall.Take 10 to 20 steps in one direction and then return
                  .Repeat in the other direction.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      <Card style={{ backgroundColor: "#F0E7F5", margin: "1rem", boxShadow: "#c4c4c4", }}>
        <CardContent>
          <Grid container  spacing={2}  justifyContent="center" alignItems="center" >
            <Grid item xs={2} md={2}>
              <ButtonBase sx={{ width: "auto", height: "auto" }}>
                <img src={WaterWalking} alt="nova logo" style={{ height: "100", width: "100px" }}/>
              </ButtonBase>
            </Grid>
            <Grid item xs={10} spacing={2} md={10}>
               <Grid item >
                
                  <Grid container spacing={1} flexDirection={"row"}>
                   <Grid item   xs={8}>
                  <Typography gutterBottom variant="h5"    style={maintitle}>
                    Forward Lunge
                  </Typography>
                  </Grid>
                  <Grid item xs={4}  >
                  <Card   sx={{position:'absolute', right:10,  borderRadius:1,boxShadow: '#c4c4c4'}} >
                                
                              
                                <IconButton onClick={handleDecrement2}>
                                <RemoveIcon />
                                 </IconButton>
                                 {count2}
                                 <IconButton onClick={handleIncrement2}>
                                 <AddIcon />
                                 </IconButton>
                            
                          
                         
                      </Card>
                      </Grid>  

                  </Grid>     
                
                <Typography variant="body2" mt={1} gutterBottom style={maintext}>
                  Stand in waist - or chest - high water, facing the pool
                  wall.Take sideways steps with your body and toes facing the
                  wall.Take 10 to 20 steps in one direction and then return
                  .Repeat in the other direction.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>




      <Card style={{backgroundColor: "#F0E7F5", margin: "1rem", boxShadow: "#c4c4c4"}}>
        <CardContent>
          <Grid container spacing={2} justifyContent="center" alignItems="center" >
            <Grid item xs={2} md={2}>
              <ButtonBase sx={{ width: "auto", height: "auto" }}>
                <img src={ForwardLunge} alt="nova logo" style={{ height: "100", width: "100px" }} />
              </ButtonBase>
            </Grid>
            <Grid item xs={10} spacing={2} md={10}>
              <Grid item >
                  <Grid container  flexDirection={"row"}>
                   <Grid item xs={8}>
                  <Typography gutterBottom variant="h5" component="div" style={maintitle}>
                    Step Walking
                  </Typography>
                  </Grid>
                  <Grid item xs={4}  >
                  <Card  sx={{position:'absolute', right:10,borderRadius:1,boxShadow: '#c4c4c4'}} >
                                
                            
                                <IconButton onClick={handleDecrement3}>
                                <RemoveIcon />
                                 </IconButton>
                                 {count3}
                                 <IconButton onClick={handleIncrement3}>
                                 <AddIcon />
                                 </IconButton>
                                
  
                            
                            

                          
                         
                      </Card>
                      </Grid>  

                  </Grid>     
                
                <Typography variant="body2" mt={1} gutterBottom style={maintext}>
                  Stand in waist - or chest - high water, facing the pool
                  wall.Take sideways steps with your body and toes facing the
                  wall.Take 10 to 20 steps in one direction and then return
                  .Repeat in the other direction.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      



    
    </div>
  );
}
