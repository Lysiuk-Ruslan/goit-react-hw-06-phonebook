import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 0;
  justify-content: center;
`;

export const FilmLink = styled(Link)`
  text-decoration: none;
  font-size: 24px;
  display: inline-block;
  color: black;
  margin: 0;
  padding: 0;
`;

export const FilmItem = styled.li`
  margin: 0;
  padding: 0;
  width: 350px;
  text-align: center;
  list-style: none;
  border: 1px solid #212121;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  list-style: none;

  :hover,
  :focus {
    background-color: teal;
    color: white;
    border-radius: 4px;
  }
`;

export const Image = styled.img`
  width: 350px;
  height: 525px;
  display: block;
  max-width: 100%;
`;
