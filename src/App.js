import './App.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./companents/Header";
import Footer from "./companents/Footer";
import Agents from "./companents/Agents/agents";
import Login from "./companents/Login/login";
import Home from "./companents/Home";





function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/agents'} element={<Agents/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
