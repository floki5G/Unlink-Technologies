import { createSlice } from "@reduxjs/toolkit";
import { COMMON_SLICE_LABEL } from "../../constants/redux";
import { IPaginatedResponse, IRocket } from "../../interface";

interface IInitialCommonState {
  isSidebarOpen: boolean;
  isModalOpen: boolean;
  rockets: IRocket[];
  uncomingLaunches: IPaginatedResponse
  previousLaunches: IPaginatedResponse
  activeRocketId: string
}
export const initialCommonState: IInitialCommonState = {
  isSidebarOpen: false,
  isModalOpen: false,
  rockets: [],
  uncomingLaunches: {
    docs: [],
    totalDocs: 0,
    offset: 0,
    limit: 0,
    totalPages: 0,
    page: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null
  },
  previousLaunches: {
    docs: [],
    totalDocs: 0,
    offset: 0,
    limit: 0,
    totalPages: 0,
    page: 0,
    pagingCounter: 0,
    hasPrevPage: false,
    hasNextPage: false,
    prevPage: null,
    nextPage: null
  },
  activeRocketId: ""
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
    // ? rockets 
    updateRockets: (state, action) => {
      state.rockets = action.payload;
    },
    // ? active rocket
    updateActiveRocketId: (state, action) => {
      state.activeRocketId = action.payload;
    },

    // ? upcoming launches
    updateUpcomingLaunches: (state, action) => {
      state.uncomingLaunches = action.payload;
    },
    // ? previous launches
    updatePreviousLaunches: (state, action) => {
      state.previousLaunches = action.payload;
    }

  },
});

// ? export action reducers
export const { updateIsSidebarOpen, updateActiveRocketId, updateIsModalOpen, updateRockets, updateUpcomingLaunches, updatePreviousLaunches } = CommonSlice.actions;
