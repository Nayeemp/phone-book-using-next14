'use client';
import { getUpdatedContuctList } from '@/Actions/HomePageActions';
import './ContactList.css';

const deleteElement = async (id) => {
  try {
    const response = await fetch(`http://localhost:9000/contacts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      getUpdatedContuctList();
      //   console.log('delete sucessfull');
    } else if (response.status === 404) {
      //   console.log('invalid address');
    } else {
      //   console.log('Did not get any data');
    }
  } catch (error) {
    // console.log('error = ', error);
  }
};

function Contact({ contactDetails }) {
  //   console.log('contactDetails = ', contactDetails);
  const { id, name, number } = contactDetails;
  return (
    <tr>
      <td>{name}</td>
      <td>{number}</td>
      {/* <td>
          <button
            type="button"
            className="editButton"
            onClick={() => dispatch(editParticipant(id))}
          >
            edit
          </button>
        </td> */}
      <td>
        <button
          type="button"
          className="deleteButton"
          onClick={() => deleteElement(id)}
        >
          delete
        </button>
      </td>
      <td></td>
    </tr>
  );
}

export default Contact;
