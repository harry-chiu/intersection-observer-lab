import styled from 'styled-components';

export const Container = styled.div`
  color: ${props => props.color || '#000000'};
  background: ${props => props.background || 'transparent'};
  transition: 1s ease-in-out;
`;

export const Wrapper = styled.div`
  max-width: 1024px;
  padding: 16px 32px;
  margin: auto;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 16px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const ID = styled.p``;

export const Name = styled.p``;

export const Body = styled.p``;

export const ToggleLoading = styled.div``;

export const LoadingTag = styled.div`
  display: flex;
  justify-content: center;
`;

export const Skeleton = styled.div`
  width: 100%;
  height: 180px;
  background: #cfcfcf;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const PageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const Page = styled.span`
  display: inline-block;
  padding: 8px 12px;
  color: ${props => props.color || '#000000'};
  background: ${props => props.background || '#ffffff'};
  border: 1px solid #000000;
  border-radius: 2px;
`;
