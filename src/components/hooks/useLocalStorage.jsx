import { useState, useEffect } from 'react';

export const useLocalStorage = (KEY, defaultContacts) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(KEY)) ?? defaultContacts;
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [KEY, state]);

  return [state, setState];
};
