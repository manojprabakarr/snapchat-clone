import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appslice";
import cameraReducer from "../features/camera";

export const store = configureStore({
  reducer: {
    app: appReducer,
    camera: cameraReducer,
  },
});