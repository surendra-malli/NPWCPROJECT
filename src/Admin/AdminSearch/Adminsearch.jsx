import { Grid, Typography, Box,Stack, IconButton, Container,Button,Chip, } from '@mui/material';
import * as React from 'react';
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
    
<<<<<<< HEAD
    //const encodedData = new URLSearchParams(location.search).get('data');
      const objectData = location?.state;
  console.log(location)
=======
    const encodedData = new URLSearchParams(location.search).get('data');
      const objectData = JSON.parse(decodeURIComponent(encodedData));

>>>>>>> aastha
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
      
      
       apiHit()
    },[currentPage,searchTitle]);

    useEffect(()=>{
      console.log("status is", status)
      console.log("usersdata is",usersData);
      if(status==='all'){
        setDisplayUser('Total Users')
      }
      else if(status==='active'){
        setDisplayUser('Total Active Users')
      }
      else{
        setDisplayUser('Total In Active Users')
      }

      apiHit();
      setCurrentPage(1)
      console.log(currentPage,'currentpage')
      
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
  //from=location.pathname;
<<<<<<< HEAD
  
  navigate('/dashboardadmin/adminprofile',{state:objectData});
=======
  navigate(`/dashboardadmin/adminprofile?data=${encodedData}`);
>>>>>>> aastha
}


    
    
      //https://aipse.in/api/searchUser?name=&page=1&count=100
      //`https://aipse.in/api/searchUser?name=${searchTitle}&page=${page}&count=6`,

    const apiHit=async()=>{
        
        console.log(`https://aipse.in/api/searchUser?name=${searchTitle}&page=${currentPage}&count=10`,);
       let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url:`https://aipse.in/api/searchUser?name=${searchTitle}&page=${currentPage}&count=10&status=${status}`,
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
    
  
    
    return (
        
            <Page  title="Dashboard: Admin">

            <Searchbar  searchHandler={searchHandler} id="search-bar" sx={{height:"100px"}}/>
            

            <Container>
             
             <Grid mt={10} mb={2} container flexDirection="row">
                <Grid  item >
                <Link to="/dashboardadmin/adminuser">
                <IconButton>
                  <Iconify icon="material-symbols:arrow-back-rounded" />
                </IconButton></Link>

                </Grid>
               
                <Grid item>
                <Typography  style={pageheading}>User Sheema</Typography>
                </Grid>
                
            
                    
                        
                        
             
             </Grid>
             
             <Grid container  display='flex' flexDirection='row' alignItems='center' justifyContent='space-between'>
                  <Grid item>
                <Grid container spacing={1}  >
                  <Grid item>
                 <Chip label="All Users " value='All Users' 
                  sx={chips} 
                 style={{
                  backgroundColor: status==='all' ? 'purple' : '',
                  color: status==='all'? 'white' : '',
                }} 
                onClick={()=>{setStatus('all');setDisplayUser('Total Users')}}
                 />
                 </Grid>
                 <Grid item>
                  <Chip label="Active " value='Active' sx={chips}  style={{
                  backgroundColor: status==='active' ? 'purple' : '',
                  color: status==='active'? 'white' : '',
                }}  onClick={()=>{setStatus('active');setDisplayUser('Total Active')  }}/>
                </Grid>
                <Grid item>
                  <Chip label="Inactive" value='Inactive' sx={chips} 
                  
                  style={{
                    backgroundColor: status==='inactive' ? 'purple' : '',
                    color: status==='inactive'? 'white' : '',
                  }}
                  
                  onClick={()=>{setStatus('inactive');setDisplayUser('Total In Active')}}   />
                  </Grid>

                </Grid>
                </Grid>
                <Grid item >
                  <Typography variant="h6" sx={{marginRight:'2rem'}} style={pageWords} component="h2">{displayUser} : {displayNumber}</Typography>
                </Grid>

             </Grid>
              

             <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            

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

                           
<<<<<<< HEAD
                            <Card onClick={e=>{selectedProfileCalled(item)}} sx={{ minWidth: 275 }} style={{margin:"20px",cursor:'pointer'}} key={item.id}>
=======
                            <Card onClick={e=>{selectedProfileCalled(item)}} sx={{ minWidth: 275 }} style={{margin:"20px"}} key={item.id}>
>>>>>>> aastha
                                    <CardContent>
                                    <Grid container  flexDirection="row"  sx={{textDecoration:'none'}} >
                                        
                                        <div>
                                        <img src={Userfig} alt="diet logo" style={{height: "auto",borderRadius:"40px", width: "auto"}}/>
                                        </div>
                                        <div>
                                        <span style={{ fontSize:"25px" ,color:"black",fontWeight:"20px",marginLeft:"10px"}}>{changeName(item.user_name)}</span>
                                        <Typography style={{ fontSize:"15px" ,color:"#112866",marginLeft:"10px"}} >
                                        {item.user_name}
                                        </Typography>
                                        </div>
                                    
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

            {message==='no such user' && <h1>No Data</h1>}

           
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

