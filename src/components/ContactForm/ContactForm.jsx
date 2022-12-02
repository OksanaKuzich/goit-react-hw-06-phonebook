import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  FormStyles,
  LabelStyles,
  InputStyles,
  ButtonAdd,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputName = e => {
    setName(e.currentTarget.value);
  };

  const handleInputNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const dispatch = useDispatch();

  const addContactsItem = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    console.log(name, number);
    const item = { name, number };
    dispatch(addContact(item));
    e.target.reset();
  };

  return (
    <FormStyles onSubmit={addContactsItem}>
      <LabelStyles>
        Name
        <InputStyles
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Ivan"
          value={name}
          onChange={handleInputName}
        />
      </LabelStyles>
      <LabelStyles>
        Number
        <InputStyles
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="111-11-11"
          value={number}
          onChange={handleInputNumber}
        />
      </LabelStyles>
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </FormStyles>
  );
}

ContactForm.propTypes = {
  addContacts: PropTypes.func.isRequired,
};
