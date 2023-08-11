import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { RegistrationForm } from "../components/RegistrationForm";
import photoBg from "../../assets/images/photo-bg.jpg";

export const RegistrationScreen = () => {
  return (
    <View style={styles.content}>
      <ImageBackground
        source={photoBg}
        resizeMode="cover"
        style={styles.imageBackground}>
        <RegistrationForm />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  content: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
