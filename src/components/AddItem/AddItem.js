import React, { PureComponent } from "react";
import { FormInput, FormSubmit } from "./styled";

class AddItem extends PureComponent {
  state = {
    name: "",
    age: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (e.target.name.value === "") {
      return false;
    } else {
      this.props.addItem(this.state);
      this.setState({
        name: "",
        age: ""
      });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            placeholder="enter your name"
            id="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <FormInput
            type="number"
            placeholder="enter your age"
            id="age"
            onChange={this.handleChange}
            value={this.state.age}
          />

          <FormSubmit type="submit" value="Add Item"></FormSubmit>
        </form>
      </div>
    );
  }
}
export default AddItem;
