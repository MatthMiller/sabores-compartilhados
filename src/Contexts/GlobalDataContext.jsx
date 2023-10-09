import React from 'react';

export const GlobalContext = React.createContext();

const GlobalDataContext = ({ children }) => {
  const [stateTest, setStateTest] = React.useState(true);

  return (
    <GlobalContext.Provider value={(stateTest, setStateTest)}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalDataContext;
