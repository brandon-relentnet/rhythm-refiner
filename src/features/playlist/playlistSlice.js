import { createSlice } from '@reduxjs/toolkit';

// Example tracks for our playlists
const exampleTracks = [
    { name: 'Track 1', artist: 'Artist 1' },
    { name: 'Track 2', artist: 'Artist 2' },
    { name: 'Track 3', artist: 'Artist 3' },
  ];
  
  // Example playlists
  const examplePlaylists = {
    '1': {
      id: '1',
      name: 'Chill Vibes',
      tracks: [exampleTracks[0], exampleTracks[1]],
    },
    '2': {
      id: '2',
      name: 'Workout Energy',
      tracks: [exampleTracks[1], exampleTracks[2]],
    },
    '3': {
      id: '3',
      name: 'Study Session',
      tracks: [exampleTracks[0], exampleTracks[2]],
    },
  };
  
  const initialState = {
    playlists: examplePlaylists,
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
