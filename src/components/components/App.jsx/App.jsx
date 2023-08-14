import ContactForm from '../ContactForm.jsx/ContactForm';
import ContactList from '../ContactList.jsx/ContactList';
import FilterContact from '../FilterContact.jsx/FilterContact';
import css from './app.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <div className={css.formContainer}>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div className={css.contactContainer}>
        <h2>Contacts</h2>
        <FilterContact />
        {isLoading && error && <b>Request in progress...</b>}
        {error && error}
        <ContactList />
      </div>
    </div>
  );
};
