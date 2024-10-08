import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { openModal } from '../modal/modalSlice';
import axios from 'axios';
const url = 'https://www.course-api.com/react-useReducer-cart-project';

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    // console.log(name);
    console.log(thunkAPI);
    // console.log(thunkAPIAPI.getState());
    // thunkAPI.dispatch(openModal());

    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });

      total = parseFloat(total.toFixed(2));

      state.amount = amount;
      state.total = total;
    },
    toggleAmount: (state, { payload }) => {
      const { id, type } = payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      if (type === 'inc') {
        cartItem.amount = cartItem.amount + 1;
      }
      if (type === 'dec') {
        cartItem.amount = cartItem.amount - 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

// console.log(cartSlice);

export const {
  clearCart,
  removeItem,
  increase,
  decrease,
  calculateTotals,
  toggleAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
