import { Grid, Typography, Box,Stack, IconButton, Container,Button,Chip, } from '@mui/material';
import * as React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import  { forwardRef, useImperativeHandle } from "react";
import {useState,useEffect} from 'react';
import Card from '@mui/material/Card';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Backbutton from "../../assets/Backbutton.svg";
import Page from 'src/components/Page';
import Userfig from "../../assets/Userfig.svg";
import Iconify from 'src/components/iconify/Iconify';
import { Link } from 'react-router-dom';
import Searchbar from 'src/layouts/dashboard/Searchbar';
import {Pagination} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Avatar from "src/assets/Frame.png"
import Logo from 'src/assets/nova.svg'
import SearchUser from 'src/layouts/dashboard/nav/SearchUser';
import OnlineStatus from 'src/pages/OnlineStatus';






const pageheading={
    fontFamily:"Inter-Bold",
    fontWeight: "bold",
    fontSize: "30px",
    lineHeight: "30px",
    color: "#112866"
  };
  
  const pageWords={
    fontFamily:"Inter-Bold",
    
    fontSize: "15px",
    lineHeight: "30px",
    color: "#112866"
  };
  const chips={
    fontFamily:"Inter-Regular",
    fontWeight: "bold",
  }
 const Adminuserlist=forwardRef((props, ref) =>{

    const navigate =useNavigate();
    const location = useLocation();
    
    //const encodedData = new URLSearchParams(location.search).get('data');
      const objectData = location?.state;
  console.log(objectData,'offline navigationnn')
    const [data,setData] = useState(objectData);
    console.log(objectData,'objectData')
    const [loading, setLoading] = useState(false)
    const [searchTitle, setSearchTitle] = useState("");
    const [usersData,setUsersData]=useState([]);
    const [usersDataOrginal,setUsersDataOrginal]=useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    
    const [totalCountOfUser,setTotalCountOfUsers]=useState(0);
    const [totalCountOfActiveUser,setTotalCountOfactiveUsers]=useState(0);
    const [totalCountOfInActiveUser,setTotalCountOfInActiveUsers]=useState(0);
    const [status,setStatus]=useState(objectData?.userStatus);
    const [displayUser,setDisplayUser]=useState('Total Users');
    const [displayNumber,setDisplayNumber]=useState('0');
    const [selectedUsers,setSelectedUsers]=useState('0');
    const [message,setMessage]=useState("");

    const changeName = (i)=>{
      const str2 = i.charAt(0).toUpperCase() + i.slice(1);
      // console.log(str2,'---upper case')
      return str2
      
      }
      const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    var userStatus='all'
    //pagination
   

    useImperativeHandle(ref, () => ({
      log() {
        console.log("child function");
      }
    }));

 
  
  
    useEffect(()=>{
      if(typeof (str) ==='undefined') {
        console.log('from back');
      }
      window.scrollTo(0, 0);
      
       apiHit()
    },[currentPage,searchTitle]);

    useEffect(()=>{
      
      if(status==='all'){
        setDisplayUser('Total Users')
      }
      else if(status==='active'){
        setDisplayUser('Total Active Users')
      }
      else{
        setDisplayUser('Total Inactive Users')
      }

      apiHit();
      setCurrentPage(1)
      console.log(currentPage,'currentpage')
      //setSearchTitle("")
      
      //filterItems(userStatus)
},[status]);
useEffect(()=>{
  console.log(selectedUsers,'inside use effect for users and pages')
  const temp=Math.ceil(selectedUsers/10);
  setTotalPages(temp)
console.log("inside use effect for users and pages",totalCountOfUser,totalPages,temp)
 },[totalPages])

useEffect(()=>{
  //console.log(selectedUsers,'inside use effect for users and pages')
  const temp=Math.ceil(selectedUsers/10);
  setTotalPages(temp)
//console.log("inside use effect for users and pages",totalCountOfUser,totalPages,temp)
 },[selectedUsers])

    const filterItems = (status) => {
      var arr;
  if (status === "all") {
    arr= usersDataOrginal.filter(item =>
      item.user_name.toLowerCase().includes(searchTitle.toLowerCase())
    );
  } else {
    arr= items.filter(item =>
      item.status === userStatus && item.user_name.toLowerCase().includes(searchTitle.toLowerCase())
    );
  }

  console.log(arr,'from searcg filter',searchTitle,status)

  setUsersData(arr);
};

// const filteredItems = filterItems(currentStatus);
const selectedProfileCalled=(yourData)=>{
  console.log(yourData,'----yourData');
  const objectData = yourData;
  objectData.pathnameCurrent=[location.pathname,0];
  objectData.pathnamePrevious=[location.pathname];
  //console.group(location.pathname,'00000')
const encodedData = encodeURIComponent(JSON.stringify(objectData));
objectData.userStatus='all'
  //from=location.pathname;
  
  navigate('/dashboardadmin/adminprofile',{state:objectData});
}


    
    
      //https://novapwc.com/api/searchUser?name=&page=1&count=100
      //`https://novapwc.com/api/searchUser?name=${searchTitle}&page=${page}&count=6`,

    const apiHit=async()=>{
        
        console.log(`https://novapwc.com/api/searchUser?name=${searchTitle}&page=${currentPage}&count=10&status=${status}`);
       let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url:`https://novapwc.com/api/searchUser?name=${searchTitle}&page=${currentPage}&count=10&status=${status}`,
            headers: {'Content-Type': 'application/json' }
          };
          
        axios(config)
          .then((response) => {
            // console.log(response)
            // setUsersData(response.data.data)
            setTotalCountOfUsers(response.data.totalCountOfUser)
            console.log(response.data.totalCountOfUser,'totalcountofusersintiall')
            setTotalCountOfactiveUsers(response.data.totalCountOfActiveUser)
            setTotalCountOfInActiveUsers(response.data.totalCountOfInactiveUser);
            setDisplayNumber(response.data.totalCountOfUser);
            
            console.log(response.data,'-0310')
            setMessage(response.data.Message);
            console.log(message,'message');
            
            setUsersDataOrginal(response.data.data);
            setUsersData(response?.data?.data)
            //setUsersData(response.data.data);

              var arr;
              if (status === "all" || typeof (status) ==='undefined') {
                setSelectedUsers(response.data.totalCountOfUser);
                
                  
                setDisplayNumber(response.data.totalCountOfUser);
                arr= response.data.data.filter(item =>
                  item.user_name.toLowerCase().includes(searchTitle.toLowerCase())
                );
              } else {
                // const temp=await response.data.totalCountOfActiveUser;
                setSelectedUsers(status==='active'?response.data.totalCountOfActiveUser : response.data.totalCountOfInactiveUser)
                //setSelectedUsers(temp);
                console.log(selectedUsers,'selectedUsers');
                setDisplayNumber(status==='active'?response.data.totalCountOfActiveUser : response.data.totalCountOfInactiveUser);
                arr= response.data.data.filter(item =>
                  item.status === status && item.user_name.toLowerCase().includes(searchTitle.toLowerCase())
                );
              }

              //   console.log(arr,'from searcg filter',searchTitle,status)

                // setUsersData(arr);

               
                
           
          })
          .catch((error) => {
            console.log(error);
          });
    }

     function searchHandler(str){
        // console.log(searchTitle,'------searchTitle-----');
        setSearchTitle(str);
        setCurrentPage(1);
    }
    function pageChangeHandler(event, pageNumber = 1){
        console.log(pageNumber,'pagination')
        setCurrentPage(pageNumber);

    }

    const goBack=()=>{
      navigate('/dashboardadmin/adminuser')
    }
    
  
    
    return (
        
            <Page  title="Dashboard: Admin">
              <OnlineStatus></OnlineStatus>

            {/* <Searchbar getSearch={(e)=>{searchHandler(e);
            }}  id="search-bar" sx={{height:"100px"}}/> */}

          <Grid container justifyContent='space-between' alignItems='center'  p={1}>
            <Grid  item xs={6} sm={6} md={6}>
           
           
            <img
          src={Logo}
          
          alt="nova logo"
          style={{ height: "auto", cursor:'pointer',width:'250px' }}
          onClick={()=>{navigate('/dashboardadmin/adminuser')}}
        />
        
        </Grid>
        <Grid item xs={6} >
          <Stack>
         <SearchUser getSearch={(e)=>{searchHandler(e);
            }}></SearchUser>
            </Stack>
            </Grid>

            </Grid>
      

            <Container>
             
             
             <Grid mt={3} mb={2} container flexDirection="row">
                <Grid onClick={goBack} item >

                <IconButton>
                  <Iconify icon="material-symbols:arrow-back-rounded" />
                </IconButton>

                </Grid>
               
                <Grid item>
                <Typography  style={pageheading}>Users</Typography>
                </Grid>
                
            
                    
                        
                        
             
             </Grid>
             
             <Grid container  display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                  <Grid item style={{marginLeft:'2px'}}>
                <Grid container spacing={1}  >
                  <Grid item>
                 <Chip label="Total Users " value='All Users' 
                  sx={chips} 
                 style={{
                  backgroundColor: status==='all' ? '#007AFF' : '',
                  color: status==='all'? 'white' : '',marginLeft:'15px'
                }} 
                onClick={()=>{setStatus('all');setDisplayUser('Total Users')}}
                 />
                 </Grid>
                 <Grid item>
                  <Chip label="Active " value='Active' sx={chips}  style={{
                  backgroundColor: status==='active' ? '#007AFF' : '',
                  color: status==='active'? 'white' : '',marginLeft:'15px'
                }}  onClick={()=>{setStatus('active');setDisplayUser('Total Active')  }}/>
                </Grid>
                <Grid item>
                  <Chip label="Inactive" value='Inactive' sx={chips} 
                  
                  style={{
                    backgroundColor: status==='inactive' ? '#007AFF' : '',
                    color: status==='inactive'? 'white' : '',marginLeft:'15px'
                  }}
                  
                  onClick={()=>{setStatus('inactive');setDisplayUser('Total In Active')}}   />
                  </Grid>

                </Grid>
                </Grid>
                { displayNumber &&
                <Grid item >
                  <Typography variant="h6" sx={{marginRight:'2rem'}} style={pageWords} component="h2">{displayUser} : {displayNumber}</Typography>
                </Grid>
                }  

             </Grid>
              

             <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1}}>
            

             <Box sx={{ width: '100%' }}>  <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >



                    { 
                      
                      
                        usersData?.filter((value) => {
                            if (searchTitle === "") {
                                
                              return value;
                            } else if (
                              value.user_name.toLowerCase().includes(searchTitle.toLowerCase())
                            ) {
                                // console.log(value,'-----------value---------');
                              return value;
                            }
                          })
                        
                        
                        ?.map(item=>{
                          
                            return(

                           
                            <Card onClick={e=>{selectedProfileCalled(item)}} sx={{ minWidth: 275 }} style={{margin:"10px",cursor:'pointer'}} key={item.id}>
                                    <CardContent style={{backgroundColor:'#EBF5FF'}}>
                                    <Grid container  flexDirection="row" alignItems='center' spacing={1} sx={{textDecoration:'none'}} >
                                        
                                        <Grid item>
                                        <img src={Avatar} alt="diet logo" style={{height: "75px",borderRadius:"10px", width: "auto"}}/>
                                        </Grid>
                                        <Grid item>
                                        <span style={{ fontSize:"20px" ,color:"black",fontWeight:"25px",}}>{changeName(item.user_name)}</span>
                                        <Typography style={{ fontSize:"15px" ,color:"#112866",marginTop:'3px'}} >
                                        {item.user_name}
                                        </Typography>
                                        </Grid>
                                    
                                      {/* {  console.log(searchTitle,'--------Admin Search------')} */}

                                        
                                        
                                        
                                        
                                        
                                        </Grid>
                                    </CardContent>
                                </Card> 
                           
                            );
                           
                        })
                      }
                    
       
            </Box>

    </Box> </Stack>

            </Container>
            <Grid display='flex' justifyContent='center' alignItems='center'>
            {message==='no such user' && <Typography>No User Found</Typography>}
            </Grid>
           
          <Box py={3} display="flex" justifyContent="center">
          <Pagination
            count={totalPages}
            page={currentPage}
            color="secondary"
            variant="outlined"
            onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)}
          />

        </Box>
        {/* <Box py={3} display="flex" justifyContent="center">
        <div>
          <Pagination count={3}>
        {Array.from({ length: 4 }, (_, index) => index + 1).map((page) => (
          <Button key={page} onClick={() => handlePageChange(page)} variant={currentPage === page ? 'contained' : 'outlined'}>{page}</Button>
        ))}
        </Pagination>
      </div>

        </Box> */}


        
            </Page>
            

    

    );
      })

export default Adminuserlist

