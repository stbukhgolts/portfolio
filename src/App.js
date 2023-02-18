import './App.css';
import React from 'react';
import happy from './happyo.jpg';

import { ResponsiveNavbar } from 'react-hamburger-menus';
import 'react-hamburger-menus/dist/style.css';
import { ImageViewer } from 'react-image-viewer-dv';
import img1 from './1.jpg';
import img2 from './2.jpg';



export const Default = () => (
  <ResponsiveNavbar
    className="responsive-navbar"
    logo={<p className="bukhgolts">BUKHGOLTS</p>}
    styles={{
      navigation: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        color: 'black',
      },
      navigationBarSmall: {
        paddingTop: '1em',
        backgroundColor: 'white',
      },
      navigationBarLarge: {
        width: '100%',
        paddingTop: '1em',
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

export const YourComponent = () => {
  return (
    <div className="gallery">
      <h1>Image gallery</h1>

      <div className="images">
        <ImageViewer>
          <img src={img1} alt="1" />
        </ImageViewer>
        <ImageViewer>
          <img src={img2} alt="1" />
        </ImageViewer>{' '}
        <ImageViewer>
          <img src={happy} alt="1" />
        </ImageViewer>{' '}

      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Default />
      <img src={happy} alt="happy old man" className="main-pic" />
      <YourComponent />
    </div>
  );
}

export default App;
