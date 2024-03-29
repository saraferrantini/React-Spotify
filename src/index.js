import React from "react";
import ReactDOM from "react-dom/client";
import "../src/index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

import store from "./redux/store";
import { Provider } from "react-redux"; // react-redux fornisce i componenti e gli hooks necessari per integrare uno store Redux all'interno di un'applicazione React

//Redux è stato integrato utilizzando il componente Provider fornito da react-redux. Questo permette ai componenti di accedere allo store Redux.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // circondiamo App dal Provider, a cui abbiamo fornito la prop "store"
  <Provider store={store}>
    <App />
  </Provider>
);

// ☑️Passaggi
//- importare LO STORE
//- importare un componente chiamato PROVIDER da react-redux
//- circondare <App /> con il tag <Provider>
//- dare a <Provider > lo store come PROP
