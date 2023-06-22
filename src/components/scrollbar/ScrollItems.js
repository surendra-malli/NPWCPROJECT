import * as React from 'react';
import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
 // import Typography from 'src/theme/overrides/Typography';
// import Yellowdot from 'src/assets/yellowdot.svg'
import Typography  from '@mui/material/Typography';


const cardstyle={
  fontFamily: 'Inter-Regular',
  color:"#112866",
  fontSize:"12px",
  marginRight:'20px',
  
 
  
};
const dot ={
  color:'yellow',
  width: '10px' ,
  height:'10px',
  borderRadius: '100%',
  backgroundColor:'#FFD338',
  marginRight:'10px'

};
const dot1 ={
  color:'yellow',
  width: '10px' ,
  height:'10px',
  borderRadius: '100%',
  backgroundColor:'#9DD030',
  marginRight:'10px'

};
const dot2 ={
  color:'yellow',
  width: '10px' ,
  height:'10px',
  borderRadius: '100%',
  backgroundColor:'red',
  marginRight:'10px'
  
}





export default function ScrollableTabsButtonPrevent(props) {
  const [value, setValue] = React.useState(0);
   console.log("updated the state of props", props.category);
  const categoryData= props.category;
  //setCategoryData(props.category)
  console.log(categoryData,'----propscategoryData');


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width:"100%" , }}>
      <Tabs
      
        // value={value}
        // onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
       
      

    {
      categoryData?.map(item=>{
          
        return (
          
          <Card sx={{ minWidth: 200, m: 1,p:2,  backgroundColor:'white' , color:"#EBF5FF"}} >
        <Grid container  flexDirection="column">
          <Grid item >
          <Typography style={cardstyle}  sx={{ display: 'flex', alignItems: 'center', mt: 0.3, }} ><div style={dot}></div>  Category: {item.Category}</Typography>
          </Grid>
          <Grid item>
          <Typography style={cardstyle} sx={{ display: 'flex', alignItems: 'center', mt: 0.3, }} ><div style={dot1}></div>Recommended Servings: {item.recommended_servings}</Typography>
          </Grid>
          <Grid item>
          <Typography style={cardstyle} sx={{ display: 'flex', alignItems: 'center', mt: 0.3, }} ><div style={dot2}></div>Total Servings: {item.total_servings}</Typography>
          </Grid>
        </Grid>
        </Card>
        );
      })
    } 

      

      
      
      
      </Tabs>
    </Box>
  );
}