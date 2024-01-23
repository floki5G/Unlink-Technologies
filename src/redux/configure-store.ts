import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CommonSlice } from "./slices/common";
import { listenerMiddleware } from "./middleware";

export const makeStore = () =>
  configureStore({
    reducer: {
      // ? add reducers here
      common: CommonSlice.reducer,
    },
    preloadedState: {},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(listenerMiddleware.middleware),
  });

const store = makeStore();

export default store;

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
