import {createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {Beer} from "../../@types/Beer";

export interface BeerItem extends Beer {
  id: number;
}

export interface OrderState {
  items: BeerItem[];
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
      const id = Math.floor(Math.random() * 100000);
      state.items.push({id, ...action.payload});
    },
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const {add, remove} = orderSlice.actions;

export const selectBeers = (state: RootState) => {
  return state.order.items;
};

export default orderSlice.reducer;
