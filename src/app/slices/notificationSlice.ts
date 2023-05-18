import {createSlice, current} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import {Notification} from "../../@types/Notification";

export interface NotificationState {
  notifications: Notification[];
}

interface RootState {
  notification: NotificationState;
}

const initialState: NotificationState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      const id = Math.floor(Math.random() * 100000);
      state.notifications.push({id, message: action.payload});
      console.log(state.notifications);
    },
    removeNotification: (state, action) => {
      state.notifications = state.notifications.filter((notification) => {
        notification.id !== action.payload.id;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {addNotification, removeNotification} = notificationSlice.actions;

export const selectNotifications = (state: RootState) => {
  return state.notification.notifications;
};

export default notificationSlice.reducer;
