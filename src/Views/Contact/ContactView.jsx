import React, { useState } from 'react';
import axios from 'Configs/axios';

import Layout from 'Components/Layout/Layout';
import Input from 'Components/Input/Input';
import Button from 'Components/Button/Button';

const ContactView = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAdress, setEmailAdress] = useState('');

  const submitForm = (e) => {
    e.preventDefault();
    if (!name && !emailAdress) {
      return;
    }

    axios
      .post('/contact', {
        contactName: name,
        contactPhone: phoneNumber,
        contactEmail: emailAdress,
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Layout>
      <div>
        <h1>Formularz kontaktowy:</h1>

        <form onSubmit={submitForm}>
          <Input
            type="text"
            placeholder="Imię"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2"
            required
          />
          <Input
            type="number"
            placeholder="Numer telefonu"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-2"
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={emailAdress}
            onChange={(e) => setEmailAdress(e.target.value)}
            className="mt-2 mb-2"
            required
          />
          <Button type="submit">Wyślij</Button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactView;
