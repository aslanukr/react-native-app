import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export const LogOutBtn = () => {
  const navigation = useNavigation();
  const logOut = () => {
    navigation.navigate("Login");
  };
  return (
    <TouchableOpacity style={styles.logOutBtn} onPress={logOut}>
      <MaterialIcons name="logout" size={24} color="#BDBDBD" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logOutBtn: {
    marginRight: 16,
  },
});
