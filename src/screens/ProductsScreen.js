import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  Pressable,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productsSlice";
import { useEffect, useState } from "react";

import { SearchBar } from "react-native-elements";

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [shoes, setShoes] = useState([]);
  const changeHandler = (event) => {
    console.log(event);
    setText(event);
  };

  const products = useSelector((state) => state.products.products);

  const data = products.filter((item) => {
    const searchTerm = text;
    const fullname = item.name;
    return fullname.startsWith(searchTerm);
  });

  return (
    <View>
      <SearchBar
        placeholder="Search Shoes..."
        onChangeText={changeHandler}
        value={text}
        style={{ backgroundColor: "white" }}
      />
      {/* <View style={styles.itemContainer}>
        <Pressable style={styles.button} onPress={dataSorted}>
          <Text style={styles.buttonText}>A</Text>
        </Pressable>
      </View> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id));

              navigation.navigate("Product Details", { id: item._id });
            }}
            style={styles.itemContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text>{item.name}</Text>
          </Pressable>
        )}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: "50%",
    padding: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProductsScreen;
