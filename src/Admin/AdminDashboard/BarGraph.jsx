import React from 'react'
import Highcharts from "highcharts/highstock";
import {
  HighchartsStockChart,
  Chart,
  HighchartsProvider,
  XAxis,
  YAxis,
  Title,
  Legend,
  AreaSplineSeries,
  SplineSeries,
  Navigator,
  RangeSelector,
  Tooltip,
} from "highcharts/highstock";
import PieChart from "highcharts-react-official";
const BarGraph = () => {



  
  const option= {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    credits: {
      enabled: false
  },
   
    xAxis: {
        categories: [
            '21-05-2023',
            '22-05-2023',
            '23-05-2023',
            '24-05-2023',
            '25-05-2023',
            '26-05-2023',
            '27-05-2023',
            '28-05-2023',
            '29-05-2023',
            '30-05-2023',
            '31-05-2023',
            '01-06-2023',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Servings'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Servings Recommended',
        data: [40, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
            194.1, 95.6, 54.4]

    }, {
        name: 'Total Servings',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
            106.6, 92.3]

    }, {
        name: 'Consumed',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
            51.2]

    }, 
    // {
    //     name: 'Berlin',
    //     data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
    //         51.1]

    // }
  ]
};

return (
  <>
   
   <PieChart highcharts={Highcharts} options={option} />
    
  </>
);

  
}

export default BarGraph