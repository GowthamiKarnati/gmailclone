import { createSlice } from '@reduxjs/toolkit';


export const selectoptionsSlice = createSlice({
  name: 'selectoptions',
  initialState: {
    selected: false,
    selectedmail: false,
  },
  reducers: {
    ticked: (state) => {
      state.selected = true;
    },
    unticked: (state) => {
      state.selected = false;
    },
    tickedmail: (state) => {
        state.selectedmail = true;
      },
    untickedmail: (state) => {
        state.selectedmail = false;
    },
  },
});

export const { ticked, unticked, tickedmail, untickedmail } = selectoptionsSlice.actions;


export const selectOption = (state) => state.selectoptions.selected;

export const selectSingleOption = (state) => state.selectoptions.selectedmail;

export default selectoptionsSlice.reducer;
