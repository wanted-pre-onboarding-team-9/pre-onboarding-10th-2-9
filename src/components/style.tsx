import styled from 'styled-components';

export const DropdownContainer = styled.div`
  background-color: white;
  width: 80%;
  height: 100%;
  max-width: 500px;
  margin-top: 5px;
  border-radius: 17px;
  font-size: 15px;
  padding: 20px 20px;

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
