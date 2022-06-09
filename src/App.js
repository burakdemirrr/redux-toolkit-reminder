import logo from './logo.svg';
import './App.css';
import {AiFillShopping} from "react-icons/ai"
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <AiFillShopping className='icon'/>
      <Home/>
    </div>
  );
}

export default App;
