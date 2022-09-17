import styled from "styled-components";

const Content = styled.div`
  background-color: #0077e4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  color: #ffffff;
  font-family: "Gochi Hand", cursive;
  font-size: 55px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

const Input = styled.input`
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
  color: #454545;
  font-weight: 600;
  font-size: 18px;
  width: 250px;
  height: 40px;
  border-radius: 5px;
  padding: 0 8px;
  border: none;
`;

const Button = styled.button`
  background-color: #0b65b8;
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  width: 200px;
  height: 40px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(1.35);
  }
`;

const Option = styled.p`
  font-family: "Roboto Mono", monospace;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
  margin-top: 15px;
  cursor: pointer;
`;

export { Content, Title, Form, Input, Button, Option };
