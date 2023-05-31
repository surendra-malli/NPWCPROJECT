import React from 'react';
import { useState, useEffect,useRef } from 'react';
// import { LongPressEventType, useLongPress } from "use-long-press";
import { Link as RouterLink,useLocation } from 'react-router-dom';
import { Grid, Typography, Card, CardContent,ButtonBase,Button } from '@mui/material';
 import CreateCategory from "../AdminDiet/component/CreateCategory";
import useLongPress from '../AdminDiet/components/UseLongPress';
import Logo from "../../assets/nova.svg";
import Peas from "../../assets/Peas.svg";
import axios from 'axios';
import { Link } from "react-router-dom";

const title = {
    fontFamily: "Inter-Bold",
    fontSize: "30px",
    color: "#112866",
};
const maintitle = {
    fontFamily: 'Inter-Bold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    color: "#112866",
};
export default function AdminDietCategory(props) {
const childcomref = useRef()


    const [longPressCount, setlongPressCount] = useState(0)
    const [clickCount, setClickCount] = useState(0)
    const [categoryData, setCategoryData] = useState([])
    const [isitem,setItem] = useState()
    const [showState,setShowState] = useState(false)
    const location = useLocation();
    const onLongPress = (itemName) => {
      console.log('longpress is triggered');
      // functiona need
     
      childcomref.current.handleClickOpen()
      setlongPressCount(longPressCount + 1)
    };
    
    const onClick = (e) => {
      console.log('click is triggered');
      setClickCount(clickCount + 1)
    }
  
    const defaultOptions = {
      shouldPreventDefault: true,
      delay: 200,
    };
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
    


    useEffect(() => {
        
        categoryhit();
    }, []);
    const categoryhit = async => {
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: 'https://aipse.in/api/getAllCategories?type=food',
            headers: { 'Content-Type': 'application/json' },
        };
        axios(config)
            .then((response) => {
                setCategoryData(response?.data?.data)
                // console.log(response?.data?.data, "<------------------------111setCategoryDatasetCategoryData");
            })
            .catch((error) => {
                console.log(error);
            });


    }

    const handleClickEdit=(e,categoryName,categoryId)=>{
        //console.log(val,'val');
        childcomref.current.handleClickOpenEdit(categoryName,categoryId)
    }

    return (
        <>
            {<img src={Logo} alt="nova logo" style={{ height: "auto", width: "250px", marginLeft: "30px" }} />}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <CardContent >
                        <Typography style={title} variant='h3'>
                            Category
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>

            <div className="App">
            

   
    </div>
            {categoryData?.map(item => {
                return (
                    <Card     style={{ backgroundColor: "#F0E7F5", margin: '1rem', boxShadow: '#c4c4c4', }}>
                        <CardContent>
                        {/* to="/dashboardadmin/adminproteins" component={RouterLink} */}
                            <Grid container spacing={2}  component={RouterLink} state={{data:item}} sx={{ textDecoration: 'none' }} justifyContent='center' alignItems='center'>
                                <Grid  to="/dashboardadmin/adminproteins" component={RouterLink} state={{data:item}} item xs={9} spacing={2} md={10} >
                                    <Grid item xs>
                                        <Typography gutterBottom style={maintitle} variant="h5" component="div">
                                            {item.category_name}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid display={'flex'} item xs={3} md={2}>
                                    <ButtonBase sx={{ width: "auto", height: "auto" }}>
                                        <img src={Peas} alt="nova logo" style={{ height: "100", width: "100px" }} />
                                    </ButtonBase>
                                    <Button onClick={e=>{handleClickEdit(e,item.category_name,item.category_id)}} sx={{ height: 10,width:25, padding: 1, margin: 2 }}> Edit</Button>
                                    
                                </Grid>
                            </Grid>
                        
                        
                        </CardContent>
                    </Card>
                );
            })
            }
     {/* <link to="/CreateCategory" state= {{categoryData:categoryData}}></link> */}
            <CreateCategory  categoryData={categoryData} categoryhit={()=>{categoryhit()}}  ref={childcomref} setShowState ={() =>{
                setItem("")
                setShowState(false)
                console.log("this is callingggggg")
            }}  />
            {console.log(categoryData,"<--------bjuhjuhjnjhnjhn")}
            {/* <useLongPressCount/>  state={{ categoryData:categoryData  }} */}
        
        </>
    );
}
