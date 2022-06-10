import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";
import SinglePage from './components/SinglePage';
import { Checkout } from './components/Checkout';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<SinglePage />} />
          <Route path="/checkout" element={<Checkout />} />

        </Routes>

      </Router>

      
    </div>
  );
}

export default App;
