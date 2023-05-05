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

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  position: relative;

  width: 100%;
  height: 70px;

  font-size: 1.5rem;

  background-color: white;
  border-radius: 42px;

  box-shadow: 0 2px 4px rgba(30, 32, 37, 0.1);

  input {
    width: calc(100% - 70px);
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
    width: 50px;
    height: 50px;
    border-radius: 50px;

    color: white;

    cursor: pointer;
    text-align: center;
    background-color: #3579e1;

    & > svg {
      margin: auto;
    }
  }
`;
