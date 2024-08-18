import React, { useState, useContext } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Input,
  Button,
} from "@chakra-ui/react";
import { Container } from "./CreateStyle";
import { Link ,useNavigate} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Listcontext } from "../context";
import axios from "axios";

function Create() {
  const { API } = useContext(Listcontext);
  const obj = {
    id: uuidv4(),
    title: "",
    content: "",
    imglink: "",
  };
  const [postData, setpostData] = useState(obj);
  const navigate=useNavigate()
  const HandlerValue = (e) => {
    const { name, value } = e.target;
    setpostData({ ...postData, [name]: value });
  };
  const PostData = async () => {
    try {
      if (
        postData.id &&
        postData.title &&
        postData.content &&
        postData.imglink
      ) {
        const response = await axios.post(API, postData);
        navigate('/list')
      } else {
        alert("forma shartlari bajarilmagan");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  const SendPost = () => {
    PostData();
    setpostData(obj);
  };

  console.log(postData);
  return (
    <Container>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          onChange={HandlerValue}
          name="title"
          type="text"
          placeholder="title"
        />
        <FormLabel>About content</FormLabel>
        <Textarea
          onChange={HandlerValue}
          name="content"
          placeholder="Here is a sample placeholder"
        />
        <FormLabel>Image link</FormLabel>
        <Input
          name="imglink"
          onChange={HandlerValue}
          type="text"
          placeholder="img link"
        />
        <FormLabel>Image file</FormLabel>
        <Input type="file" accept="image/png, image/jpeg" />
        <Link>
          <Button onClick={SendPost} colorScheme="orange" marginTop={3}>
            Send
          </Button>
        </Link>
        <Link to="/list">
          <Button colorScheme="red" marginTop={3} marginLeft={3}>
            Back
          </Button>
        </Link>
      </FormControl>
    </Container>
  );
}

export default Create;
