import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export const RegistrationForm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image style={styles.placeholderUserImage} />
        <View style={styles.iconWrapper}>
          <AntDesign name="plus" size={25} color="#FF6C00" />
        </View>
      </View>

      <Text style={styles.title}>Реєстрація</Text>
      <TextInput style={styles.input} placeholder="Логін"></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Адреса електронної пошти"></TextInput>
      <TextInput style={styles.input} placeholder="Пароль"></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.text}>Вже є акаунт? Увійти</Text>
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
    bottom: 10,
    right: 114,
    borderColor: "#FF6C00",
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
    backgroundColor: "transparent",
    top: "60%",
    transform: [{ translateX: 132 }],
  },
});
