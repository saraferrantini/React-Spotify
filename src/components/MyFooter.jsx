// // // Footer.js

import React from "react";
import { useSelector } from "react-redux";
import AlbumDetails from "../components/AlbumDetails"; //  componente AlbumDetails
// Importa bottoni
import shuffleButton from "../assets/playerbuttons/shuffle.png";
import prevButton from "../assets/playerbuttons/prev.png";
import playButton from "../assets/playerbuttons/play.png";
import nextButton from "../assets/playerbuttons/next.png";
import repeatButton from "../assets/playerbuttons/repeat.png";

//Usiamo useSelector di Redux per estrarre lo stato della Redux store.
function MyFooter() {
  const selectedAlbum = useSelector((state) => state.player.selectedAlbum);
  console.log(selectedAlbum);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffleButton} alt="shuffle" />{" "}
                </a>
                <a href="#">
                  <img src={prevButton} alt="prev" />
                </a>
                <a href="#">
                  <img src={playButton} alt="play" />
                </a>
                <a href="#">
                  <img src={nextButton} alt="next" />
                </a>
                <a href="#">
                  <img src={repeatButton} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
            {/* Sezione per visualizzare i dettagli dell'album */}
            {selectedAlbum && (
              <div className="col-12 mt-3">
                <img src={selectedAlbum.cover_small} alt="Album Cover" className="album-cover" />
                <p>{selectedAlbum.title}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFooter;
