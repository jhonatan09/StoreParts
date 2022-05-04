import React from "react";
import styled from "styled-components";

import { Contexts } from "../../types";

const Ul = styled.ul`
  color: #fff;
  width: 300px;
  height: 200px;
  font-size: 24px;
  font-family: fantasy;
  letter-spacing: 1px;
  border: 8px solid #000;
  border-radius: 15px;
  margin-top: 32px;
  background: #2a0058;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &:hover {
    background: #3c037a;
    font-weight: 500;
    letter-spacing: 1.4px;
  }
`;

const Content = ({ name, type, price }: Contexts) => {
  return (
    <Ul>
      <li>{name}</li>
      <li>{type}</li>
      <li>${price.slice(0, -1)}</li>
    </Ul>
  );
};

export default Content;
