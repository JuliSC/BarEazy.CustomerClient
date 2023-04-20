import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {Beer} from "../../@types/Beer";

export interface OrderState {
  items: Beer[];
}

interface RootState {
  order: OrderState;
}

const initialState: OrderState = {
  items: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items = state.items.filter(
        (item) => item.beerName !== action.payload.beerName
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {add, remove} = orderSlice.actions;

export const selectBeers = (state: RootState) => {
  return state.order.items;
};

export default orderSlice.reducer;
