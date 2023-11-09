import React from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

import { ContactForm } from 'components/ContactForm/contactForm';
import { ContactList } from 'components/ContactList/contactList';
import { Filter } from 'components/Filter/filter';
import {
  ContactFilter,
  Container,
  PhonebookName,
  Contacts,
  Main,
} from './App.styled';

import { VscNotebook } from 'react-icons/vsc';

/*======== REDUX =======*/
export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  /*======== RENDER =======*/
  return (
    <Main>
      <section>
        <VscNotebook size={400} style={{ marginTop: '60px' }} />
        <Container>
          <PhonebookName>Phonebook</PhonebookName>
          <ContactForm />

          <ContactFilter>
            <Contacts>Contacts</Contacts>
            <Filter />
          </ContactFilter>

          {isLoading && !error && <b>Request in progress...</b>}

          <ContactList />
        </Container>
      </section>
    </Main>
  );
};
