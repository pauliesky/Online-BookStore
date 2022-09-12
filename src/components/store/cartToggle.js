import { createSlice } from "@reduxjs/toolkit";


const cartToggleSlice = createSlice(
  {
  name: 'displayCart',
  initialState: { isDisplayed: false, notification: null },
  reducers: {
    toggle(state) {
      state.isDisplayed = !state.isDisplayed;
    },
    showNotification(state,action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  }
  }
)


export const cartToggleActions = cartToggleSlice.actions



export default cartToggleSlice.reducer;
