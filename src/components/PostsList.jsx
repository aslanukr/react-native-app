import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text, View, FlatList } from "react-native";
import { MapPin, MessageCircle, ThumbsUp } from "react-native-feather";
import { UserInfo } from "./UserInfo";

const data = require("../db/posts.json");

export const PostsList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => <UserInfo />}
      renderItem={({ item }) => (
        <View style={styles.postwrapper}>
          <Image style={styles.photo} source={{ uri: item.photo }} />
          <View style={styles.detailswrap}>
            <Text style={styles.title}>{item.description}</Text>
            <View style={styles.extra}>
              <View style={styles.extrainfo}>
                <View style={styles.comments}>
                  <MessageCircle
                    stroke="rgba(255, 108, 0, 1)"
                    fill="rgba(255, 108, 0, 1)"
                    width={24}
                    height={24}
                    style={{ transform: [{ rotateY: "180deg" }] }}
                  />
                  <Text style={styles.extratext}>{item.comments}</Text>
                </View>
                <View style={styles.likes}>
                  <ThumbsUp
                    stroke="rgba(255, 108, 0, 1)"
                    fill="#ffff"
                    width={24}
                    height={24}
                  />
                  <Text style={styles.extratext}>{item.likes}</Text>
                </View>
              </View>

              <View style={styles.place}>
                <MapPin
                  stroke="rgba(189, 189, 189, 1)"
                  fill="#fff"
                  width={24}
                  height={24}
                />
                <Text style={styles.extratext}>{item.place}</Text>
              </View>
            </View>
          </View>
        </View>
      )}
      ListFooterComponent={<View style={styles.bottomMargin} />}
    />
  );
};

const styles = StyleSheet.create({
  postwrapper: {
    marginTop: 32,
    gap: 8,
  },
  photo: {
    height: 240,
    borderRadius: 8,
  },
  detailswrap: {
    flexWrap: "wrap",
    gap: 8,
  },
  title: {
    maxWidth: 352,
    flexWrap: "wrap",
    fontWeight: "500",
    fontSize: 16,
  },
  extra: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  extrainfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  place: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  extratext: {
    fontWeight: "400",
    fontSize: 16,
  },
  bottomMargin: {
    marginBottom: 32,
  },
});
