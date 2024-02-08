import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./feature/counter/api";

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
