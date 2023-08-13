import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export const InputField = ({ placeholder, secureTextEntry }) => {
  const [isOnFocus, setIsOnFocus] = useState(false);

  const handleOnFocus = () => setIsOnFocus(true);
  const handleOnBlur = () => setIsOnFocus(false);

  const inputStyles = [styles.input, isOnFocus && styles.inputOnFocus];

  return (
    <TextInput
      style={inputStyles}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    position: "relative",
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
  inputOnFocus: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FF6C00",
  },
});
