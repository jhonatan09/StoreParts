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
        "hahahahahahaha"
      )}
    </PageProduct>
  );
};

export default Product;
