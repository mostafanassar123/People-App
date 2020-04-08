import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItem from "./components/AddItem/AddItem";
import { Container, Header } from "./styled";

class App extends Component {
  state = {
    items: [
      { id: 1, name: "ahmed", age: 27 },
      { id: 2, name: "mostafa", age: 25 },
      { id: 3, name: "abdulatief", age: 16 },
      { id: 4, name: "mahmoud", age: 10 }
    ]
  };

  deleteItem = id => {
    // let items = this.state.items;
    // let i = items.findIndex(item => item.id === id);
    // items.splice(i, 1);
    // this.setState({ items });
    let items = this.state.items.filter(item => item.id !== id);
    this.setState({ items });
  };

  addItem = item => {
    item.id = Math.random();
    let items = this.state.items;
    items = items.concat(item); // = [...items, item]
    this.setState({ items });
  };

  render() {
    return (
      <Container>
        <Header> New Todo App </Header>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </Container>
    );
  }
}
export default App;
