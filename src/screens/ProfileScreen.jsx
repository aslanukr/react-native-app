import React from "react";
import { ImageBackground, VirtualizedList } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import { ProfilePosts } from "../components/ProfilePosts";
import photoBg from "../../assets/images/photo-bg.jpg";
import { Image } from "react-native";
import { X } from "react-native-feather";
import { user } from "../db/user";
import userPhoto from "../../assets/images/vitaliy-avatar.jpg";
import { LogOutBtn } from "../components/LogOutBtn";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={photoBg}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.wrapper}>
          <View style={styles.userwrapper}>
            <View style={styles.imageWrapper}>
              <Image source={userPhoto} style={styles.userImage} />
              <View style={styles.iconWrapper}>
                <X width={18} height={18} color="rgba(189, 189, 189, 1)" />
              </View>
            </View>
            <View style={styles.logout}>
              <LogOutBtn />
            </View>
            <Text style={styles.username}>{user.username}</Text>
          </View>

          <ProfilePosts />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100vw",
    height: "100vh",
  },
  imageBackground: {
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  wrapper: {
    marginTop: 287,
    position: "relative",
    backgroundColor: "#ffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },
  userwrapper: {
    alignItems: "center",
  },
  userImage: {
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
    right: 111,
    borderColor: "rgba(189, 189, 189, 1)",
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
    backgroundColor: "#F6F6F6",
    transform: [{ translateX: 123 }],
  },
  username: {
    marginTop: 92,
    fontSize: 30,
    fontWeight: "500",
  },
  logout: {
    position: "absolute",
    top: 22,
    right: 0,
  },
});
