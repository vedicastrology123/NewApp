import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { en, registerTranslation } from 'react-native-paper-dates';
import format from 'date-fns/format';

registerTranslation('en', en);

export default function MyDatePicker() {
/*   const [date, setDate] = React.useState(new Date());
  const [open, setOpen] = React.useState(false); */

/*   const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]); */

/*   const onConfirmSingle = React.useCallback(
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

  const [pickedDate, setPickedDate] = useState(); */
  return (
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
          //onDismiss={onDismissSingle}
          date={date}
          //onConfirm={onConfirmSingle}
          //format={formatDate}
        />
        {/* {pickedDate && <Text style={styles.text}>Birth date: {pickedDate}</Text>} */}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 1,
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
  input: {
    marginVertical: 6,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor:'white',
    flex: 1,
    color: "#black",
  },
});