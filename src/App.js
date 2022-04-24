import logo from './images/logo.png';
import * as FaIcons from "react-icons/fa";


import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="contenedor-botones">
          <a href="https://www.facebook.com/skinder.mx"> <FaIcons.FaFacebook></FaIcons.FaFacebook></a>

          <a href="https://www.instagram.com/skinder.mx/"><FaIcons.FaInstagram></FaIcons.FaInstagram></a>
        </div>
      </header>
    </div>
  );
}

export default App;
