import React from "react";
import { ListItem, Pname, Page, Action, HeaderWrapper } from "./styled";

const TodoItems = props => {
  const { items, deleteItem } = props;
  const Length = items.length;
  const ListItems = Length ? (
    items.map(item => {
      return (
        <div key={item.id}>
          <Pname>{item.name}</Pname>
          <Page>{item.age}</Page>
          <Action onClick={() => deleteItem(item.id)}>&times;</Action>
        </div>
      );
    })
  ) : (
    <p>There Is No Items Here</p>
  );
  return (
    <ListItem>
      <HeaderWrapper>
        <Pname>Name</Pname>
        <Page>Age</Page>
        <Action>Action</Action>
      </HeaderWrapper>
      {ListItems}
    </ListItem>
  );
};
export default TodoItems;
