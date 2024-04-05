import { configureStore } from "@reduxjs/toolkit";
import { isLocal } from "utils";
import coreReducer from "./Core";

const store = configureStore({
  reducer: {
    core: coreReducer,
  },
  devTools: isLocal(),
});

export default store;

export type RootState = ReturnType<(typeof store)["getState"]>;
