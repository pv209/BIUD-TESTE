import React, { useState } from "react";
import Contextapi from "./Context";

const Provider = ({ children }) => {
  const [name, setName] = useState("Valéria");

  const saveName = (name) => setName(name);

  return (
    <Contextapi.Provider value={{ name, saveName }}>
      {children}
    </Contextapi.Provider>
  );
};

export default Provider;
