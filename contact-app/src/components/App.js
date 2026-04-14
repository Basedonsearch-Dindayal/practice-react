import { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { v4 as uuidv4 } from 'uuid';
import AddContact from "./AddContact";
import './App.css';
import ContactList from "./ContactList";
import Header from "./Header";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  //here we retrive data from local storage Reminder:"Always write code of retrive before the storing"
  const [contacts, setContacts] = useState(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return retrievedContacts || [];
  });

  const removeContactHandler = (id) => {
    const newContactlist = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactlist);
  };
  
  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  //Here we store data in Local Storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);



  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId = {removeContactHandler} />
    </div>
  );
}

export default App;
