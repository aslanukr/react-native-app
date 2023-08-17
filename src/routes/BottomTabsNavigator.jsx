import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "../screens/PostsScreen";
import { LogOutBtn } from "../components/LogOutBtn";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { CreatePostsScreen } from "../screens/CreatePostsScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { BackBtn } from "../components/BackBtn";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 10,
          paddingHorizontal: 82,
        },
        tabBarActiveTintColor: "#FFFFFF",
        tabBarItemStyle: styles.wrapper,
        tabBarActiveBackgroundColor: "#FF6C00",
      }}>
      <BottomTabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 17,
          },
          headerTitleAlign: "center",
          headerRight: () => <LogOutBtn />,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="grid-view"
              size={24}
              color={focused ? "#FFFFFF" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 17,
          },
          headerLeft: () => <BackBtn />,
          headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="plus"
              size={18}
              color={focused ? "#FFFFFF" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user"
              size={24}
              color={focused ? "#FFFFFF" : "rgba(33, 33, 33, 0.8)"}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = {
  wrapper: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginHorizontal: 9,
    alignItems: "center",
  },
};
