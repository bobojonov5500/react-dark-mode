import React, { useContext } from "react";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import { Listcontext } from "../context";
import { Container } from "./CreateStyle";
import axios from "axios";

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
  Input,
  Button,
} from "@chakra-ui/react";

function Edit() {
  const { updatedata, setupdatedata, API } = useContext(Listcontext);
  const navigate = useNavigate();
  const id = useParams();

  const putPost = async () => {
    try {
      if (updatedata.title && updatedata.content && updatedata.imglink) {
        const response = await axios.put(`${API}/${id.id}`, {
          title: updatedata.title,
          content: updatedata.content,
          imglink: updatedata.imglink,
        });
        navigate("/list");
        if (response.status === 200) {
          alert("forma yangilandi");
        }
      } else {
        alert("forma shartlari to'liq bajarilmagan");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <Container>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input
          onChange={(e) =>
            setupdatedata({ ...updatedata, title: e.target.value })
          }
          name="title"
          value={updatedata?.title}
          type="text"
          placeholder="title"
        />
        <FormLabel>About content</FormLabel>
        <Textarea
          onChange={(e) =>
            setupdatedata({ ...updatedata, content: e.target.value })
          }
          value={updatedata?.content}
          name="content"
          placeholder="Here is a sample placeholder"
        />
        <FormLabel>Image link</FormLabel>
        <Input
          onChange={(e) =>
            setupdatedata({ ...updatedata, imglink: e.target.value })
          }
          value={updatedata?.imglink}
          name="imglink"
          type="text"
          placeholder="img link"
        />
        <FormLabel>Image file</FormLabel>
        <Input type="file" accept="image/png, image/jpeg" />
        {/* <Link> */}
        <Button onClick={putPost} colorScheme="orange" marginTop={3}>
          Send
        </Button>
        {/* </Link> */}
        <Link to="/list">
          <Button colorScheme="red" marginTop={3} marginLeft={3}>
            Back
          </Button>
        </Link>
      </FormControl>
    </Container>
  );
}

export default Edit;
