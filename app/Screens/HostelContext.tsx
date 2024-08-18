import React, { createContext, useState } from 'react';

export const HostelContext = createContext();

export const HostelProvider = ({ children }) => {
  const [selectedHostel, setSelectedHostel] = useState(null);

  return (
    <HostelContext.Provider value={{ selectedHostel, setSelectedHostel }}>
      {children}
    </HostelContext.Provider>
  );
};
