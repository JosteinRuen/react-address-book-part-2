import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';

function ContactPage({ contacts }) {
  return (
    <main className="dashboard">
      <h2>Contacts</h2>
      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} />} />
        <Route path="/view/:id" element={<ContactDetail contacts={contacts} />} />
      </Routes>
    </main>
  );
}

export default ContactPage;