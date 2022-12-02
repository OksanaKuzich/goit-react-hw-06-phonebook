import PropTypes from 'prop-types';
import { ButtonDelete, ListContactsItem } from './ContactList.styled';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';

export const ContactListItem = ({ onDeleteContact, id, name, number }) => {
  // const dispatch = useDispatch();

  // const onDeleteContact = () => dispatch(deleteContact());

  return (
    <ListContactsItem key={id}>
      {name}: {number}
      <ButtonDelete
        type="button"
        onClick={() => onDeleteContact(id)}
        dataid={id}
      >
        Delete
      </ButtonDelete>
    </ListContactsItem>
  );
};

ContactListItem.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
