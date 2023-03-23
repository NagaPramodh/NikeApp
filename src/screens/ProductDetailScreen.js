import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";
// import products from "../data/products";

const ProductDetailScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  console.log(product, "product");
  // const product = products[0];
  const { width } = useWindowDimensions();
  return (
    <View>
      <ScrollView>
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>Rs.{product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 34, fontWeight: "500", marginVertical: 10 },
  price: { fontSize: 30, fontWeight: "500" },
  description: {
    fontSize: 18,
    fontWeight: "300",
    marginVertical: 10,
    lineHeight: 30,
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    // marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});
export default ProductDetailScreen;
