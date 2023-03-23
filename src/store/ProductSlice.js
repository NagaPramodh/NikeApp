import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products";
const InitialSlice = { products: products, selectedProduct: null };

export const productsSlice = createSlice({
  name: "products",
  initialState: InitialSlice,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.paylod;
      // console.log(productId, selectedProduct, "productsSlice");
      state.selectedProduct = state.products.find((p) => p.id === productId);
    },
  },
});
