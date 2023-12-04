import React from 'react';
import './ContactList.css';
import Contact from './Contact';

async function getData() {
  const res = await fetch('http://localhost:9000/contacts', {
    next: { tags: ['ContactList'] },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const ContactList = async () => {
  const data = await getData();
  // console.log('data = ', data);

  return (
    <div className="participantListContainer">
      <h2 style={{ textAlign: 'center' }} className="text-2xl font-bold">
        Contact List
      </h2>
      <br />

      <table id="customers">
        <thead>
          <tr>
            <th>Participant</th>
            <th>Phone no.</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((contactDetails) => (
            <Contact contactDetails={contactDetails} key={contactDetails.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
