import { useState, useEffect } from 'react';
// material
import { styled, alpha } from '@mui/material/styles';
import { Input, Slide, Button, IconButton, InputAdornment, ClickAwayListener,TextField } from '@mui/material';
import { Box, Stack, AppBar, Toolbar, } from '@mui/material';
// component
import Iconify from 'src/components/iconify/Iconify';
import useResponsive from '../../hooks/useResponsive';


// ----------------------------------------------------------------------



export default function Searchbar({searchHandler}) {
  // const searchHandler = props;
  const [isOpen, setOpen] = useState(false);
  const[searchData,setSearchData]= useState("");

  const handleOpen = () => {
    console.log('oppened')
   // searchHandler
    setOpen((prev) => !prev);
    console.log("handle open fuunction")
  };
  const isDesktop = useResponsive('up', 'lg');

  const handleClose = () => {
    setOpen(false);
    console.log("handle close fuunction")

  };
  
  useEffect(()=>{
    console.log("search data is ",searchData)
   searchHandler(searchData);
  },[searchData])




  const APPBAR_MOBILE = 64;
  const APPBAR_DESKTOP = 92;

  const SearchbarStyle = styled('div')(({ theme }) => ({
    top: 0,
    left: isDesktop == false ? -70 : -0,
    zIndex: 99,
    width: '100%',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    height: APPBAR_MOBILE,
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
    padding: theme.spacing(0, 3),
    boxShadow: theme.customShadows.z8,
    backgroundColor: `${alpha(theme.palette.background.default, 0.72)}`,
    [theme.breakpoints.up('md')]: {
      height: APPBAR_DESKTOP,
      padding: theme.spacing(0, 5),
    },
  }));

  const DRAWER_WIDTH = 280;


  const RootStyle = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    backdropFilter: 'blur(6px)',
     WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
     backgroundColor: alpha(theme.palette.background.default, 0.72),
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
    },
    left: isDesktop == false ? 70 : null
  }));

  const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
    minHeight: APPBAR_MOBILE,
    [theme.breakpoints.up('lg')]: {
      minHeight: APPBAR_DESKTOP,
      padding: theme.spacing(0, 5),
    },
  }));

  const changeText = (e) => {
   
  
    console.log(e?.target?.value,'----searchDataforme-----');
   
      setSearchData(e?.target?.value)
      console.log(searchData,'----searchDatafromuse-----');
     // searchHandler(searchData)

    
  }



  
  // ----------------------------------------------------------------------
  return (
    <RootStyle>
      <ToolbarStyle>
        <ClickAwayListener onClickAway={handleClose}>
          <div>
            {!isOpen && (
              
               <Input id="outlined-basic" color="common" disabled
                 placeholder='Search...'
                 onClick={handleOpen}
                //  value={searchData}
                //  onChange={searchHandler}
                 sx={{ m: 2, fontWeight: 'fontWeightBold',width:'70vw'}}
                 startAdornment= {
                   <InputAdornment position="start">
                    <IconButton >
                   <Iconify icon="eva:search-fill"  sx={{  width: 20, height: 20 }}  />
                    </IconButton>
                   </InputAdornment>
                 }
             />
            )}

            <Slide direction="down" in={isOpen} mountOnEnter unmountOnExit>
              <SearchbarStyle>
                <Input
                  autoFocus
                  fullWidth
                  onChange={(e) => { setSearchData(e.target.value) }}
                 
                  disableUnderline
                  placeholder="Search…"
                  defaultValue={searchData}
                  startAdornment={
                    <InputAdornment position="start">
                      <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
                    </InputAdornment>
                  }
                  sx={{ margin:5, fontWeight: 'fontWeightBold',width:'70vw'}}
                />
                <Button onClick={(e) => {
                  console.log(e.target.value,'search value');
                  handleClose()
                }} sx={{
                  '&:hover': {
                    backgroundColor: '#C39BD3',
                    color: '#7D3C98'

                  },
                  color: 'white', backgroundColor: '#7D3C98'
                }}>
                  Search
                </Button>
              </SearchbarStyle>
            </Slide>
          </div>
        </ClickAwayListener>
      </ToolbarStyle>
    </RootStyle>
  );
}