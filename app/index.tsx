import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { DatePickerModal, TimePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { en, registerTranslation } from 'react-native-paper-dates';
import format from 'date-fns/format';

import CountriesData from './places.json';

registerTranslation('en', en);

const formFields = {
  country: {
    fieldId: 'country',
    label: 'Country',
    labelField: 'name',
    valueField: 'id',
    parents: [],
    list: [],
    selectedItem: {},
    selectedValue: null,
    onValueSelected: () => null,
  },
  state: {
    fieldId: 'state',
    label: 'State',
    labelField: 'name',
    valueField: 'id',
    parents: ['country'],
    list: [],
    selectedItem: {},
    selectedValue: null,
    onValueSelected: () => null,
  },
  city: {
    fieldId: 'city',
    label: 'City',
    labelField: 'name',
    valueField: 'id',
    parents: ['country', 'state'],
    list: [],
    selectedItem: {},
    selectedValue: null,
    onValueSelected: () => null,
  },
};

var focusField = '';
var snackMsg = '';

let formValue = [];
let countryFormValue, stateFormValue, cityFormValue;

export default function Index() {
  const [refreshPage, setRefreshPage] = useState(false);
  const [visible, setVisible] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const resetForm = () => {
    resetFields('country');
    focusField = '';
    loadCountry();
  };

  const changeFocusField = (fld = '') => {
    focusField = fld;
    setRefreshPage(!refreshPage);
  };

  const resetFields = (fld = '') => {
    var b = false;
    for (let kee in formFields) {
      if (b) {
        formFields[kee].list = [];
        formFields[kee].selectedItem = {};
        formFields[kee].selectedValue = null;
      } else {
        if (kee === fld) {
          b = true;
          formFields[kee] = {
            ...formFields[kee],
            list: [],
            selectedItem: {},
            selectedValue: null,
          };
        }
      }
    }
  };

  const allValuesSelected = () => {
    console.log('All fields selected');
  };

  const loadCity = async () => {
    resetFields('city');

      let CityArray = [];
      let citiesOfState;
      CountriesData.map(item => {
      let countryVal, stateVal;
        if (item.id === formFields.country.selectedValue) {
          countryVal = item.id;
          return item.states.map(stateItem => {
            if (stateItem.id === formFields.state.selectedValue) {
              stateVal = stateItem.id;
              citiesOfState  = {key : stateVal, value : stateItem.cities};
            }
          })
        }
      })
      var cities = citiesOfState.value;
  
      var keyCount  = Object.keys(cities).length;
  
      for (var i = 0; i < keyCount; i++) {
        CityArray.push({
          id: cities[i].id,
          name: cities[i].name,
        })
      }

    if (CityArray.length) {
      formFields.city.list = [...CityArray];
    }
    setRefreshPage(!refreshPage);
  };

  const loadState = async () => {
    resetFields('state');

    let StateArray = [];
    let states;
    CountriesData.map(item => {
      let countryVal;
        if (item.id === formFields.country.selectedValue) {
          countryVal = item.id;
          states = {key : countryVal, value : item.states};
        }
    })
    let indianStates = states.value;

    var keyCount  = Object.keys(indianStates).length;

    for (var i = 0; i < keyCount; i++) {
      StateArray.push({
        id: indianStates[i].id,
        name: indianStates[i].name,
      })
    }

    if (StateArray.length) {
      formFields.state.list = [...StateArray];
    }
    setRefreshPage(!refreshPage);
  };

  const loadCountry = async () => {

    let CountryArray = [];
    var keyCount  = Object.keys(CountriesData).length;

    for (var i = 0; i < keyCount; i++) {
      CountryArray.push({
        id: CountriesData[i].id,
        name: CountriesData[i].name,
      })
    }
    formFields.country.list = [...CountryArray];
    setRefreshPage(!refreshPage);
  };

  const loadPageData = () => {
    formFields.country.onValueSelected = loadState;
    formFields.state.onValueSelected = loadCity;

    loadCountry();
  };

  useEffect(() => {
    loadPageData();
  }, []);

  type Inputs = {
    firstName: string
    lastName: string
    dtob: Date
  }
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
     countryFormValue = formValue[0];
    stateFormValue = formValue[1];
    cityFormValue = formValue[2];
    const submittedData  = { ...data, countryFormValue, stateFormValue, cityFormValue }; 

    //console.log("formValue[0] " + submittedData.countryFormValue);
  };

  const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false);

  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      //const formattedDate = {params.date ? format(date, 'dd/MMM/yyyy') : ''}
      console.log(params.date);
      setPickedDate(formatDate(params.date));
    },
    [setOpen, setDate]
  );

  const formatDate = (date) => {
    return format(date, 'dd-MMM-yyyy'); // Customize your format here
   };

  const [pickedDate, setPickedDate] = useState();

  //const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    ({ hours, minutes }) => {
      setVisible(false);
      console.log({ hours, minutes });
      const formattedTime = format(new Date(0, 0, 0, hours, minutes), 'hh:mm a');
      setPickedTime(formattedTime);
    },
    [setVisible]
  );

  const [pickedTime, setPickedTime] = useState();

  return (
    <ScrollView style={styles.container}>
      <View>
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

        <SafeAreaProvider>
          <View styles={styles.datepicker}>
            <Button styles={styles.button} onPress={() => setOpen(true)} uppercase={false} mode="outlined">
              Accurate Birth Date
            </Button>
            <DatePickerModal
              disableStatusBarPadding
              locale="en"
              mode="single"
              visible={open}
              onDismiss={onDismissSingle}
              date={date}
              onConfirm={onConfirmSingle}
              format={formatDate}
            />
          </View>
            </SafeAreaProvider>
        {pickedDate && <Text style={styles.text}>Birth date: {pickedDate}</Text>}

        <SafeAreaProvider>
          <View styles={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
            <Button styles={styles.button} onPress={() => setVisible(true)} uppercase={false} mode="outlined">
              Accurate Birth Time - 24 hour format.
            </Button>
            <TimePickerModal
              visible={visible}
              onDismiss={onDismiss}
              onConfirm={onConfirm}
              hours={20}
              minutes={45}
              //use24HourClock
              defaultInputType='keyboard'
              is24Hour={true}
            />
            {pickedTime && <Text style={styles.text}>Birth time: {pickedTime}</Text>}
          </View>
        </SafeAreaProvider>

        {Object.keys(formFields).map((ele, index) => {
          const fld = formFields[ele];
          return (
            <View key={'_formField_' + index}>
              <Text style={{ color: "#black", fontWeight: "bold" }}>{fld.label}</Text>
              <ZDropDown
                labelField={fld.labelField}
                valueField={fld.valueField}
                data={fld.list}
                value={fld.selectedValue}
                isFocus={focusField === ele}
                onFocus={() => {
                  changeFocusField(ele);
                  const parents = fld.parents;
                  for (let pr of parents) {
                    if (!formFields[pr].selectedValue) {
                      snackMsg = 'Select ' + formFields[pr].label;
                      focusField = pr;
                      onToggleSnackBar();
                      break;
                    }
                  }
                }}
                onBlur={() => changeFocusField('')}
                onChange={(item) => {
                  fld.selectedItem = item;
                  fld.selectedValue = item[fld.valueField];
                  focusField = '';
                  formValue[index] = item.name;
                  console.log("formValue[index]  " + formValue[1]);
                  fld.onValueSelected();
                }}
              />
            </View>
          );
        })}
        <TouchableHighlight
          style={styles.submit}
          onPress={handleSubmit(onSubmit)}
          underlayColor='#fff'>
            <Text style={[styles.submitText]}>Submits</Text>
        </TouchableHighlight>

        </View>
      </ScrollView>
  );
}

