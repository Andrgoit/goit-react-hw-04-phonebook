import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { StyledForm, StyledSubmitButton } from 'components/Form/Form.styled';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const id = nanoid();
  const data = { id, name, number };

  let nameInputId = nanoid();
  let numberInpytId = nanoid();

  const handlerChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handlerSubmit = event => {
    event.preventDefault();
    onSubmit(data);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handlerSubmit}>
      <label htmlFor={nameInputId}>
        Name
        <input
          value={name}
          onChange={handlerChange}
          type="text"
          name="name"
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor={numberInpytId}>
        Number
        <input
          value={number}
          onChange={handlerChange}
          type="tel"
          name="number"
          id={numberInpytId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <StyledSubmitButton type="submit">Add contact</StyledSubmitButton>
    </StyledForm>
  );
};
