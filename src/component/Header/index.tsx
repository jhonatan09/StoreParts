import React, { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../../store";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Container = styled.div`
  height: 150px;
  width: 100%;
  background: #000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 8px;
`;
const Button = styled.button`
  width: 80px;
  height: 35px;
  background: #fff;
  border: 5px solid #00629b;
  border-radius: 15px;
  font-family: fantasy;
  font-size: 16px;
  letter-spacing: 2px;
  color: #0892e3;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    border-color: #5cc3ff;
    color: #5cc3ff;
  }
`;
const ButtonChangePriceOrder = styled(Button)`
  width: 165px;
`;

const Title = styled.div`
  width: 100%;
  margin: 8px;
  text-align: center;
  font-family: fantasy;
  text-transform: uppercase;
`;
const Input = styled.input`
  width: 170px;
  height: 35px;
  border: 5px solid #00629b;
  border-radius: 15px;
  padding-left: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #0892e3;
`;
const InsideContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const SearchBar = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Select = styled.select`
  width: 170px;
  height: 35px;
  border: 5px solid #00629b;
  border-radius: 15px;
  padding-left: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #0892e3;
`;

const Header = () => {
  const {
    input,
    setInput,
    handleClick,
    setSelected,
    crescentSort,
    decrescentSort,
    btnSort,
    setChangeState,
  } = useContext(DataContext);
  return (
    <Container>
      <Title>
        <h1>Store Parts</h1>
      </Title>
      <InsideContainer>
        <SearchBar>
          <Input
            placeholder="type what you want"
            onChange={(e: any) => setInput(e.target.value)}
            value={input}
          />
          <Button onClick={() => handleClick()}>Click</Button>
        </SearchBar>
        <Select
          onChange={(e) => {
            e.preventDefault();
            const selectedOption = e.target.value;
            setChangeState((statePrev) => !statePrev);
            setSelected(selectedOption);
          }}
        >
          <option value=""></option>
          <option value="Mousepad">Mousepad</option>
          <option value="Monitor">Monitor</option>
          <option value="Keyboard">Keyboard</option>
        </Select>
        {btnSort ? (
          <ButtonChangePriceOrder onClick={() => crescentSort()}>
            crescent
            <FaArrowUp />
          </ButtonChangePriceOrder>
        ) : (
          <ButtonChangePriceOrder onClick={() => decrescentSort()}>
            decrescent
            <FaArrowDown />
          </ButtonChangePriceOrder>
        )}
      </InsideContainer>
    </Container>
  );
};

export default Header;