const ZDropDown = ({
  data,
  labelField,
  valueField,
  value,
  onFocus,
  onBlur,
  onChange,
  isFocus,
}) => {
  return (  
    <Dropdown
      mode={'auto'}
      style={[styles.dropdown, isFocus ? { borderColor: 'dodgerblue' } : {}]}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      search={data.length > 5}
      maxHeight={300}
      searchPlaceholder="Search..."
      data={data}
      labelField={labelField}
      valueField={valueField}
      placeholder={!isFocus ? 'Select item' : '...'}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  clrBtn: {
    padding: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  clrBtnTxt: {
    color: 'grey',
  },
  selectedValue: {
    color: 'steelblue',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 10,
    marginBottom: 20,
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
  input: {
    marginBottom: 10,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor:'white',
    flex: 1,
    color: "#black",
    fontWeight: "bold",
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
  },
  button: {
    marginLeft: 1,
    marginTop: 25,
    alignContent: "space-around",
    fontWeight: "bold",
    width: 325,
    borderRadius: 2,
    paddingTop: 25,
    marginBottom: 25,
    color: 'black',
  },
  text: {
    color: 'blue',
    fontWeight: "bold",
    marginLeft: 1,
    alignContent: "space-around",
    width: 325,
    borderRadius: 2,
    paddingTop: 5,
    marginBottom: 25,
  },
  datepicker: {
    flex: 1,
    justifyContent: "space-evenly",
    paddingTop: 26,
    marginTop: 25,
    paddingBottom: 25,
  },
/*   input: {
    marginVertical: 6,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor:'white',
    flex: 1,
    color: "#black",
  }, */
});