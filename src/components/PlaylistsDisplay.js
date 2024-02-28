import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectPlaylist } from '../features/playlist/playlistSlice';

const PlaylistDisplay = () => {
  // Using useSelector to access the playlists from the Redux store
  const playlists = useSelector((state) => state.playlist.playlists);
  // Using useDispatch to get the dispatch function
  const dispatch = useDispatch();

  // Function to handle selecting a playlist
  const handleSelectPlaylist = (playlistId) => {
    dispatch(selectPlaylist(playlistId)); // Dispatching selectPlaylist action with the selected playlist's ID
  };

  return (
    <div>
      <h2>Your Playlists</h2>
      <ul>
        {Object.values(playlists).map((playlist) => (
          <li key={playlist.id} onClick={() => handleSelectPlaylist(playlist.id)}>
            {playlist.name} {/* Displaying the playlist name */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistDisplay;
