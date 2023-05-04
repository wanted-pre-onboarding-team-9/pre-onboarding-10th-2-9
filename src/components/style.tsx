import styled from 'styled-components';

export const DropdownContainer = styled.ul`
  background-color: white;
  width: 80%;
  height: 100%;
  max-width: 500px;
  margin-top: 5px;
  border-radius: 17px;
  font-size: 15px;
  padding: 24px 24px 16px;
  box-shadow: rgba(30, 32, 37, 0.1) 0 2px 10px;
`;

export const Description = styled.p`
  font-size: 13px;
  color: rgb(106, 115, 123);
`;

export const Keyword = styled.div`
  margin-top: 20px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 10px 0;
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  list-style: none;

  &.active {
    background-color: #cae9ff;
  }
`;

export const IconContainer = styled.div`
  color: rgb(167, 175, 183);
  min-width: 16px;
  height: 16px;
  margin-top: 3px;
  margin-right: 12px;
`;

export const Text = styled.div`
  white-space: break-spaces;
`;

export const SameWord = styled(Text)`
  font-family: inherit;
  font-weight: 700;
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
