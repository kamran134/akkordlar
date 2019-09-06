import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import './Routers';
import { HeaderBlock, Menu } from 'components';
import Routers from './Routers';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Akkordlar</title>
      </Helmet>
      <Menu/>
      <HeaderBlock 
        title='Akkordlar'
        description='Qitara üçün mahnı akkordları'
        imageUrl='/cover.jpg' />
      <div className="container">
          <Routers/>
      </div>
    </div>
  );
}

export default App;
