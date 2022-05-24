import React from 'react';


import './scss/index.scss';
import { Helmet } from 'react-helmet-async';
import Header from './containers/Header/Header';

function App() {
  return (
    <>
      <Helmet>
        <title>SKIN DER®</title>
        <link rel="canonical" href="https://skinder.mx/" />
      </Helmet>
      <div className="App">
        <Header/>
      </div>
    </>
  );
}

export default App;
