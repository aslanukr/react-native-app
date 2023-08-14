import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { InputField } from "./InputField";

export const RegistrationForm = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onLogin = () => {
    Alert.alert(`login: ${login}, email: ${email}, password: ${password}`);
    console.log(`login: ${login}, email: ${email}, password: ${password}`);
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const onShowPress = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.placeholderUserImage} />
        <View style={styles.iconWrapper}>
          <AntDesign name="plus" size={20} color="#FF6C00" />
        </View>
      </View>

      <Text style={styles.title}>Реєстрація</Text>
      <View style={styles.formWrapper}>
        <InputField
          value={login}
          placeholder={"Логін"}
          onChangeText={(text) => {
            setLogin(text);
          }}
        />
        <InputField
          value={email}
          placeholder={"Адреса електронної пошти"}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <InputField
          value={password}
          placeholder={"Пароль"}
          secureTextEntry={isPasswordHidden ? true : false}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TouchableOpacity style={styles.showText} onPress={onShowPress}>
          <Text> {isPasswordHidden ? "Показати" : "Приховати"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.buttonText}>Зареєструватися</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={styles.text}>
          Вже є акаунт? <Text style={styles.loginText}>Увійти</Text>
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
    paddingTop: 92,
    paddingBottom: 66,
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
    top: 176,
    right: 16,
  },
  loginText: {
    textDecorationLine: "underline",
  },
});
