import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 1600px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-size: 12px;
  gap: 20px;
`;
export const HeaderNav = styled.nav`
  font-size: 24px;
  display: flex;
  margin: 0;
  gap: 20px;
  width: 200px;
  justify-content: space-between;
`;

export const HeaderLinks = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 30px;

  font-weight: 700;
  color: black;
  text-align: center;

  border-radius: 4px;

  &.active {
    background-color: teal;
    color: white;
  }
`;
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: 0px 4px 4px rgba(0, 0, 0, 0.15), #333c4e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
