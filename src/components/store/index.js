import { configureStore } from "@reduxjs/toolkit";

import cartToggleSliceReducer from "./cartToggle";
import cartControlSlice from "./cartControl";



const store = configureStore({
  reducer: {
    cartToggle: cartToggleSliceReducer,
    cartControl: cartControlSlice.reducer
  }
})




export default store