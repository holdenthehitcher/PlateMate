import React, { useState, useEffect } from "react";
import { View, Text, Modal, StyleSheet, Picker, Button } from "react-native";
import { Icon } from "react-native-elements";

type Props = {
  items: string[];
  title: string;
  value?: string;
};

const PhysicalActivityInput: React.FC<Props> = ({ title, value }) => {
  const [exerciseValue, setExerciseValue] = useState("I Do Moderate Exercise");
  useEffect(() => {
    if (value) {
      setExerciseValue(value);
    }
  }, [value]);

  const [modalVisible, setModalVisible] = useState(false);
  const items = ["I Exercise Everyday", "I Do Moderate Exercise", "I Sometimes Exercise", "I Rarely Exercise"];
  
  return (
    <>
      <Button title="Physical Activity Level" onPress={() => setModalVisible(!modalVisible)}></Button>
      <Modal animated transparent visible={modalVisible} animationType="slide" onRequestClose={() => !modalVisible}>
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <View style={styles.header}>
              <Text>{title || "What's Your Exercise Level?"}</Text>
              <Icon name="close" onPress={() => setModalVisible(!modalVisible)} />
            </View>
            <Picker selectedValue={exerciseValue} onValueChange={(value) => setExerciseValue(value)}>
              {items.map((item) => (
                <Picker.Item key={item} value={item} label={item} />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  pickerContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
  },
});

export default PhysicalActivityInput;
