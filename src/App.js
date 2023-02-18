import './App.css';
import React from 'react'

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
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>

  </ResponsiveNavbar>
);

function App() {
  return (
    <div className="App">

      <Default />


    </div>
  );
}

export default App;
