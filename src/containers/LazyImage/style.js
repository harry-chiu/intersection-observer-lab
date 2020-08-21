import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0 32px;
  margin: auto;
  overflow: hidden;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  transform: translateX(16px);
`;

export const ListItem = styled.li`
  position: relative;
  flex: 1;
  margin-right: 32px;
  margin-bottom: 32px;
  width: 100%;
  min-width: 300px;
  background: #cfcfcf;
  border-radius: 12px;

  & > .lazy {
    opacity: 0.5;
  }

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: 0.25s ease-in-out;
  border-radius: 12px;
  opacity: 1;
`;
