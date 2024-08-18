import axios from "axios";
import React, { createContext, useEffect, useState, useMemo } from "react";

export const Listcontext = createContext();
const API = "http://localhost:3000/random";

function Context({ children }) {
  const [Data, setData] = useState([]);
  const [Error, SetError] = useState("");
  const [updatedata, setupdatedata] = useState(null);
  const [readdata, setreaddata] = useState(null);
  const [updateTrigger, setupdateTrigger] = useState(false);
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
  }, [updateTrigger]);

  const value = useMemo(
    () => ({
      Data,
      setData,
      updateTrigger,
      setupdateTrigger,
      Error,
      API,
      updatedata,
      readdata,
      setreaddata,
      setupdatedata,
    }),
    [Data, updateTrigger, Error, API,readdata, updatedata]
  );
  return <Listcontext.Provider value={value}>{children}</Listcontext.Provider>;
}

export default Context;
