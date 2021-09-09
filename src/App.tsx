import React, {useState} from 'react';
import './App.scss';
import {Header} from "./Compenents/Header";
import {Contacts} from "./Compenents/Contacts";
import {ContactFormComponent} from "./Compenents/ContactFormComponent";

function App() {
  const [showForm, setShowForm] = useState(false);

  const createContact = () => {
    setShowForm(!showForm);
  }

  return (
    <div className="Container">
      <div className={"Sidebar padding"} style={{position: "relative"}}>
        <Header value={"Contacts"}/>
        <a onClick={createContact}
           style={{position: 'absolute', top: 0, right: 0}}
           className={'button text-large'}
        >
          +
        </a>
        <Contacts/>
      </div>
      <div className={"Content"}>
        {showForm ?
          <ContactFormComponent/> :
          <div>
            Welcome
          </div>
        }
      </div>
    </div>
  );
}

export default App;
