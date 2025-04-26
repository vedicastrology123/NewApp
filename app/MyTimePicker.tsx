import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Keyboard } from "react-native";
import { Button } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { en, registerTranslation } from 'react-native-paper-dates';
import format from 'date-fns/format';

registerTranslation('en', en);

export default function MyTimePicker() {
  const [visible, setVisible] = React.useState(false)
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginLeft: 1,
    marginTop: 25,
    alignContent: "space-around",
    textDecorationColor: 'black',
    fontWeight: "bold",
    width: 325,
    borderRadius: 2,
    paddingTop: 25,
    marginBottom: 25,
    color: 'black',
  },
  datepicker: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 2,
    paddingBottom: 2,
  },
  input: {
    marginVertical: 6,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor:'white',
    flex: 1,
    color: "#black",
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
});