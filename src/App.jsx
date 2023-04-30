import React from 'react';
import './App.css';

import Explore from './components/Explore';
import Mobilenav from './components/Mobilenav';

import Reelslist from './components/Reelslist';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div className="h-[100vh] bg-white grid place-items-center-center">
      <Sidenav />
      <Reelslist />
      <Mobilenav />
      {/* <Explore className="hidden md:visible left-44 absolute" /> */}
    </div>
  );
}

export default App;
