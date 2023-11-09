import { createSlice } from '@reduxjs/toolkit';

/*======== REDUX-TOOLKIT STORE =======*/
export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilter } = filterSlice.actions;
