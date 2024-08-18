import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import Edit from "./Edit";
import { Listcontext } from "../context";

const API = "http://localhost:3000/random";
const List = () => {
  const [Data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [changetrigger, setchangetrigger] = useState(false);
  const { updatedata, setupdatedata, readdata, setreaddata } = useContext(
    Listcontext
  );
  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await axios.get(API);
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(!isLoading);
        }
      } catch (error) {
        alert(error.message);
      }
    };
    GetData();
  }, [changetrigger]);

  const DeleteData = async (id) => {
    const isConfirmed = window.confirm("are you sure!!!");
    if (isConfirmed) {
      try {
        const response = await axios.delete(`${API}/${id}`);
        setchangetrigger(!changetrigger);
        setIsLoading(!isLoading);
      } catch (error) {
        console.log(error.message);
      }
    } else {
      console.log("delete cancelled by user");
    }
  };
  const Edit = (item) => {
    setupdatedata(item);
  };
  const AddReadData = (item) => {
    setreaddata(item);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Link to="/create">
        <Button colorScheme="blue">+ Add</Button>
      </Link>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : Data.length === 0 ? (
        <Text fontSize="xl" textAlign="center" marginTop={5}>
          There is no item
        </Text>
      ) : (
        <TableContainer maxW="1000px">
          <Table variant="simple">
            <TableCaption>{`${Data?.length} items`}</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Data.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.title}</Td>
                  <Td
                    style={{
                      maxWidth: "300px", whiteSpace: "normal", wordWrap: "break-word" 
                    }}
                  >
                    {item.content}
                  </Td>
                  <Td isNumeric>
                    <Image
                      boxSize="90px"
                      objectFit="cover"
                      src={item.imglink}
                      alt="Dan Abramov"
                    />
                  </Td>
                  <Td>
                    <Button
                      onClick={() => DeleteData(item.id)}
                      colorScheme="red"
                    >
                      Delete{" "}
                    </Button>
                    <Link
                      to={{
                        pathname: `/edit/${item.id}`,
                        state: { Item: item },
                      }}
                    >
                      <Button
                        onClick={() => Edit(item)}
                        colorScheme="green"
                        marginLeft={3}
                        marginRight={3}
                      >
                        Edit{" "}
                      </Button>
                    </Link>
                    <Link to={`/read/${item.id}`}>
                      <Button
                        onClick={() => AddReadData(item)}
                        colorScheme="yellow"
                      >
                        Read
                      </Button>
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
            {/* <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot> */}
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default List;
