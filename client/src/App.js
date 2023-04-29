import React from "react";
import Login from "./component/Login";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import './index.css'
import Register from "./component/Register";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
    <Route path ='/login' Component={Login}/>
    <Route path ='/register' Component={Register}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
