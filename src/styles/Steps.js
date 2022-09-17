import styled from "styled-components";

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  margin-bottom: 30px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  font-family: "Roboto Mono", monospace;
  color: #0077e4;
  font-size: 20px;
  font-weight: 700;

  & > span {
    display: flex;
    column-gap: 15px;
  }

  & label {
    font-size: 15px;
    color: #454545;
  }
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  height: 220px;
  overflow-y: scroll;

  & > div {
    display: flex;
    column-gap: 10px;
  }

  & img {
    width: 150px;
    height: 90px;
    object-fit: cover;
  }

  & > div > p {
    font-size: 16px;
    color: #454545;
    width: 130px;
    height: 90px;
    overflow-y: scroll;
  }
  & > span {
    display: flex;
    justify-content: center;
    color: green;
    font-size: 15px;
  }
`;

export { Steps, Step, Products };
