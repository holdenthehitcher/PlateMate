import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import SetupScreen from "../screens/SetupScreen";
import HomeScreen from "../screens/HomeScreen";
import PortionScreen from "../screens/PortionScreen";
import AddFoodScreen from "../screens/AddFoodScreen";
import PortionAdjustmentScreen from "../screens/PortionAdjustmentScreen";

import {
  BottomTabParamList,
  SetupParamList,
  HomeParamList,
  PortionParamList,
  AddFoodParamList,
  PortionAdjustmentParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName="Setup" tabBarOptions={{ activeTintColor: "black" }}>
      <BottomTab.Screen
        name="Setup"
        component={SetupNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Portion"
        component={PortionNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="AddFood"
        component={AddFoodNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="PortionAdjustment"
        component={PortionAdjustmentNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const SetupStack = createStackNavigator<SetupParamList>();

function SetupNavigator() {
  return (
    <SetupStack.Navigator>
      <SetupStack.Screen
        name="SetupScreen"
        component={SetupScreen}
        options={{ headerTitle: "Getting Started with PlateMate" }}
      />
    </SetupStack.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerTitle: "Home" }} />
    </HomeStack.Navigator>
  );
}

const PortionStack = createStackNavigator<PortionParamList>();

function PortionNavigator() {
  return (
    <PortionStack.Navigator>
      <PortionStack.Screen
        name="PortionScreen"
        component={PortionScreen}
        options={{ headerTitle: "Portion Your Meal with PlateMate" }}
      />
    </PortionStack.Navigator>
  );
}

const AddFoodStack = createStackNavigator<AddFoodParamList>();

function AddFoodNavigator() {
  return (
    <AddFoodStack.Navigator>
      <AddFoodStack.Screen name="AddFoodScreen" component={AddFoodScreen} options={{ headerTitle: "Add A Food" }} />
    </AddFoodStack.Navigator>
  );
}

const PortionAdjustmentStack = createStackNavigator<PortionAdjustmentParamList>();

function PortionAdjustmentNavigator() {
  return (
    <PortionAdjustmentStack.Navigator>
      <PortionAdjustmentStack.Screen
        name="PortionAdjustmentScreen"
        component={PortionAdjustmentScreen}
        options={{ headerTitle: "Adjust Your Portion Size" }}
      />
    </PortionAdjustmentStack.Navigator>
  );
}
