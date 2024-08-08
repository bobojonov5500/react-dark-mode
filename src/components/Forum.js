import React, { useContext, useState } from "react";
import { Form, Container, Inputwrapper } from "./ForumStyle";
import { Listcontext } from "./context";

const now = new Date();
const formatDate = `${now.getFullYear()}-${
  now.getMonth() + 1
}-${now.getDate()}`;

function Forum() {
  const { Data, setData } = useContext(Listcontext);
  const obj = {
    id: Data.length + 1,
    title: "",
    content: "",
    author: "",
    data: formatDate,
  };
  const [post, setpost] = useState(obj);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    console.log(name)
    setpost({ ...post, [name]: value });
  };
 

  return (
    <Container>
      <Form>
        <Inputwrapper>
          <label htmlFor="title">Title</label>
          <input
            onChange={HandleChange}
            name="title"
            placeholder="title"
            type="text"
            id="title"
          />
        </Inputwrapper>
        <Inputwrapper>
          <label htmlFor="content">Content</label>
          <input
            onChange={HandleChange}
            name="content"
            placeholder="content"
            type="text"
            id="content"
          />
        </Inputwrapper>
        <Inputwrapper>
          <label htmlFor="author">Author</label>
          <input
            onChange={HandleChange}
            placeholder="author"
            type="text"
            name="author"
            id="author"
          />
        </Inputwrapper>
        <button>Add</button>
      </Form>
    </Container>
  );
}

export default Forum;
