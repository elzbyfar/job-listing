import React, { useState, useMemo, createContext } from "react";

export const MouseEventContext = createContext({});

const MouseEventProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState({
    department: false,
    location: false,
  });
  const [hovering, setHovering] = useState(false);

  const MouseEventProviderObject = useMemo(
    () => ({
      menuOpen,
      hovering,
      setMenuOpen,
      setHovering,
    }),
    [menuOpen, hovering]
  );
  return (
    <MouseEventContext.Provider value={MouseEventProviderObject}>
      {children}
    </MouseEventContext.Provider>
  );
};

export default MouseEventProvider;
