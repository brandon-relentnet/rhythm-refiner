import { configureStore } from '@reduxjs/toolkit';
import playlistReducer from '../features/playlist/playlistSlice';
import trackReducer from '../features/track/trackSlice';

export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
    track: trackReducer,
  },
});
