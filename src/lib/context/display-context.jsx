/* eslint-disable import/prefer-default-export */
import { useState, useEffect, createContext } from 'react';

export const DisplayContext = createContext({
  displayMode: '',
  handleChangeMode: () => {},
});

export function DisplayProvider({ children }) {
  const [displayMode, setDisplayMode] = useState('');

  const handleChangeMode = ({ currentTarget }) => {
    const { name } = currentTarget;
    setDisplayMode(name);
  };

  useEffect(() => {
    setDisplayMode('grid');
  }, []);

  return (
    <DisplayContext.Provider
      value={{
        displayMode,
        handleChangeMode,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
}
