import React, { useState } from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const updateUserId = (id) => {
    setUserId(id);
  };

  return (
    <UserContext.Provider value={{ userId, updateUserId }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
