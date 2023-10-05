import "./App.css";
import "./reset.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Product from "./Components/Product/Product";
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import MainCart from "./Components/MainCart/MainCart";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Cart" element={<MainCart />} />
          <Route path="/*" element={<Product location={window.location}/>} />

        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
