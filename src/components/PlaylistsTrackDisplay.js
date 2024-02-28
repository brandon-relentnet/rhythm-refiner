import React from 'react';
import { useSelector } from 'react-redux';

const PlaylistsTrackDisplay = () => {
  const currentPlaylistId = useSelector((state) => state.playlist.currentPlaylistId);
  const playlist = useSelector((state) => state.playlist.playlists[currentPlaylistId]);

  if (!playlist) return null; // Or return a placeholder message

  return (
    <div>
      <h2>{playlist.name}</h2>
      <ul>
        {playlist.tracks.map((track, index) => (
          <li key={index}>{track.name} - {track.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistsTrackDisplay;
