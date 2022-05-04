import React, { useContext } from "react";
import { DataContext } from "../../store";
import { responseTypes } from "../../types";
import Content from "../../component/Content";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Home = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const colors = keyframes`
  0% { opacity: 0.1;}
  30% {opacity: 0.3;}
  60% {opacity: 0.6;}
  100% { opacity: 0.9; }
`;

const LoaderMsg = styled.h2`
  width: 100%;
  margin: 5% auto;
  color: #ff0000;
  animation: ${colors} 2s linear infinite;
  text-align: center;
  font-size: 28px;
  font-weight: 500;
`;

const HomePage = () => {
  const { data, loading } = useContext(DataContext);

  const test = data.map((item: responseTypes) => {
    return (
      <Link to="/StoreParts/product" state={item}>
        <Content name={item.name} price={item.price} type={item.type} />
      </Link>
    );
  });
  return <Home>{loading ? <LoaderMsg>Loading...</LoaderMsg> : test}</Home>;
};

export default HomePage;
