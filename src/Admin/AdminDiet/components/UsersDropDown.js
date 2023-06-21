import * as React from 'react';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import {useState,useEffect,useRef} from 'react'

import TextField from '@mui/material/TextField';
import axios from 'axios';
import { FormControl,InputLabel,Select,MenuItem, Grid,Typography,Card } from '@mui/material';
import InactiveProfile from './InactiveProfile';
import { useLocation,useNavigate } from 'react-router-dom';

const users = [
  { id: 1, name: 'John Doe', status: 'Active' },
  { id: 2, name: 'Jane Smith', status: 'Inactive' },
  { id: 3, name: 'Mike Johnson', status: 'Active' },
  // Add more user objects as needed
];





const Dropdown =React.forwardRef(({onDataChangeuserId,valuesD}, ref,props) => {
   const location=useLocation();
   const navigate=useNavigate();
    const [dropvalue,setDropValue]= useState([])
    const [selectedUser,setSelectedUser]=useState(valuesD?.selectedUser)
    const childComponentRef = useRef(null);
    const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};



    useEffect(()=>{
        dataHit()
      },[])
     
      const dataHit =()=>{
        let config = {
          method: 'GET',
          maxBodyLength: Infinity,
          url: 'https://aipse.in/api/listallusers',
          headers: { }
        };
        
        axios.request(config)
        .then((response) => {
          console.log(response.data?.data,'response.data?.data?')
          const datass = response.data?.data?.map(itm=>{
              // console.log(itm,"<--qwewqeqw")
            return {label: itm?.user_name, value: itm?.user_name,status:itm?.status,id:itm?.id,email:itm?.email_id}
          })
          setDropValue(datass)
        })
        .catch((error) => {
          console.log(error);
        });
      }

      //console.log(dropvalue,'dropvalues')

      const handleChange=(e)=>{
        console.log(valuesD,'0000')
        console.log(location.pathname)
        const selectedValue=e?.target?.value;

        const selectedUser1=dropvalue.find((option) => option.id === selectedValue);
            setSelectedUser(selectedUser1.label)
            console.log(selectedUser1,'[[[[[')
            valuesD.selectedUser=selectedUser1.label
            
        if(selectedUser1.status==='inactive'){
          const objectData =valuesD;
          objectData.email_id=selectedUser1.email;
          objectData.user_name=selectedUser1.value
          objectData.id=selectedUser1.id;
          valuesD.id=selectedUser1.id

          objectData.pathnamePrevious=[location.pathname]
          
          objectData.pathnameCurrent=[location.pathname,0]
          const encodedData = encodeURIComponent(JSON.stringify(objectData));
          navigate('/dashboardadmin/adminprofile',{state:objectData});

            console.log(selectedUser1,'selectedUser1')
            onDataChangeuserId(selectedUser1);
        }
        else{
          const objectData =valuesD;
          objectData.email_id=selectedUser1.email;
          objectData.user_name=selectedUser1.value
          objectData.id=selectedUser1.id;
          valuesD.id=selectedUser1.id

          objectData.pathnamePrevious=[location.pathname]
          
          objectData.pathnameCurrent=[location.pathname,0]
          const encodedData = encodeURIComponent(JSON.stringify(objectData));
          navigate('/dashboardadmin/createinstandietplan',{state:objectData});

          onDataChangeuserId(selectedUser1);
        }
        console.log(selectedUser1,'selectedUser1')

      }

  


 
  

  return (
    <>
    
     <FormControl fullwidth>
      <InputLabel id="select-label">Select User</InputLabel>
      <Select MenuProps={MenuProps}
        
        label="Select User"
        //id="select"
        value={selectedUser}
        onChange={(e)=>handleChange(e)}
       
      >
       { dropvalue?.map(item=>{
        return (
          
            <MenuItem value={item?.id}>

              <Grid container display='flex'flexDirection='row' justifyContent='space-between'>
                  <Grid item>
                    <Typography >{item?.label}</Typography>
                  </Grid>
                    <Grid item>
                    <Typography style={{color: item?.status==='active'?'green':'red'}} > {item?.status}</Typography>

                    </Grid>
                    

              </Grid>
              
              
            
            
            </MenuItem>
            
        )
        })}

      {selectedUser && (
              <MenuItem value={selectedUser} disabled>
               {selectedUser}
              </MenuItem>
            )}
       
      </Select>
    </FormControl>
    {/* <InactiveProfile ref={childComponentRef}></InactiveProfile> */}


    </>
    
  );
});

export default Dropdown;
