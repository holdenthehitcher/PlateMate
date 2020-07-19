import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";

type Props = {
  response: any;
};
const options = {
  title: "my pic app",
  takePhotoButtonTitle: "Take Camera Photo",
  chooseFromLibraryButtonTitle: "Choose Photo from Library",
};

const ImageInput: React.FC<Props> = ({ response }) => {
  const [avatar, setAvatar] = useState(null);

  const myfun = () => {
    ImagePicker.showImagePicker(options, (response) => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Add Your Image</Text>
      <TouchableOpacity
        style={{ backgroundColor: "green", margin: 10, padding: 10 }}
        onPress={myfun}
      ></TouchableOpacity>
      <Text style={{ color: "#fff" }}>Select Image</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageInput;
