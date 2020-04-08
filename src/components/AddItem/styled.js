import styled from "styled-components";

export const FormInput = styled.input`
  padding: 0px 10px;
  height: 35px;
  background: #ebebeb;
  border: transparent;
  border: 0.3px solid #ccc;
  width: 60%;
  text-align: center;
  &[type="number"] {
    width: 30%;
  }
`;

export const FormSubmit = styled.input`
  background: #2ebaee;
  border: 0.3px solid #2ebaee;
  color: #ffffff;
  cursor: pointer;
  width: 10%;
  cursor: pointer;
  padding: 0px !important;
  height: 35px;
`;
