import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  max-width: 1024px;
  margin: auto;
  transform: translateX(12px);
  z-index: 9;
`;

export const StyledLink = styled(NavLink)`
  min-width: 96px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${props => (props.selected ? '#ffffff' : '#388e3c')};
  background: ${props => (props.selected ? '#388e3c' : 'unset')};
  border: 1px solid #388e3c;
  border-radius: 4px;
  padding: 12px 16px;
  text-decoration: none;
  margin-right: 24px;
  transition: 0.25s ease-in-out;

  &:hover {
    color: #ffffff;
    background: #388e3c;
  }
`;
