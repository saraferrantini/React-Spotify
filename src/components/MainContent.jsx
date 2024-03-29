import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectAlbum } from "../redux/action/actions";

//Usiamo lo stato locale per gestire i dati dei generi musicali (rock, pop e hipHop) e lo stato di caricamento (isLoading).
//☑️UseState - utilizzati due useState:

function MainContent() {
  //1)Il primo  gestisce i dati relativi ai generi musicali. Inizialmente, tutti i generi sono vuoti ([]), e man mano che i dati vengono caricati, vengono aggiornati utilizzando la funzione setGenreData.

  const [genreData, setGenreData] = useState({
    rock: [],
    pop: [],
    hipHop: [],
  });

  //2)Il secondo gestisce lo stato di caricamento dei dati. Inizialmente, viene impostato su true, indicando che i dati stanno ancora caricando. Quando i dati sono stati caricati correttamente, questo stato viene impostato su false.
  const [isLoading, setIsLoading] = useState(true);

  //☑️useDispatch: utilizzato per ottenere un riferimento alla funzione dispatch, che verrà utilizzato per inviare azioni al Redux store quando viene cliccata una copertina dell'album.
  const dispatch = useDispatch();

  //☑️useEffect per effettuare una chiamata API asincrona per recuperare i dati relativi ai generi musicali una volta che il componente viene montato
  useEffect(() => {
    const fetchData = async () => {
      try {
        const responses = await Promise.all([
          fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=rock"),
          fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=pop"),
          fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=hiphop"),
        ]);
        const data = await Promise.all(responses.map((response) => response.json()));
        setGenreData({
          rock: data[0].data.slice(0, 4),
          pop: data[1].data.slice(0, 4),
          hipHop: data[2].data.slice(0, 4),
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  //Rendering dei dati:Per ciascun genere musicale, viene generata una sezione che mostra le copertine degli album. Ogni copertina di album è cliccabile e,
  // quando viene cliccata, viene chiamata la funzione handleSongClick, che dispaccia un'azione per selezionare l'album.
  const handleSongClick = (albumDetails) => {
    dispatch(selectAlbum(albumDetails));
  };

  return (
    <div className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      {/* operatore ternario che controlla se isLoading è vero o falso. Se isLoading è vero, viene visualizzato un paragrafo con il testo "Loading...". */}
      {/* Se isLoading è falso (cioè i dati sono stati caricati), il codice all'interno delle parentesi tonde successive viene eseguito. */}
      {/* all'interno del blocco ternario, vengono visualizzate le sezioni per i generi musicali (Rock Classics, Pop Classics e Hip-Hop Classics) solo quando */}
      {/* isLoading è falso, altrimenti viene mostrato il messaggio "Loading...". */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Ogni album mostra il titolo, l'artista e un'icona per indicare se è stato aggiunto ai preferiti. */}
          {/* Rock Classics */}
          <h2 className="text-white">Rock Classics</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {genreData.rock.map((song, index) => (
              <Col
                key={index}
                className="text-center position-relative myCardSongs"
                onClick={() => handleSongClick(song.album)}
              >
                <img src={song.album.cover_medium} variant="top" className="img-fluid" alt={song.title} />
                <span className="myPlayIcon">
                  <i className="far fa-play-circle"></i>
                </span>
                <Row>
                  <div>
                    <Link to={`/album/${song.album.id}`} className="text-decoration-none">
                      <p className="m-0">
                        Album:{" "}
                        {song.album.title.length < 16 ? song.album.title : `${song.album.title.substring(0, 12)}...`}
                      </p>
                    </Link>
                    <p className="d-flex justify-content-center align-items-center">
                      <Link to={`/artist/${song.artist.id}`} className="text-decoration-none">
                        Artist: {song.artist.name}
                      </Link>
                      <i className="fas fa-heart ml-2" style={{ color: "red" }}></i>
                    </p>
                  </div>
                </Row>
              </Col>
            ))}
          </div>

          {/* Pop Classics */}
          <h2 className="text-white">Pop Classics</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {genreData.pop.map((song, index) => (
              <Col
                key={index}
                className="text-center position-relative myCardSongs"
                onClick={() => handleSongClick(song.album)}
              >
                <img src={song.album.cover_medium} variant="top" className="img-fluid" alt={song.title} />
                <span className="myPlayIcon">
                  <i className="far fa-play-circle"></i>
                </span>
                <Row>
                  <div>
                    <Link to={`/album/${song.album.id}`} className="text-decoration-none">
                      <p className="m-0">
                        Album:{" "}
                        {song.album.title.length < 16 ? song.album.title : `${song.album.title.substring(0, 12)}...`}
                      </p>
                    </Link>
                    <p className="d-flex justify-content-center align-items-center">
                      <Link to={`/artist/${song.artist.id}`} className="text-decoration-none">
                        Artist: {song.artist.name}
                      </Link>
                      <i className="fas fa-heart ml-2" style={{ color: "red" }}></i>
                    </p>
                  </div>
                </Row>
              </Col>
            ))}
          </div>

          {/* Hip-Hop Classics */}
          <h2 className="text-white">Hip-Hop Classics</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {genreData.hipHop.map((song, index) => (
              <Col
                key={index}
                className="text-center position-relative myCardSongs"
                onClick={() => handleSongClick(song.album)}
              >
                <img src={song.album.cover_medium} variant="top" className="img-fluid" alt={song.title} />
                <span className="myPlayIcon">
                  <i className="far fa-play-circle"></i>
                </span>
                <Row>
                  <div>
                    <Link to={`/album/${song.album.id}`} className="text-decoration-none">
                      <p className="m-0">
                        Album:{" "}
                        {song.album.title.length < 16 ? song.album.title : `${song.album.title.substring(0, 12)}...`}
                      </p>
                    </Link>
                    <p className="d-flex justify-content-center align-items-center">
                      <Link to={`/artist/${song.artist.id}`} className="text-decoration-none">
                        Artist: {song.artist.name}
                      </Link>
                      <i className="fas fa-heart ml-2" style={{ color: "red" }}></i>
                    </p>
                  </div>
                </Row>
              </Col>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default MainContent;
