import { createContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [light, setLight] = useState(false);

  return (
    <Context.Provider value={{ light, setLight }}>
      {children}
    </Context.Provider>
  );
};

export { Provider, Context };