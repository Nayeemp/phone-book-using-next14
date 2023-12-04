import AddNewContactForm from '@/Components/HomePage/AddNewContactForm/AddNewContactForm';
import ContactList from '@/Components/HomePage/ContactList/ContactList';

export default function Home() {
  return (
    <div>
      <AddNewContactForm />
      <ContactList />
    </div>
  );
}
