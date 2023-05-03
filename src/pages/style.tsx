import styled from 'styled-components';

export const SearchContainer = styled.ul`
  background-color: #cae9ff;
  width: 100%;
  height: 700px;
  padding: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  padding: 4px;
  margin-top: 50px;
  margin-bottom: 5px;

  font-size: 2.125rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.6;
  letter-spacing: -0.5px;
`;

export const InputContainer = styled.div`
  display: flex;
  margin-top: 10px;
  position: relative;

  width: 100%;
  height: 30%;

  max-width: 400px;
  max-height: 50px;

  background-color: white;
  border-radius: 42px;

  box-shadow: 0 2px 4px rgba(30, 32, 37, 0.1);

  input {
    width: 90%;
    height: 100%;
    padding: 12px 20px;

    font: 18px;
    line-height: 20.8px;
    text-align: start;
    letter-spacing: normal;
    border: 0;
    border-radius: 42px;
    background-color: transparent;

    :focus {
      outline: none;
    }
  }

  button {
    position: absolute;
    right: 15px;
    top: 25%;
    width: 50px;
    border: 0;

    font-size: 15px;
    line-height: 1.5;
    color: grey;

    cursor: pointer;
    background-color: transparent;
  }
`;
