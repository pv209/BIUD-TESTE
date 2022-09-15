import React, { useState } from "react";
import Contextapi from "./Context";

const Provider = ({ children }) => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");


  const savePath = (path) => setPath(path);
  const saveName = (name) => setName(name);

  return (
    <Contextapi.Provider value={{ name, saveName, path, savePath }}>
      {children}
    </Contextapi.Provider>
  );
};

export default Provider;
