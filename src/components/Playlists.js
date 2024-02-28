import React from 'react';
import PlaylistsDisplay from "./PlaylistsDisplay";
import PlaylistsTrackDisplay from "./PlaylistsTrackDisplay";

const Playlists = () => {
  return (
    <div className="playlists">
      <PlaylistsDisplay />
      <PlaylistsTrackDisplay />
    </div>
  );
};

export default Playlists;
