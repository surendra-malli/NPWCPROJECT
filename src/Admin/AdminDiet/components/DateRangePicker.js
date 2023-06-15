import React, { useState } from 'react';
import { DatePicker } from '@mui/lab';
import { TextField,Grid,CardContent } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer , DemoItem} from '@mui/x-date-pickers/internals/demo';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [interval, setInterval] = useState(7); // Default interval is 7 days

  const handleStartDateChange = (date) => {
    setStartDate(date);
    calculateEndDate(date);
  };

  const calculateEndDate = (start) => {
    if (start) {
      const calculatedEndDate = new Date(start);
      calculatedEndDate.setDate(start.getDate() + interval);
      setEndDate(calculatedEndDate);
    } else {
      setEndDate(null);
    }
  };

  const handleIntervalChange = (event) => {
    const selectedInterval = parseInt(event.target.value);
    setInterval(selectedInterval);
    calculateEndDate(startDate);
  };

  return (
    <div>
 <Grid  xs={6} xl={6}   item>
         
         <CardContent>  
           <LocalizationProvider   dateAdapter={AdapterDayjs}>
         <DemoContainer components={['DesktopDatePicker']} >
           <DatePicker  label="Start Date"  
                   onChange={e => {
                     if (e) {
                        console.log(moment(e)?.format('DD-MM-YYYY'),"<---eee")
                       const newDate = moment(e)
                         ?.add(valuesD?.interval, 'days')
                         ?.format('DD-MM-YYYY');
                         console.log(newDate,e,valuesD?.interval,"<--qwert")
                    //    setValuesD({
                    //      ...valuesD,
                    //      startDate: moment(e)?.format('DD-MM-YYYY'),
                    //      endDate: newDate,
                    //    });
                     }
                   }}
                      renderInput={(params) => <TextField {...params} />}  />
         </DemoContainer>
         
       </LocalizationProvider>
       </CardContent>  
          </Grid>

      <LocalizationProvider   dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DesktopDatePicker']} >
          <DatePicker  label="Start Date"  
         onChange={handleStartDateChange}
           renderInput={(params) => <TextField {...params} />}  />
        </DemoContainer>
        
      </LocalizationProvider>
      

      <TextField
        label="Interval (in days)"
        select
        value={interval}
        onChange={handleIntervalChange}
        SelectProps={{
          native: true,
        }}
        variant="outlined"
      >
        <option value={7}>7 days</option>
        <option value={30}>30 days</option>
        <option value={90}>90 days</option>
      </TextField>

      {endDate && (
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(date) => setEndDate(date)}
          renderInput={(params) => <TextField {...params} />}
        />
      )}
    </div>
  );
};

export default DateRangePicker;
