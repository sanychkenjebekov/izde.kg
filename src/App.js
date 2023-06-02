import './App.scss';
import Header from "./companents/Header";
import Footer from "./companents/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./companents/Home";

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
            <Route path={'/'} element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
