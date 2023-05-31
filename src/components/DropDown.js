import React, { useState } from 'react';
// import { StyleSheet } from 'react-native';
// import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from '@expo/vector-icons/AntDesign';
import { FormControl,InputLabel,Select,MenuItem } from '@mui/material';

const data = [
    {label:"Over All",value:'-1'},
    { label: 'Today', value: '0' },
    { label: 'Week', value: '1' },
    { label: '1 Month', value: '2' },
    { label: '3 Months', value: '3' },
];

const DropdownComponent = ({onIntervalChange}) => {
    const [value, setValue] = useState('-1');
        
    const styles = {
        dropdown: {
            // marginBottom: 10,
            height: 40,
            top:-5,
            backgroundColor: 'white',
            borderRadius: 12,
            padding: 12,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
    
            elevation: 2,
        },
        icon: {
            marginRight: 5,
        },
        item: {
            padding: 17,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        textItem: {
            flex: 1,
            fontSize: 16,
        },
        placeholderStyle: {
            fontSize: 16,
        },
        selectedTextStyle: {
            fontSize: 16,
        },
        iconStyle: {
            width: 20,
            height: 20,
        },
        inputSearchStyle: {
            height: 40,
            fontSize: 16,
        },
    };
    const [val, setVal] = useState('-1');

    const handleChange = (event) => {
        setVal(event.target.value);
    }

    
    return (
        // <Dropdown
        //     style={styles.dropdown}
        //     placeholderStyle={styles.placeholderStyle}
        //     selectedTextStyle={styles.selectedTextStyle}
        //     inputSearchStyle={styles.inputSearchStyle}
        //     iconStyle={styles.iconStyle}
        //     data={data}
        //     // search
        //     maxHeight={300}
        //     labelField="label"
        //     valueField="value"
        //     placeholder="Select item"
        //     searchPlaceholder="Search..."
        //     value={value}
            // onChange={item => {
            //     setValue(item.value);
            //     onIntervalChange(item.value)
            // }}

        // />

        
        <span>DropDown</span>

    //    <>
    //     <FormControl fullWidth>
    //         <InputLabel id="demo-simple-select-label">Options</InputLabel>
    //         <Select
    //             labelId="demo-simple-select-label"
    //             id="demo-simple-select"
    //             value={val}
    //             label="Age"
    //             onChange={item => {
    //                 setVal(item.value);
    //                 onIntervalChange(item.value)
    //             }}
    //         >
    //             <MenuItem value='-1'>Over All</MenuItem>
    //             <MenuItem value='0'>Today</MenuItem>
                
    //         </Select>
    //         </FormControl>
    //     </>
        
    );
};

export default DropdownComponent;

