import styled from 'styled-components';

export const Background = styled.div`
  height: 100vh;
  background-size: cover;
  background-color: #cbe9ff;
  display: flex;
  flex-direction: column;
`;

export const Guidance = styled.h2`
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin: 0;
  margin-top: 10vh;
  margin-bottom: 20px;
  text-align: center;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  width: 40vw;
  margin: 0 auto;
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  align-items: center;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  padding: 10px 10px;
`;

export const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  padding: 10px 10px;
`;

export const SearchInput = styled.input`
  border: 0;
  width: 30vw;
  font-size: 1.1rem;
`;

export const SearchBtn = styled.div`
  background-color: #007be9;
  margin-left: auto;
  border-radius: 42px;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  background-color: #ffffff;
  width: 40vw;
  border-radius: 15px;
  margin: 5px auto;
  padding: 10px 10px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;
