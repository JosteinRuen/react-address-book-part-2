// src/components/AddContact.jsx
import React, { useState } from 'react';

function AddContact({ addContact }) {
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    latitude: 0,
    longitude: 0,
    favouriteColour: '',
    profileImage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newContact);
    setNewContact({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      jobTitle: '',
      latitude: 0,
      longitude: 0,
      favouriteColour: '',
      profileImage: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={newContact.firstName} onChange={handleChange} required />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={newContact.lastName} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={newContact.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" name="phone" value={newContact.phone} onChange={handleChange} required />
      </div>
      <div>
        <label>Job Title:</label>
        <input type="text" name="jobTitle" value={newContact.jobTitle} onChange={handleChange} required />
      </div>
      <div>
        <label>Latitude:</label>
        <input type="number" name="latitude" value={newContact.latitude} onChange={handleChange} required />
      </div>
      <div>
        <label>Longitude:</label>
        <input type="number" name="longitude" value={newContact.longitude} onChange={handleChange} required />
      </div>
      <div>
        <label>Favourite Colour:</label>
        <input type="text" name="favouriteColour" value={newContact.favouriteColour} onChange={handleChange} required />
      </div>
      <div>
        <label>Profile Image URL:</label>
        <input type="text" name="profileImage" value={newContact.profileImage} onChange={handleChange} required />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default AddContact;