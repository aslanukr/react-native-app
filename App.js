import React from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import { MainNavigator } from "./src/routes/MainNavigator";

export default function App() {
  return (
    <>
      <MainNavigator />
      <StatusBar style="auto" />
    </>
  );
}
