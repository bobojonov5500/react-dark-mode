import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Listcontext = createContext();
const API = "http://localhost:3000/random";

function Context({ children }) {
  const [Data, setData] = useState([]);
  const [Error, SetError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API);
        setData(response.data);
      } catch (error) {
        SetError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Listcontext.Provider value={{ Data, setData }}>
      {children}
    </Listcontext.Provider>
  );
}

export default Context;
