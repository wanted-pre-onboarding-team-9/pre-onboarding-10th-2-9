import styled from 'styled-components';

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

export const DropdownContainer = styled.div`
  background-color: white;
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 20px;
  font-size: 15px;

  overflow: hidden;
`;

export const SearchNoticeWord = styled.p`
  padding: 5px 15px;
  font-size: 1.3rem;
  color: #a7afb7;
`;

export const SearchDropdownUnit = styled.div<{ isFocus: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 1.5rem;
  border-radius: 10px;

  background-color: ${(props) => (props.isFocus ? '#a4a4a4' : 'white')};

  & > svg {
    margin-right: 10px;
    color: gray;
  }
`;

export const NoRecommandWords = styled.p`
  padding: 5px 15px;
  font-size: 1.5rem;
  color: #a7afb7;
`;
