import React, { useContext } from "react";
import { Listcontext } from "../components/context";
import { Container, DeleteBtn, EditBtn, Table } from "./ListStyle";

function List() {
  const { Data, setData } = useContext(Listcontext);
  const OnDelete = (id) => {
    const FilteredData = Data.filter((item) => {
      return item.id !== id;
    });
    console.log(FilteredData);
    setData(FilteredData);
  };

  return (
    <Container>
      <span>{Data.length}</span>
      <Table>
        <thead>
          <tr>
            <th>id:</th>
            <th>title</th>
            <th>content</th>
            <th>author</th>
            <th>date</th>
            <th>actions</th>
          </tr>
        </thead>
        {Data.length > 0 ? (
          Data.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.content}</td>
                <td>{item.author}</td>
                <td>{item.date}</td>
                <td>
                  <EditBtn>Edit</EditBtn>
                  <DeleteBtn onClick={() => OnDelete(item.id)}>
                    Delete
                  </DeleteBtn>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <tfoot>
            <tr>
              <td colSpan="6">ma'lumot mavjud emas</td>
            </tr>
          </tfoot>
        )}
      </Table>
    </Container>
  );
}

export default List;
