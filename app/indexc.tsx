import { Text, View, StyleSheet, StatusBar, Button, TouchableHighlight } from "react-native";
import { TextInput } from "react-native-paper";
import React, { useState, useEffect, useCallback } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import CountriesData from './places.json';

export default function Index1() {
  const [countryData, setCountryData] = useState([]);
  let [stateData, setStateData] = useState([]);
  let [cityData, setCityData] = useState([]);

  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [stateName, setStateName] = useState(null);
  const [cityName, setCityName] = useState(null);

  const [isFocus, setIsFocus] = useState(false);
   
  useEffect(()=>{
    let CountryArray = [];
    var keyCount  = Object.keys(CountriesData).length;

    for (var i = 0; i < keyCount; i++) {
      CountryArray.push({
        value: CountriesData[i].ios2,
        label: CountriesData[i].name,
      })
    }
    setCountryData(CountryArray);
  },[]);

/*   const onChangeCountry = useCallback((text) => {
    setCountry(text);
  }, []); */

  const handleState = (countryValue) => {
    let StateArray = [];
    let states;
    CountriesData.map(item => {
      let countryVal;
        if (item.name === countryValue) {
          countryVal = item.ios2;
          states = {key : countryVal, value : item.states};
        }
    })
    let indianStates = states.value;

    var keyCount  = Object.keys(indianStates).length;

    for (var i = 0; i < keyCount; i++) {
      StateArray.push({
        value: indianStates[i].ios2,
        label: indianStates[i].name,
      })
    }
    setStateData(StateArray);
  }

  const handleStateCity = (countryValue, stateValue) => {
    let CityArray = [];
    let citiesOfState;
    CountriesData.map(item => {
    let countryVal, stateVal;
      if (item.name === countryValue) {
        countryVal = item.ios2;
        return item.states.map(stateItem => {
          if (stateItem.name === stateValue) {
            stateVal = stateItem.ios2;
            citiesOfState  = {key : stateVal, value : stateItem.cities};
          }
        })
      }
    })
    var cities = citiesOfState.value;

    var keyCount  = Object.keys(cities).length;

    for (var i = 0; i < keyCount; i++) {
      CityArray.push({
        value: cities[i].ios2,
        label: cities[i].name,
      })
    }
    setCityData(CityArray);
  }

  type Inputs = {
    firstName: string
    lastName: string
    countryVal: string
  }

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("countryVal"));

  return (
    <form>
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <View style={{backgroundColor:'#fff',padding:20,borderRadius:15}}>
        <Text style={{ color: "#black", fontWeight: "bold" }}>First Name</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="First name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              label="First Name"
              style={styles.input}
            />
          )}  
          name="firstName"
        />
        {errors.firstName && <Text>First Name is required.</Text>}
        
        <Text style={{ color: "#black", fontWeight: "bold" }}>Last Name</Text>

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Last Name"
              label="Last Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              mode="outlined"
              style={styles.input}
            />
          )}
          name="lastName"
        />
        {errors.lastName && <Text>Last Name is required.</Text>}

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
          <Dropdown
/*              {...register("countryVal", { required: "This field is required" })} */
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={countryData}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Birth Country' : '...'}
            searchPlaceholder="Search..."
            value={country}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
            //onChangeCountry(item.label);
              setIsFocus(false);
              setCountry(item.value);
              setCountryName(item.label);
              handleState(item.label);
            }}
          />
          )}
          name="countryVal"
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={stateData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Birth State' : '...'}
          searchPlaceholder="Search..."
          value={state}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setIsFocus(false);
            setState(item.value);
            setStateName(item.label);
            handleStateCity(countryName, item.label);
          }}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={cityData}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Birth City or Town' : '...'}
          searchPlaceholder="Search..."
          value={city}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setIsFocus(false);
            setCity(item.value);
            setCityName(item.label);
          }}
        />
        <TouchableHighlight
          style={styles.submit}
          onPress={handleSubmit(onSubmit)}
          underlayColor='#fff'>
            <Text style={[styles.submitText]}>Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  </form>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 36,
    marginVertical: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    marginVertical: 6,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor:'white',
    flex: 1,
    color: "#black",
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
  }
});


/*const DropdownComponent = () => {
  return (
  
  );
};

export default DropdownComponent;
*/