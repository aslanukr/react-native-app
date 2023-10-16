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
    paddingHorizontal: 16,
    backgroundColor: "#ffff",
  },
});
