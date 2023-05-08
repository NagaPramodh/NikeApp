import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { ref, set } from "firebase/database";
import { db } from "../config";

const AddData = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const dataAddOn = () => {
    set(ref(db, "demo/" + name), {
      name: name,
      image: image,
    });
    setName("");
    setImage("");
  };
  console.log("pramodh");
  return (
    <View style={styles.container}>
      {/* <Text>Hello World</Text> */}
      <TextInput
        placeholder="name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <TextInput
        placeholder="image"
        value={image}
        onChangeText={(text) => setImage(text)}
      />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button title="add data" onPress={dataAddOn} />
    </View>
  );
};
export default AddData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
