import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact._id}>{contact.name} - {contact.email}</li>
      ))}
    </ul>
  );
};

export default ContactList;