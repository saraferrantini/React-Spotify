import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//css
import "../src/components/style.css";
//navbar
import MyNavbar from "./components/MyNavbar";
//footer
import MyFooter from "./components/MyFooter";
//MainContent
import MainContent from "./components/MainContent";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar */}
        <MyNavbar />
        {/* MainContent */}
        <MainContent />
      </div>
      {/* footer */}
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;
