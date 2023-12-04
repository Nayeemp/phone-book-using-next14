'use client';
import { useState } from 'react';
import './AddNewContactForm.css';
import { getUpdatedContuctList } from '@/Actions/HomePageActions';

const addContuct = async (name, phoneNo) => {
  try {
    const response = await fetch('http://localhost:9000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, number: phoneNo }),
    });

    if (response.ok) {
      // const data = await response.json();
      // console.log('data = ', data);
      getUpdatedContuctList();
      // console.log('getUpdatedContuctList api called');
    } else if (response.status === 404) {
      // console.log('invalid address');
    } else {
      // console.log('Did not get any data');
    }
  } catch (error) {
    console.log('error = ', error);
  }
};

function AddNewContactForm() {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const participant = false;

  const formHandler = (e) => {
    e.preventDefault();
    // console.log('name = ', name);
    // console.log('phoneNo = ', phoneNo);
    if (!name.trim()) {
      return alert('add a name');
    }

    if (!phoneNo.trim()) {
      return alert('add a phoneNo');
    }

    addContuct(name, phoneNo);
    setName('');
    setPhoneNo('');
  };

  return (
    <div className="formContainer">
      <h2 style={{ textAlign: 'center' }} className="text-2xl font-bold">
        {participant ? 'Edit Participant details' : 'Add New Contact'}
      </h2>
      <form className="myform" onSubmit={formHandler}>
        <input
          type="text"
          placeholder="name"
          required
          className="finput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="phone no."
          required
          className="finput"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
        <input
          type="submit"
          value={participant ? 'Update Participant' : 'Add Contact'}
          className="fsubmitButton"
        />
      </form>
    </div>
  );
}

export default AddNewContactForm;
