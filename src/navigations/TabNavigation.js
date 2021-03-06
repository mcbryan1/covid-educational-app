import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";
import PostWall from "../screens/PostWall";
import NewsWall from "../screens/NewsWall";
import Tracker from "../screens/Tracker";
import SettingScreen from "../screens/Settings";

const BottomTabs = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="post"
      tabBarOptions={{
        activeTintColor: "#668cff",
        style: {
          height: 60,
          paddingBottom: 5,
          backgroundColor: "#fff",
          shadowColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <BottomTabs.Screen
        name="post"
        component={PostWall}
        options={{
          tabBarLabel: "Views",
          tabBarIcon: ({ color }) => (
            <Entypo name="list" size={26} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="news"
        component={NewsWall}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <Entypo name="news" size={26} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="tracker"
        component={Tracker}
        options={{
          tabBarLabel: "Tracker",
          tabBarIcon: ({ color }) => (
            <AntDesign name="linechart" size={26} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="profile"
        component={SettingScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={26} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default TabNavigation;
