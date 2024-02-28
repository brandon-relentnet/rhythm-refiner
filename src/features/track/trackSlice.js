import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tracks: {},
};

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    addTrack: (state, action) => {
      const track = action.payload;
      state.tracks[track.id] = track;
    },
    updateTrack: (state, action) => {
      const { id, ...details } = action.payload;
      if (state.tracks[id]) {
        state.tracks[id] = { ...state.tracks[id], ...details };
      }
    },
    removeTrack: (state, action) => {
      delete state.tracks[action.payload];
    },
  },
});

export const { addTrack, updateTrack, removeTrack } = trackSlice.actions;
export default trackSlice.reducer;
