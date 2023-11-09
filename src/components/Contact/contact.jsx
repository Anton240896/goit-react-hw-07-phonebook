import { ContactContainer, ContactName } from './contact.styled';

import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactContainer>
      <ContactName key={id}>
        {name}: {number}
      </ContactName>
      <button type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </button>
    </ContactContainer>
  );
};
