import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';

const SearchUser = ({getSearch}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Grid container alignItems='center'>
        
      <Grid xs={11} item fullWidth>
      
        <TextField
        onChange={(e)=>{
            console.log(e?.target?.value,'user search 1')
            getSearch(e?.target?.value);
        }}
          variant="outlined"
          placeholder="Search.."
          fullWidth
          disableUnderline
          sx={{
            "& fieldset": { border: 'none' },
          }}
          
          // Add any additional props or styling as needed
        />
      
      </Grid>
      {/* <Grid  item>
      <IconButton onClick={handleIconClick}>
        <SearchIcon />
      </IconButton>
     
      </Grid> */}
      </Grid>
    </>
  );
};

export default SearchUser;