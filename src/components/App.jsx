// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './Utilit/GlobalStyle';
import { getContactsArray } from 'redux/selectors';
import { useSelector } from 'react-redux';


export const App = () => {
  const array = useSelector(getContactsArray);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {array.length === 0 ? (
        <p>Please, enter your first contact</p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}

      <GlobalStyle />
    </div>
  );
};
