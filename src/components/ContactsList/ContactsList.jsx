import ContactItem from 'components/ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export default function ContactsList() {
  const filter = useSelector(state => state.filtersStore.filters);
  const contacts = useSelector(selectContacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.contactListWrapper}>
      <ul className={css.contactList}>
        {' '}
        {filteredContacts.map(contact => {
          return <ContactItem key={contact.id} contact={contact} />;
        })}
      </ul>
    </div>
  );
}
