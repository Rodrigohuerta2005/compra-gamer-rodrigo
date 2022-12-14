import { createSlice } from "@reduxjs/toolkit";
import { productos } from "../data/productos";

const productosSlice = createSlice({
  name: 'productos',
  initialState: {
    productos: productos,
    carrito: [],
    productDetail: null
  },
  reducers: {
    getProductById: (state, { payload }) => {
      console.log(payload);
      const existItem = state.productos?.map((x) => x.id === payload)
      if (existItem) {
        return {
          ...state,
          productDetail: state.productos?.find((x) => x.id === payload)
        }
      }
    },
    addCart: (state, action) => {
      const item = action.payload;
      const existItem = state.carrito.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          carrito: state.carrito.map((x) =>
            x.id === existItem.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          carrito: [...state.carrito, item],
        }
      }
    },
    removedToCart: (state, action) => {
      return {
        ...state,
        carrito: state.carrito.filter(item => item.id !== action.payload.id)
      }
    }
  }
})
export const { addCart, removedToCart, getProductById } = productosSlice.actions
export const selectProductos = (state) => state.productos.productos;
export const selectCarrito = (state) => state.productos.carrito;
export default productosSlice.reducer