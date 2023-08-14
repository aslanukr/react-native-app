import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import photoBg from "../../assets/images/photo-bg.jpg";
import { LoginForm } from "../components/LoginForm";

export const LoginScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.content}>
        <ImageBackground
          source={photoBg}
          resizeMode="cover"
          style={styles.imageBackground}>
          <LoginForm />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
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
