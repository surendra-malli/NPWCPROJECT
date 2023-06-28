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
  const[selectedValue,setSelectedValue]=useState({label:valuesD?.selectedUser,status:valuesD?.status})

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
          url: 'https://novapwc.com/api/listallusers',
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

      // const handleChange=(str)=>{
      //   console.log(valuesD,'0000')
      //   console.log(location.pathname)
      //   const selectedValue=estr?.id;

      //   const selectedUser1=dropvalue.find((option) => option.id === selectedValue);
      //       setSelectedUser(selectedUser1.label)
      //       setSelectedValue(str)
      //       console.log(selectedUser1,'[[[[[')
      //       valuesD.selectedUser=selectedUser1.label
            
      //   if(selectedUser1.status==='inactive'){
      //     const objectData =valuesD;
      //     objectData.email_id=selectedUser1.email;
      //     objectData.user_name=selectedUser1.value
      //     objectData.id=selectedUser1.id;
      //     valuesD.id=selectedUser1.id

      //     objectData.pathnamePrevious=[location.pathname]
          
      //     objectData.pathnameCurrent=[location.pathname,0]
      //     const encodedData = encodeURIComponent(JSON.stringify(objectData));
      //     navigate('/dashboardadmin/adminprofile',{state:objectData});

      //       console.log(selectedUser1,'selectedUser1')
      //       onDataChangeuserId(selectedUser1);
      //   }
      //   else{
      //     const objectData =valuesD;
      //     objectData.email_id=selectedUser1.email;
      //     objectData.user_name=selectedUser1.value
      //     objectData.id=selectedUser1.id;
      //     valuesD.id=selectedUser1.id

      //     objectData.pathnamePrevious=[location.pathname]
          
      //     objectData.pathnameCurrent=[location.pathname,0]
      //     const encodedData = encodeURIComponent(JSON.stringify(objectData));
      //     navigate('/dashboardadmin/createinstantexerciseplan',{state:objectData});

      //     onDataChangeuserId(selectedUser1);
      //   }
      //   console.log(selectedUser1,'selectedUser1')

      // }


      const handleChange=(str)=>{
        console.log(valuesD,'0000')
        console.log(location.pathname)
        console.log(str,'lll');
        const selectedValue=str?.id;
       

        const selectedUser1=dropvalue.find((option) => option.id === selectedValue);
            setSelectedUser(selectedUser1?.label)
            setSelectedValue(str)
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
          navigate('/dashboardadmin/createinstantexerciseplan',{state:objectData});

          onDataChangeuserId(selectedUser1);
        }
        console.log(selectedUser1,'selectedUser1')

      }
  


 
  

  return (
    <>
    
     {/* <FormControl fullwidth>
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
    </FormControl> */}
    {/* <InactiveProfile ref={childComponentRef}></InactiveProfile> */}

    <Autocomplete
        // {...defaultProps}
        options={dropvalue}
        value={
          selectedValue.label === ""
            ? { label: "" }
            : { label: selectedValue.label  }
        }
        //id="disable-clearable"
        // getOptionLabel={(option) =>
        //   option.label 
        // }
        label='Select User'
        disableClearable
        //sx={{ width: 300 }}
        onChange={(e,data)=>{
            console.log(data)
            setSelectedUser(data)
            handleChange(data)
        }}
        fullWidth
        renderOption={(props, option) => (
          <Grid  {...props}   >

            <Grid item >
            <Typography style={{color: option?.status==='active'?'green':'red'}}>{option.label}</Typography>
            </Grid>
            {/* <Grid  >
            <Typography style={{color: option?.status==='active'?'green':'red'}} >  { option?.status}</Typography>
            </Grid> */}
          </Grid>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Select User" />
        )}
      />


    </>
    
  );
});

export default Dropdown;
