import styled from 'styled-components';

export const Background = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const IntroText = styled.h2`
  margin-bottom: 40px;
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin: 0;
  font-family: inherit;
  text-align: center;
`;

export const SearchBG = styled.div`
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  width: 40%;
  position: relative;
  padding-right: 8px;
`;

export const SearchWord = styled.input`
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  width: 100%;
  position: relative;
  padding: 8px 24px;
`;
export const SearchBtn = styled.button`
  border-radius: 100%;
  align-items: center;
  width: 50px;
  height: 44px;
  font-weight: 500;
  border: 0;
  cursor: pointer;
  background-color: #007be9;
  text-align: center;
  color: #ffffff;
  align-items: center;
`;

export const ResultDiv = styled.div`
  z-index: 1;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  flex-direction: column;
  display: flex;
  width: 40%;
  top: 100%;
  left: 0px;
  margin-top: 8px;
  padding-top: 24px;
  padding-bottom: 16px;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
`;

export const emptyResult = styled.div`
  color: rgb(167, 175, 183);
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  margin-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
  font-family: inherit;
  cursor: default;
`;

export const recmdResult = styled.div`
  color: rgb(106, 115, 123);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding-left: 24px;
  padding-right: 24px;
  font-family: inherit;
`;

export const ResultInput = styled.input`
  word-break: break-all;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  padding: 8px 24px;
  cursor: pointer;
  border: 0;
  &:input:focus {
    background-color: #cae9ff;
  }
`;
