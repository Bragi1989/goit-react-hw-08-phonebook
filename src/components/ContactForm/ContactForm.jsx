import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import Loader from 'components/Loader/Loader';

import { addContactThunk } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [number, setPhone] = useState('');

  const handleAddContact = data => {
    const hasDuplicated = contacts.some(
      contact =>
        contact.name.toLowerCase() === data.name.toLowerCase() ||
        contact.number.toLowerCase() === data.number.toLowerCase()
    );
    if (hasDuplicated) {
          toast.info(`'${data.name && data.number}' is already in contacts!`, {});
      return;
    }
    const newContact = {
      id: nanoid(),
      ...data,
    };
    setIsLoading(true);

    dispatch(addContactThunk(newContact))
      .then(() => {
        setIsLoading(false);
        setPhone('');
        setName('');
               toast.info('Contact added successfully!', {});
      })
      .catch(error => {
        setIsLoading(false);
               toast.info(`Error adding contact: ${error}`, {});
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = {
      name,
      number,
    };

    if (
      data.name.toLowerCase().trim() !== '' &&
      data.number.toLowerCase().trim() !== ''
    ) {
      handleAddContact(data);
    }
  };

  const handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case 'name': {
        setName(value);
        return;
      }
      case 'number': {
        setPhone(value);
        return;
      }

      default:
        return;
    }
  };

  return (
    <div className={css.contactsFormWrapper}>
      <form className={css.formContainer} onSubmit={handleSubmit}>
        <label className={css.inputWrapper}>
          <p>Name</p>
          <input
            className={css.inputContacts}
            type="text"
            name="name"
            required
            pattern="[a-zA-Zа-яА-ЯіІїЇґҐєЄ']+"
            value={name}
            onChange={event => handleInputChange(event)}
          />
        </label>
        <label className={css.inputWrapper}>
          <p>Number</p>
          <input
            className={css.inputContacts}
            type="tel"
            name="number"
            required
            pattern="^\+?\d{1,4}[ .\-]?\(?\d{1,3}\)?[ .\-]?\d{1,4}[ .\-]?\d{1,4}[ .\-]?\d{1,9}$"
            title="Format: XXX-XXX-XX-XX"
            value={number}
            onChange={event => handleInputChange(event)}
          />
        </label>
        <button className={css.submitButton} type="submit">
          {isLoading ? <Loader /> : 'Add contact'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
