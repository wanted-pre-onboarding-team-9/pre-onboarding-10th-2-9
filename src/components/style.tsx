import styled from 'styled-components';

export const SearchContainer = styled.ul`
  background-color: #cae9ff;
  width: 100%;
  height: 100vh;
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
  padding: 5px 5px;

  width: 100%;
  max-width: 600px;

  background-color: white;
  border-radius: 42px;

  box-shadow: 0 2px 4px rgba(30, 32, 37, 0.1);

  input {
    width: 95%;
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
  input[type='search']::-webkit-search-cancel-button {
    cursor: pointer;
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

export const SearchBtn = styled.div`
  background-color: #007be9;
  width: 40px;
  height: 40px;
  margin-left: auto;
  border-radius: 42px;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  background-color: white;
  width: 100%;
  max-width: 600px;
  margin-top: 5px;
  border-radius: 17px;
  font-size: 15px;
  padding: 15px 15px;

  .description {
    font-size: 13px;
    color: #a7afb7;
  }

  div {
    &.active {
      background-color: #cae9ff;
    }
  }
`;

export const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  margin: auto 0;
  padding: 10px 10px;
`;

export const RecommendedWordContainer = styled.div`
  display: flex;
  cursor: pointer;
  border-radius: 17px;
  list-style: none;
  cursor: pointer;
`;
