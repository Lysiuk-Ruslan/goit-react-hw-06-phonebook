import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 20px;
`;

export const SmallContainer=styled.div`
text-align:center;`

export const MainInfo = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const MovieDescripton = styled.div`
  padding-right: 20px;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: 0px 4px 4px rgba(0, 0, 0, 0.15), #333c4e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const BackButton = styled.button`
  width: 150px;
  padding: 5px;
  border-radius: 4px;
  outline: none;
  border: none;
  background-color: teal;
  font-size: 16px;
  color: white;
`;

export const AdditionalInfoItem = styled.li`
  margin-bottom: 10px;
  list-style: none;
`;

export const AdditionalInfoLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;

  :hover,
  :focus {
    background-color: teal;
    color: white;
    border-radius: 4px;
  }
`;
