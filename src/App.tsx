import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Header} from "./Compenents/Header";
import {Contacts} from "./Compenents/Contacts";

function App() {
  return (
    <div className="Container">
      <div className={"Sidebar padding"}>
        <Header value={"Contacts"}/>
        <Contacts/>
      </div>
      <div className={"Content"}>
        Casdasd
      </div>
    </div>
  );
}

export default App;
