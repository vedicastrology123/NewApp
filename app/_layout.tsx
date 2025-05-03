import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function RootLayout() {
  return (
    <>
  <SafeAreaProvider>
    <GestureHandlerRootView style={styles.container}>
      <Stack />
      <StatusBar style="light" />
    </GestureHandlerRootView>
  </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});