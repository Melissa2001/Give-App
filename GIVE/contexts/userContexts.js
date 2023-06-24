import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [tableUsed, setTableUsed] = useState('');

  const updateUserId = (id, table) => {
    setUserId(id);
    setTableUsed(table);
  };

  return (
    <UserContext.Provider value={{ userId, tableUsed, updateUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
