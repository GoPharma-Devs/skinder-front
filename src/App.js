import logo from './images/logo.png';
import * as FaIcons from "react-icons/fa";


import './App.scss';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>SKINDER®</title>
        <link rel="canonical" href="https://skinder.mx/" />
      </Helmet>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="contenedor-botones">
            <a href="https://www.facebook.com/skinder.mx"> <FaIcons.FaFacebook></FaIcons.FaFacebook></a>

            <a href="https://www.instagram.com/skinder.mx/"><FaIcons.FaInstagram></FaIcons.FaInstagram></a>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
