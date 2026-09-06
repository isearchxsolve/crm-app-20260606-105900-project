import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ContactList from './ContactList';
import AddContact from './AddContact';

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get('/api/contacts');
      setContacts(response.data);
    };
    fetchContacts();
  }, []);

  const addContact = async (contact) => {
    const response = await axios.post('/api/contacts', contact);
    setContacts([...contacts, response.data]);
  };

  return (
    <div>
      <h1>CRM App</h1>
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;