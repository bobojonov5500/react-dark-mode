import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Listcontext } from "../context";
import { v4 as uuidv4 } from "uuid";
import {
  Heading,
  Button,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
  Box,
} from "@chakra-ui/react";

const API = "http://localhost:3000/random";

const ModalToggle = ({ isOpen, onClose, onOpen, updatedata }) => {
  const Data = {
    id: "",
    title: "",
    content: "",
    img: null,
  };
  const { updateTrigger, setupdateTrigger } = useContext(Listcontext);
  const [formData, setformData] = useState(Data);
  const [isUpdate, setIsUpdate] = useState(false);
  const handlerchange = (e) => {
    const { value, name } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handleFileChange = (event) => {
    const file = event.target.value;
    setformData({ ...formData, img: file });
  };
  const PostData = async () => {
    if (
      formData.id !== "" &&
      formData.content !== "" &&
      formData.title !== "" &&
      formData.img !== ""
    ) {
      try {
        const response = await axios.post(API, {
          id: formData.id,
          title: formData.title,
          content: formData.content,
          img: formData.img,
        });
        setupdateTrigger(!updateTrigger);

        if (response.status === 201) {
          alert("post is added successfully");
        }
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    } else {
      alert("forma shartlari to'iq bajarilmagan!!");
    }
  };

  const PutData = async () => {
    if (formData.id && formData.content && formData.title && formData.img) {
      try {
        const response = await axios.put(`${API}/${formData.id}`, {
          title: formData.title,
          content: formData.content,
          img: formData.img,
        });
        if (response.status === 200) {
          setupdateTrigger(!updateTrigger);
          alert("post yangilandi");
        }
      } catch (error) {
        alert(error.message);
      }
    } else {
      alert("forma toldirilmadi!!!");
    }
  };
  console.log(updatedata,formData)
  
  useEffect(() => {
    if (isOpen && updatedata && !formData.id) {
      setformData(updatedata);
      setIsUpdate(true);
    } else if (isOpen && !updatedata) {
      setformData({
        id: uuidv4(),
        title: "",
        content: "",
        img: "",
      });
      setIsUpdate(false);
    }
  }, [isOpen, updatedata]);

  const Send = () => {
    if (isUpdate) {
      PutData();
    } else {
      PostData();
    }
    onClose();
    setformData(Data);
  };

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Add
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading fontSize="xl">Title</Heading>
            <Input
              onChange={handlerchange}
              name="title"
              marginTop={1}
              placeholder="title"
              size="sm"
              value={formData?.title || ""}
            />
            <Box marginTop={5}>
              <Heading fontSize="xl">About Content</Heading>
              <Textarea
                onChange={handlerchange}
                name="content"
                marginTop={1}
                value={formData?.content || ""}
                placeholder="Here is a sample placeholder"
              />
            </Box>
            <Box marginTop={5}>
              <Heading fontSize={"xl"}>Upload Image Url</Heading>
              <Input
                placeholder="img url"
                onChange={handleFileChange}
                marginTop={1}
                value={formData?.img || ""}
                type="text"
              ></Input>
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={Send} colorScheme="teal" variant="outline">
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalToggle;
