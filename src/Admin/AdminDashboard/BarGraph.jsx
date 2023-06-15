import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/icons-material";

const BarGraph = () =>{
    const [countData,setCountData] = useState("")
useEffect(() => {
    count ();
}, [])
const count = async => {
    var config = {
        method: 'GET',
        maxBodyLength: Infinity,
        url: 'https://aipse.in/api/count',
        headers: { } 
      };
      
      axios(config)
      
      .then(function (response) {
        console.log(response?.data,"<-zwertyu")
        const realData = [
            {
             name: "Active Users",
             y:response?.data?.totalCountOfActiveUser

            },
            {
                name: "Inactive Users",
                y:response?.data?.totalCountOfInactiveUser
   
               },
               {
                name: "Total Users",
                y:response?.data?.totalCountOfUsers
   
               },
               {
                name: "No of Users Diet Plan Created",
                y:response?.data?.totalNoOfUsersFoodPlanCreated
   
               },
               {
                name: "No of Users Diet Plan Not Created",
                y:response?.data?.totalNoofUserDietPlanNotCreated
   
               }
               ,
               {
                name: "No of Exercise Created",
                y:response?.data?.totalNoofUsersExercisePlanCreated
   
               }
        ]
        setCountData(realData)
        
        
 
        console.log(countData,"<--------------setCountDatasetCountData-");
      })
      .catch(function (error) {
        console.log(error);
      });
}
  

    return (
      <>
       {/* <View style={{bottom:130}}>  */}
         {/* <PieChart highcharts={Highcharts} options={options} /> */}
         {/* <ChartView style={{height:250,width:400}} config={conf} options={options}></ChartView> */}

       {/* </View> */}
      <div>
        <h1>hvvhjvjhvhjvjh</h1>
      </div>
      </>
    );

}

export default BarGraph