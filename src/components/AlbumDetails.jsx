//AlbumDetails
import React from "react";

function AlbumDetails({ album }) {
  return (
    <div className="album-details">
      <img src={album.cover_medium} alt="Album Cover" style={{ marginBottom: "10px" }} />
      <h3>{album.title}</h3>
      {album.artist && <p>Artist: {album.artist.name}</p>}
      <p>Genre: {album.genre}</p>
      <p>Release Date: {album.release_date}</p>
    </div>
  );
}

export default AlbumDetails;
