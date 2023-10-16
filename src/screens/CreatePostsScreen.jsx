import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native";
import {
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Trash2, MapPin } from "react-native-feather";

export const CreatePostsScreen = () => {
  const [description, setDescription] = useState("");
  const [place, setPlace] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={-170}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.content}>
          <View>
            <View style={styles.camerawrapper}>
              <View style={styles.imgplaceholder}>
                <TouchableOpacity style={styles.camerabtn}>
                  <FontAwesome
                    name="camera"
                    size={24}
                    color="rgba(189, 189, 189, 1)"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.cameratext}>Завантажте фото</Text>
            </View>
            <View style={styles.inputwrapper}>
              <TextInput
                value={description}
                style={styles.input}
                placeholder={"Назва..."}
                onChangeText={(text) => {
                  setDescription(text);
                }}
              />
              <TextInput
                value={place}
                style={styles.location}
                placeholder={"Місцевість..."}
                onChangeText={(text) => {
                  setPlace(text);
                }}
              />
              <MapPin
                style={styles.mapicon}
                width={24}
                height={24}
                color={"rgba(189, 189, 189, 1)"}
              />
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Опублікувати</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.trashwrapper}>
            <TouchableOpacity style={styles.trashbutton}>
              <Trash2 width={24} height={24} color={"rgba(189, 189, 189, 1)"} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingHorizontal: 16,
  },
  content: {
    position: "relative",
    flex: 1,
  },
  camerawrapper: { gap: 8 },
  imgplaceholder: {
    marginTop: 32,
    width: "100%",
    height: 240,
    backgroundColor: "rgba(232, 232, 232, 1)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  camerabtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  cameratext: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 16,
    fontWeight: "400",
  },
  inputwrapper: {
    position: "relative",
    marginTop: 32,
    gap: 16,
  },
  input: {
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
  },
  location: {
    fontSize: 16,
    fontWeight: "400",
    paddingVertical: 16,
    paddingLeft: 28,
    borderBottomWidth: 1,
    borderColor: "rgba(232, 232, 232, 1)",
  },
  mapicon: {
    position: "absolute",
    bottom: 34,
  },
  button: {
    width: "100%",
    marginTop: 32,
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "rgba(189, 189, 189, 1)",
    fontWeight: "400",
    lineHeight: 18,
  },
  trashwrapper: {
    alignItems: "center",
    position: "absolute",
    bottom: 34,
    left: 0,
    right: 0,
  },
  trashbutton: {
    width: 70,
    paddingVertical: 8,
    paddingHorizontal: 23,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 50,
  },
});
