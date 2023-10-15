import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text, View } from "react-native";
import userPhoto from "../../assets/images/vitaliy-avatar.jpg";
import { user } from "../db/user";

export const UserInfo = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imgwrapper}>
        <Image style={styles.photo} source={userPhoto}></Image>
      </View>
      <View>
        <Text style={styles.username}>{user.username}</Text>
        <Text style={styles.useremail}>{user.useremail}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  imgwrapper: {
    width: 60,
    height: 60,
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  username: {
    fontWeight: "700",
    fontSize: 13,
  },
  useremail: {
    fontWeight: "400",
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.8)",
  },
});
