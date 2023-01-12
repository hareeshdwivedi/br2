import React, { useContext, useState } from 'react';
import useBodyScrollLock from '../hooks/useBodyScrollLock';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const { toggleLock } = useBodyScrollLock();
  const [isShowing, setIsShowing] = useState(false);
  function toggle() {
    toggleLock();
    setIsShowing(!isShowing);
  }

  return (
    <AppContext.Provider
      value={{
        isShowing,
        toggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
