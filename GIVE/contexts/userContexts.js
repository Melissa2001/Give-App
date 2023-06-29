import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [tableUsed, setTableUsed] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const updateUserId = (id, table, adminStatus) => {
    setUserId(id);
    setTableUsed(table);
    setIsAdmin(adminStatus);
  };

  return (
    <UserContext.Provider value={{ userId, tableUsed, isAdmin, updateUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
