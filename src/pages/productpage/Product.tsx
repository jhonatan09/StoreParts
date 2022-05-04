import React from "react";
import { useLocation } from "react-router-dom";
import { LocationState } from "../../types";
import Content from "../../component/Content";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const PageProduct = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direct: column;
`;

const LinkHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  padding-left: 16px;
  margin-top: 16px;
`;

const EmptyContent = styled.h2`
  width: 100%;
  margin: 5% auto;
  color: #0892e3;
  text-align: center;
  font-family: cursive;
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Product = () => {
  const location = useLocation();

  const { state } = location as LocationState;
  console.log(state);
  return (
    <PageProduct>
      <LinkHome>
        <Link to="/StoreParts/">
          <FaArrowLeft size={32} />
        </Link>
      </LinkHome>
      {state !== null ? (
        <Content name={state.name} price={state.price} type={state.type} />
      ) : (
        <EmptyContent>Need choose a item first</EmptyContent>
      )}
    </PageProduct>
  );
};

export default Product;
