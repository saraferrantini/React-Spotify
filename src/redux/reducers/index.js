// ☑️CREAZIONE DEL REDUCERS:

//Esso è il cuore di Redux
// Si tratta di una funzione PURA, una funzione che non muta MAI i propri parametri, che NON
// effettua operazioni verso l’esterno (es. fetch) e che fornita dello stesso input, restituisce sempre lo
// stesso OUTPUT

// reducers.js
const initialState = {
  selectedAlbum: null,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_ALBUM":
      return {
        ...state,
        selectedAlbum: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
