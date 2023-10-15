import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { MainNavigator } from "./src/routes/MainNavigator";

export default function App() {
  const [loaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (!loaded) {
    return null;
  }

  return (
    <>
      <MainNavigator />
      <StatusBar style="auto" />
    </>
  );
}
