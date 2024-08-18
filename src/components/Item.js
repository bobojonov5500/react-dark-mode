import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Listcontext } from "./context";

const Item = () => {
  const { Data } = useContext(Listcontext);
  const { id } = useParams();
  console.log(Data)
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};
export default Item;
