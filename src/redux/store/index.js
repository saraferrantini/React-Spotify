//☑️CONFIGURAZIONE DELLO STORE
// è stato creato lo store Redux utilizzando la funzione configureStore. Questo store utilizza il reducer principale (mainReducer) per gestire lo stato dell'applicazione.

//Creiamo la funzione configureStore( ) , la quale sarà la funzione principale di redux, quella che
//GENERA lo stato condiviso
// - Al suo interno sarà presente il reducer

// store.js
import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../reducers/index";

const store = configureStore({
  reducer: {
    player: playerReducer,
  },
});

export default store;
