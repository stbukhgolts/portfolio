import './App.css';
import React from 'react';
import happy from './happyo.jpg'

import { ResponsiveNavbar } from "react-hamburger-menus";
import "react-hamburger-menus/dist/style.css";

export const Default = () => (
  <ResponsiveNavbar
    className='responsive-navbar'
    logo={<p className='bukhgolts'>BUKHGOLTS</p>}
    styles={{
      navigation: { fontFamily: 'Arial, Helvetica, sans-serif', color: 'black' },
      navigationBarSmall: {
        paddingTop: "1em",
        backgroundColor: 'white',
      },
      navigationBarLarge: {
        width: "100%",
        paddingTop: "1em",
        backgroundColor: 'white',
      },
      navigationCardSmall: {
        backgroundColor: 'white',
      },
    }}
  >
      <ul>
        <li>ABOUT</li>
        <li>GALLERY</li>
        <li>CONTACT</li>
      </ul>

  </ResponsiveNavbar>
);

function App() {
  return (
    <div className="App">

      <Default />
      <img src={happy} alt='happy old man' className='main-pic'/>

    </div>
  );
}

export default App;
