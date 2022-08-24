import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { FaTrash } from 'react-icons/fa';
import {
  StyledContactList,
  StyledContactItem,
  StyledButtonDelite,
} from 'components/Contacts/Contacts.styled';

const Contacts = ({ contacts, onDeleteContact }) => {
  console.log(contacts);
  return (
    <StyledContactList>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledContactItem key={id || nanoid()}>
            {name}: {number}
            <StyledButtonDelite onClick={() => onDeleteContact(id)}>
              <FaTrash />
            </StyledButtonDelite>
          </StyledContactItem>
        );
      })}
    </StyledContactList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
};

export default Contacts;
