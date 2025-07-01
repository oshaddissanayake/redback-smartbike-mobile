import { createSlice } from "@reduxjs/toolkit";

export interface LayoutState {
  layoutType: string;
  leftSidebarType: string;
  layoutModeType: string;
  layoutWidthType: string;
  layoutPositionType: string;
  topbarThemeType: string;
  leftsidbarSizeType: string;
  leftSidebarViewType: string;
  leftSidebarImageType: string;
  preloader: boolean;
  sidebarVisibilitytype: string;
}

const initialState: LayoutState = {
  layoutType: "vertical",
  leftSidebarType: "light",
  layoutModeType: "light",
  layoutWidthType: "fluid",
  layoutPositionType: "fixed",
  topbarThemeType: "light",
  leftsidbarSizeType: "lg",
  leftSidebarViewType: "default",
  leftSidebarImageType: "none",
  preloader: false,
  sidebarVisibilitytype: "show",
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    changeLayout: (state, action) => {
      state.layoutType = action.payload;
    },
    changeSidebarTheme: (state, action) => {
      state.leftSidebarType = action.payload;
    },
    changeLayoutMode: (state, action) => {
      state.layoutModeType = action.payload;
    },
    changeLayoutWidth: (state, action) => {
      state.layoutWidthType = action.payload;
    },
    changeLayoutPosition: (state, action) => {
      state.layoutPositionType = action.payload;
    },
    changeTopbarTheme: (state, action) => {
      state.topbarThemeType = action.payload;
    },
    changeLeftsidebarSizeType: (state, action) => {
      state.leftsidbarSizeType = action.payload;
    },
    changeLeftsidebarViewType: (state, action) => {
      state.leftSidebarViewType = action.payload;
    },
    changeSidebarVisibility: (state, action) => {
      state.sidebarVisibilitytype = action.payload;
    },
  },
});

export const {
  changeLayout,
  changeSidebarTheme,
  changeLayoutMode,
  changeLayoutWidth,
  changeLayoutPosition,
  changeTopbarTheme,
  changeLeftsidebarSizeType,
  changeLeftsidebarViewType,
  changeSidebarVisibility,
} = layoutSlice.actions;

export default layoutSlice.reducer;

