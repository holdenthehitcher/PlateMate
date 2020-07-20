import * as WebBrowser from "expo-web-browser";
import React, { Component, useState } from "react";
import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";

import { ADD_FOOD, DELETE_FOOD } from "../../redux/FoodItemsRedux";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";

const foodItems = useSelector((state) => state);

const AddFoodList = () => {
  const foodList = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteFood = ({ item }: any) =>
    dispatch({
      type: DELETE_FOOD,
      payload: item,
    });

  const Food = ({ item }: { item: any }) => (
    <View>
      {/*add swipe to delete item*/}
      <Text>
        {item.name} - {item.calories} Calories
      </Text>
      <TouchableOpacity onPress={() => deleteFood(item)}>
        <Text> Remove </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View>
        <SearchBar placeholder="Search Foods" />
      </View>
      <View>
        <FlatList data={} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <Food item={item} />} />
      </View>
    </>
  );
};

export default AddFoodList;
