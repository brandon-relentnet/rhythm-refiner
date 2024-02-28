import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlists: {},
  currentPlaylistId: null,
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addPlaylist: (state, action) => {
      const playlist = action.payload;
      state.playlists[playlist.id] = playlist;
    },
    selectPlaylist: (state, action) => {
      state.currentPlaylistId = action.payload;
    },
    removePlaylist: (state, action) => {
      delete state.playlists[action.payload];
      if (state.currentPlaylistId === action.payload) {
        state.currentPlaylistId = null;
      }
    },
  },
});

export const { addPlaylist, selectPlaylist, removePlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
