import React, { useContext, useState } from "react";
import "../CrudStyle/FormCss.css";
import Modal from "./Modal";
import { Listcontext } from "../context";
import axios from "axios";
import {
  Card,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
} from "@chakra-ui/react";
const API = "http://localhost:3000/random";

function Form() {
  const {
    Data,
    setData,
    updateTrigger,
    setupdateTrigger,
    
  } = useContext(Listcontext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedata, setUpdateData] = useState(null);
  const Delete = async (id) => {
    try {
      const response = await axios.delete(`${API}/${id}`);
      setupdateTrigger(!updateTrigger);
    } catch (error) {
      alert(error.message);
    }
  };
  const UpdateItem = (item) => {
    setUpdateData(item);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex w-full max-w-xs p-5 bg-white rounded-lg font-mono">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="unique-input"
        >
          Serach
        </label>
        <input
          className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
          placeholder="Search any..."
          type="text"
          id="unique-input"
        />
        <Modal
          isOpen={isModalOpen}
          onOpen={() => setIsModalOpen(true)}
          onClose={closeModal}
          updatedata={updatedata}
        />
      </div>
      <Box padding="3">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(5, 1fr)",
          }}
          gap={6}
        >
          {Data && Data.length > 0 ? (
            Data.map((item, index) => (
              <Card key={index} maxW="sm" variant="outline">
                <Box h="200px">
                  <Image w="100%" h="100%" src={item?.img} alt="Caffe Latte" />
                </Box>
                <Stack>
                  <CardBody>
                    <Heading size="md">{item?.title}</Heading>
                    <Text py="2">{item?.content}</Text>
                  </CardBody>

                  <CardFooter
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    paddingTop={"0"}
                  >
                    <Button
                      onClick={() => UpdateItem(item)}
                      variant="solid"
                      colorScheme="blue"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => Delete(item.id)}
                      variant="solid"
                      colorScheme="red"
                    >
                      Delete
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            ))
          ) : (
            <Text>There is no item</Text>
          )}
        </Grid>
      </Box>
    </>
  );
}

export default Form;
