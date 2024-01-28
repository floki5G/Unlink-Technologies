import { createSlice } from "@reduxjs/toolkit";
import { DETAILS_SLICE_LABEL } from "../../constants/redux";
import { ICategory, IDescription, ISyllabus, ITutorials } from "../../types";

interface IInitialDetailsState {
  tutorials: ITutorials[];
  syllabus: ISyllabus[];
  descriptions: IDescription[];
  categories: ICategory[];
}
export const initialDetailsState: IInitialDetailsState = {
  tutorials: [],
  syllabus: [],
  descriptions: [],
  categories: [],
};

export const DetailsSlice = createSlice({
  name: DETAILS_SLICE_LABEL,
  initialState: initialDetailsState,
  reducers: {
    // ? Update shop all data
    updateDetailsStatus: (_, action) => {
      return action.payload;
    },

    // ? add new data by property
    updateAddNewByProperty: (state, action) => {
      const { property, data } = action.payload;
      if (property in state) {
        state[property as keyof typeof state].push(data);
      }
    },

    // ? update specific category data by id
    updateCategoryById: (state, action) => {
      const { id, data } = action.payload;
      const index = state.categories.findIndex((item) => item.id === id);
      state.categories[index] = {
        ...state.categories[index],
        ...data,
      };
    },
    // ? update specific description data by id
    updateDescriptionById: (state, action) => {
      const { id, data } = action.payload;
      const index = state.descriptions.findIndex((item) => item.id === id);
      state.descriptions[index] = {
        ...state.descriptions[index],
        ...data,
      };
    },
    // ? update specific syllabus data by id
    updateSyllabusById: (state, action) => {
      const { id, data } = action.payload;
      const index = state.syllabus.findIndex((item) => item.id === id);
      state.syllabus[index] = {
        ...state.syllabus[index],
        ...data,
      };
    },
    // ? update specific tutorial data by id
    updateTutorialById: (state, action) => {
      const { id, data } = action.payload;
      const index = state.tutorials.findIndex((item) => item.id === id);
      state.tutorials[index] = {
        ...state.tutorials[index],
        ...data,
      };
      console.log(data);
    },
    // ? remove specific category data by id
    removeCategoryById: (state, action) => {
      const { id } = action.payload;
      const index = state.categories.findIndex((item) => item.id === id);
      state.categories.splice(index, 1);
    },
    // ? remove specific description data by id
    removeDescriptionById: (state, action) => {
      const { id } = action.payload;
      const index = state.descriptions.findIndex((item) => item.id === id);
      state.descriptions.splice(index, 1);
    },
    // ? remove specific syllabus data by id
    removeSyllabusById: (state, action) => {
      const { id } = action.payload;
      const index = state.syllabus.findIndex((item) => item.id === id);
      state.syllabus.splice(index, 1);
    },
    // ? remove specific tutorial data by id
    removeTutorialById: (state, action) => {
      const { id } = action.payload;
      const index = state.tutorials.findIndex((item) => item.id === id);
      state.tutorials.splice(index, 1);
    },
  },
});

// ? export action reducers
export const {
  updateAddNewByProperty,
  updateDetailsStatus,
  updateCategoryById,
  updateDescriptionById,
  updateSyllabusById,
  updateTutorialById,
  removeCategoryById,
  removeDescriptionById,
  removeSyllabusById,
  removeTutorialById,
} = DetailsSlice.actions;
