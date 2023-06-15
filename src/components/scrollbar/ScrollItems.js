import * as React from 'react';
import {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid } from '@mui/material';
 // import Typography from 'src/theme/overrides/Typography';

import Typography  from '@mui/material/Typography';


const cardstyle={
  fontFamily: 'Inter-Regular',
  color:"white",
  fontSize:"12px",
  
 
  
};





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
    <Box sx={{ width:"100%" ,  }}>
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
          
          <Card sx={{ minWidth: 200, m: 1,p:2,  backgroundColor:'purple' , color:"white"}} >
        <Grid container display="flex" flexDirection="column">
          <Grid item>
          <Typography style={cardstyle} mt={0.3} >Category: {item.Category}</Typography>
          </Grid>
          <Grid item>
          <Typography style={cardstyle} mt={0.3} >Recommended Servings: {item.recommended_servings}</Typography>
          </Grid>
          <Grid item>
          <Typography style={cardstyle} mt={0.3} >Total Servings: {item.total_servings}</Typography>
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