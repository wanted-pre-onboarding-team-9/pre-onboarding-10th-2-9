import styled from 'styled-components';

export const DropdownContainer = styled.ul`
  background-color: white;
  width: 80%;
  height: 100%;
  max-width: 500px;
  margin-top: 5px;
  border-radius: 17px;
  font-size: 15px;

  p {
    font-size: 13px;
    color: #a7afb7;
  }

  .keyword {
    margin-top: 20px;
  }

  li {
    margin: 10px 0;
    width: 90%;
    padding: 8px;
    border-radius: 3px;
    list-style: none;

    &.active {
      background-color: #cae9ff;
    }
  }
`;

export default DropdownContainer;
