import axios from "axios";
import React, { useEffect, useState } from "react";
// import ChartView from 'react-native-highcharts';
import { Line } from 'react-chartjs-2';
import {Card}  from '@mui/material';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

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
                y:response?.data?.totalNoOfUserDietPlanCreated
   
               },
               {
                name: "No of Users Diet Plan Not Created",
                y:response?.data?.totalNoofUserDietPlanNotCreated
   
               }
        ]
        setCountData(realData)
// const mappedData = Object?.keys(response?.data)?.map(itm=>{
//     if(response?.data[itm]==="success"){
//         console.log(itm,"<----itmersss",response?.data[itm])
       
//     }
//     else if(
//         itm==="Code"
//     )
//     {
        
//     }
//     else if(
//         itm==="Status"
//     )
//     {
        
//     }
//     else{
//         return{name:itm,
//             y:response?.data[itm]
//         }
//     }
   
// })
        //setCountData(response.data)
        //setIsActive([response.data?.totalCountOfActiveUser,response.data?.totalCountOfInactiveUser,response.data?.totalCountOfUsers,response.data?.totalNoOfUserDietPlanCreated,response.data?.totalNoofUserDietPlanNotCreated])
        // const filterdata = mappedData.filter(function( element ) {
        //     return element !== undefined;
        //  });
        //setCountData(filterdata)
        console.log(mappedData,"<--------------setCountDatasetCountData-");
      })
      .catch(function (error) {
        console.log(error);
      });
}
  

var conf={
    title: {
        text: ''
      },
      
        chart: {
            type: 'pie',
            animation: Highcharts.svg, // don't animate in old IE
            dataLabels: {
                enabled: true,
                format: '<b>{totalCountOfUsers}</b>: {point.percentage:.1f} %'
            }
        },
        
        series: [{
            name: 'Total Count',
            colorByPoint: true,
            data:countData
           
        }],
        // dataLabels: {
        //     distance: 5,
        //     format: '{point.name}<br>{point.percentage:.1f} %',
        //     connectorWidth: 0,
        //     style: {
        //       width: '40px',
        //       fontSize: '0.8em'
        //     }
        //   }
        
        
    };

// const options = {
//     global: {
//         useUTC: false
//     },
//     lang: {
//         decimalPoint: ',',
//         thousandsSep: '.'
//     }
// };

const options = {
  chart: {
    type: 'pie',
  },
  title: {
    text: 'My Pie Chart',
  },
  series: [
    {
      name: 'Data',
      data: [
        ['Category 1', 25],
        ['Category 2', 30],
        ['Category 3', 15],
        ['Category 4', 10],
        ['Category 5', 20],
      ],
    },
  ],
};
    return (
      
      <Card > 
     123
        {/* <PieChart highcharts={Highcharts} options={options} /> */}
        {/* <Line style={{height:250,width:400}} config={conf} options={options}></Line> */}
        <HighchartsReact highcharts={Highcharts} options={options} />

      </Card>
    );

}

export default BarGraph