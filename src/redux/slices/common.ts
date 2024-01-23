import { createSlice } from "@reduxjs/toolkit";
import { COMMON_SLICE_LABEL } from "../../constants/redux";

interface IInitialCommonState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
}
export const initialCommonState: IInitialCommonState = {
  isSidebarOpen: false,
  isModalOpen: false,
};

export const CommonSlice = createSlice({
  name: COMMON_SLICE_LABEL,
  initialState: initialCommonState,
  reducers: {
    // ? Update shop all data
    updateIsSidebarOpen: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    updateIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

// ? export action reducers
export const { updateIsSidebarOpen, updateIsModalOpen } = CommonSlice.actions;
