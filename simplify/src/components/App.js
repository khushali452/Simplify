import React from "react";
import './App.css';

import Header from "../../../src/components/Header";
import AddContact from "../../../src/components/AddContact";
import ContactList from "../../../src/components/ContactList";


function App() {
  const contacts =[
    {
      id:"1",
      name:"khushali",
      email:"khushali@gmail.com",
    },
    {
      id:"2",
      name:"Supal",
      email:"supal@gmail.com"
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
