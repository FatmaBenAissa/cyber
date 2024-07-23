import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Crypto from "./components/Crypto";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import Home2 from "./components/Home2";
import Application from "./components/Application";
import Algorithms from "./components/Algorithms";



function App() {
  return (
    <div>

      <div className="container-fluid">
   {/* <Crypto/> */}
        <Routes>
        <Route path="/" element={ <Home/> } />
          <Route path="/home2" element={ <Home2/> } />
           <Route path="/application" element={ <Application/> } />
            <Route path="/algorithms" element={ <Algorithms/> } />
      
      </Routes>
      </div>
    </div>
  );
}

export default App;
