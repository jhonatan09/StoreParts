import React, { useContext } from "react";
import { DataContext } from "../../store";
import { responseTypes } from "../../types";
import Content from "../../component/Content";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const HomePage = () => {
  const { data } = useContext(DataContext);

  const test = data.map((item: responseTypes) => {
    return (
      <Link to="/product" state={item}>
        <Content name={item.name} price={item.price} type={item.type} />
      </Link>
    );
  });
  return <Home>{test}</Home>;
};

export default HomePage;
