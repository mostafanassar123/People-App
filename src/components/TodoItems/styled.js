import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: #2ebaee;
  > span {
    color: #fff;
  }
`;

export const ListItem = styled.div`
  background: #ffffff;
  color: #46529d;
`;

export const Pname = styled.span`
  display: inline-block;
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
  border: 0.3px solid #ccc;
  width: 60%;
`;

export const Page = styled(Pname)`
  width: 30%;
`;

export const Action = styled(Pname)`
  width: 10%;
  cursor: pointer;
`;
