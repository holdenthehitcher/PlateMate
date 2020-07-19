import * as WebBrowser from "expo-web-browser";
import React, { Component, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import FOOD_ITEMS from "../../redux/FOOD_ITEMS";

import Colors from "../../constants/Colors";
import { MonoText } from "../../components/StyledText";

const Food = ({ item }: { item: any }) => (
  <View>
    {/*add swipe to delete item*/}
    <Text>{item.name} - {item.calories} Calories</Text>
  </View>
);

const AddFoodList = () => {
  return (
    <>
      <View>
        <SearchBar placeholder="Search Foods" />
      </View>
      <View>
        <FlatList
          data={FOOD_ITEMS}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Food item={item} />}
        />
      </View>
    </>
  );
};

export default AddFoodList;
