import { CardContent,Grid, ButtonBase,Typography } from "@mui/material";
import Card from '@mui/material/Card';

import Logo from "./pictures/nova.svg"
// import WaterWalk from "./pictures/Waterwalk.svg"
 // import Lunge from "./pictures/Lunge.svg"
// import Sidestep from "./pictures/Sidestep.svg"
import Poultry from "./pictures/Poultry.svg"
import SideStepping from "./pictures/SideStepping.svg"
import WaterWalking from "./pictures/WaterWalking.svg"
import ForwardLunge from "./pictures/ForwardLunge.svg"

export default function Aerobic() {
    return (
        <div>
            <img src={Logo} alt="nova logo" style={{height: "auto", width: "250px", marginLeft: "30px"}}/>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardContent >
                        <Typography color="#112886" variant='h3'>
                                Aerobic 
                            </Typography>
                            <Typography color="#112886" variant='h3'>
                                Activity
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={6}>
                    <CardContent >
                        <Card sx={{Width: 200,height:"auto"}} style={{backgroundColor:"#E1B725"}}>
                            <Typography variant="h3" style={{textAlign:"center"}}>
                                7
                            </Typography>
                            <Typography variant="h5" style={{textAlign:"center"}}>
                                activities
                            </Typography>
                            <Typography variant="h5" style={{textAlign:"center"}}>
                                remained
                            </Typography>
                        </Card>
                    </CardContent>
                </Grid>
            </Grid>              
            <CardContent>
                <Typography color="#9B54BF">
                    Engaging in Water Aerobics is a great way to stay active while limiting pain associated with arthritis. The water is a great place to get moving while adding resistance and without putting too much pressure on your joints.
                </Typography> 
            </CardContent>
            

            <Card style={{backgroundColor:"#F0E7F5",margin:'1rem',boxShadow: '#c4c4c4', }}>
        <CardContent>
            <Grid container spacing={2} justifyContent='center' alignItems='center' >
                 <Grid item xs={2} md={2}>
                <ButtonBase sx={{ width: "auto", height: "auto" }}>
                    <img src={SideStepping} alt="nova logo" style={{height: "100", width: "100px"}}/>
                </ButtonBase>
                </Grid> 
                <Grid item xs={10} spacing={2} md={10} >
                    <Grid item xs>
                        <div style={{display:'flex'}}>
                            <Typography gutterBottom variant="h5" component="div">
                             Side Stepping
                            </Typography>
                            <Card  sx={{position:'absolute', right:20,borderRadius:1,boxShadow: '#c4c4c4'}} >
                                
                            
                                      <button>+</button>
                             
                               
                            </Card>
                        </div>
                    <Typography variant="body2" gutterBottom>
                    Stand in waist- or chest-high water (near a pool wall for support, if needed). 
                    Take an oversized lunge step in a forward direction, without letting your forward knee go past your toes.
                       Return to start position and repeat with other leg.
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
                    <img src={WaterWalking} alt="nova logo" style={{height: "100", width: "100px"}}/>
                </ButtonBase>
                </Grid> 
                <Grid item xs={10} spacing={2} md={10} >
                    <Grid item xs>
                        <div style={{display:'flex'}}>
                            <Typography gutterBottom variant="h5" component="div">
                            Water Walking
                            </Typography>
                            <Card  sx={{position:'absolute', right:20,borderRadius:1,boxShadow: '#c4c4c4'}} >
                                
                            
                                      <button>+</button>
                                      
        
                                  
                                  

                                
                               
                            </Card>
                        </div>
                    <Typography variant="body2" gutterBottom>
                    Stand in waist- or chest-high water.
                    Walk 10 to 20 steps forward, then walk backward. 
                    Repeat. For added resistance, increase your speed.
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
                    <img src={ForwardLunge} alt="nova logo" style={{height: "100", width: "100px"}}/>
                </ButtonBase>
                </Grid> 
                <Grid item xs={10} spacing={2} md={10} >
                    <Grid item xs>
                        <div style={{display:'flex'}}>
                            <Typography gutterBottom variant="h5" component="div">
                            Forward Lunge
                            </Typography>
                            <Card  sx={{position:'absolute', right:20,borderRadius:1,boxShadow: '#c4c4c4'}} >
                                
                            
                                      <button>+</button>
                                      
        
                                  
                                  

                                
                               
                            </Card>
                        </div>
                    <Typography variant="body2" gutterBottom>
                    Stand in waist- or chest-high water, facing the pool wall.
                    Take sideways steps with your body and toes facing the wall.
                    Take 10 to 20 steps in one direction and then return. Repeat in the other direction.
                    </Typography>
                    
                    </Grid>
                </Grid>
            </Grid>
        </CardContent>
            </Card>
        </div>
    );

}