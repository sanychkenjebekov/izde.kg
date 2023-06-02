import './App.scss';
import Header from "./companents/Header";
import Footer from "./companents/Footer";
import Agents from "./companents/Agents/agents";
import Login from "./companents/Login/login";

function App() {
    return (
        <div className="App">
            <Header/>
            {/* <Agents/> */}
            <Login/>
            <Footer/>

        </div>
    );
}

export default App;
