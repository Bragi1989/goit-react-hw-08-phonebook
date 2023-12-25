// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import css from './ContactItem.module.css';
import { ReactComponent as IconTrash } from 'assets/icons/trashSvg.svg';
import { useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { deleteContactThunk } from 'redux/contacts/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { selectContactsIsLoading } from 'redux/contacts/selectors';

export default function ContactItem({ contact }) {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  // const isLoadingFromRedux = useSelector(selectContactsIsLoading);

  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteContact = id => {
    setIsLoading(true);
    dispatch(deleteContactThunk(id))
      .then(() => {
        setIsLoading(false);
        // alert('Contact deleted successfully!');
        toast.info('Contact deleted successfully!', {});
      })
      .catch(error => {
        setIsLoading(false);
        // alert(`Error deleting contact: ${error}`);
        toast.info(`Error deleting contact: ${error}`, {});
      });
  };
  return (
    <li key={id} className={css.contactItem}>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}> {number}</span>

      <button
        className={css.deleteButton}
        type="button"
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        {isLoading ? <Loader /> : <IconTrash className={css.svgIcon} />}
      </button>
    </li>
  );
}
