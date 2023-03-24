import {
  StyleSheet,
  Text,
  Image,
  FlatList,
  Pressable,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import productsSlice from "../store/productsSlice";
import { useState } from "react";
import { SearchBar } from "react-native-elements";

const ProductsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [asc, setAsc] = useState(false);
  const [dsc, setDsc] = useState(false);
  const [reset, setReset] = useState(true);
  const changeHandler = (event) => {
    setText(event);
  };

  const products = useSelector((state) => state.products.products);

  let sortedProducts = products
    .slice()
    .sort((p1, p2) => (p1.fullname < p2.name ? 1 : p1.name > p2.name ? -1 : 0));
  const dataAsc = sortedProducts.map((item) => {
    return item;
  });
  const dataDsc = sortedProducts
    .slice()
    .reverse()
    .map((item) => {
      return item;
    });

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
        style={{ backgroundColor: "white", paddingLeft: 10 }}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button}
          onPress={() => {
            setAsc(true);
            setDsc(false);
            setReset(false);
          }}
        >
          <Text style={styles.buttonText}>Sort by A</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            setAsc(false);
            setDsc(true);
            setReset(false);
          }}
        >
          <Text style={styles.buttonText}>Sort by Z</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            setAsc(false);
            setDsc(false);
            setReset(true);
          }}
        >
          <Text style={styles.buttonResetText}>Reset Filters</Text>
        </Pressable>
      </View>
      <FlatList
        data={reset ? data : asc ? dataDsc : dataAsc}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => {
              dispatch(productsSlice.actions.setSelectedProduct(item.id));

              navigation.navigate("Product Details", { id: item._id });
            }}
            style={styles.itemContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.namestyle}>{item.name}</Text>
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
    borderRadius: 500,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    position: "initial",
    backgroundColor: "black",
    bottom: 30,
    width: "30%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 500,
    borderWidth: "4",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
  buttonResetText: {
    color: "white",
    fontWeight: "500",
    fontSize: 12,
    height: 21,
  },
  namestyle: {
    fontWeight: "500",
    fontSize: 20,
    alignSelf: "center",
  },
});

export default ProductsScreen;
