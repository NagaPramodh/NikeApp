import { NavigationContainer } from "@react-navigation/native";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import ProductScreen from "./screens/ProductScreen";
import ShoppingCart from "./screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: "white" } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate("Cart")}
                style={{ flexDirection: "row", marginRight: 10 }}
              >
                <FontAwesome5 name="shopping-cart" size={18} color="brown" />
                <Text
                  style={{ fontSize: 16, fontWeight: "500", marginLeft: 5 }}
                >
                  1
                </Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="Product Details" component={ProductDetailScreen} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
