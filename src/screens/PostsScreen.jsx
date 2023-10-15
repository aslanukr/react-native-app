import React from "react";
import { View, StyleSheet } from "react-native";
import { PostsList } from "../components/PostsList";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <PostsList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
  },
});
