import React from 'react';

const ContactList = ({ contacts }) => {
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>{name}</p>
      </li>
    ))}
  </ul>;
};

export default ContactList;
