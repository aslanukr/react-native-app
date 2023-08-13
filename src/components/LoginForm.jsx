import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { InputField } from "./InputField";

export const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Увійти</Text>
      <View style={styles.formWrapper}>
        <InputField
          placeholder={"Адреса електронної пошти"}
          secureTextEntry={false}
        />
        <InputField placeholder={"Пароль"} secureTextEntry={true} />
        <Text style={styles.showText}>Показати</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.text}>
          Немає акаунту?{" "}
          <Text style={styles.registerText}>Зареєструватись</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    backgroundColor: "#ffffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 32,
    paddingBottom: 144,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#212121",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 33,
  },
  formWrapper: {
    position: "relative",
    width: "100%",
  },
  input: {
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    fontSize: 16,
    color: "#212121",
    fontWeight: "400",
    lineHeight: 18,
  },
  button: {
    width: "100%",
    marginTop: 27,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 32,
    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
    fontWeight: "400",
    lineHeight: 18,
  },
  text: {
    color: "#1B4371",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 18,
  },
  placeholderUserImage: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  imageWrapper: {
    position: "absolute",
    transform: [{ translateY: -60 }],
    top: 0,
  },
  iconWrapper: {
    position: "absolute",
    bottom: 14,
    right: 114,
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
    backgroundColor: "transparent",
    transform: [{ translateX: 125 }],
  },
  showText: {
    position: "absolute",
    fontSize: 16,
    fontWeight: "400",
    color: "#1B4371",
    top: 98,
    right: 16,
  },
  registerText: {
    textDecorationLine: "underline",
  },
});
