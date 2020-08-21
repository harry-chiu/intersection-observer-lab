import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 0 32px;
  margin: auto;
`;

export const Title = styled.h1`
  margin: 32px 0 0;
  text-align: center;
`;

export const StatusContainer = styled.div``;

export const StatusList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 32px;
`;

export const StatusListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const StatusTitle = styled.div`
  flex: 1;
  font-weight: bold;
`;

export const StatusContent = styled.div`
  flex: 4;
  color: #303f9f;
`;

export const RootContainer = styled.div`
  position: relative;
  height: 320px;
  overflow: auto;
  border: 1px solid #388e3c;
`;

export const RootTag = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: inline-block;
  padding: 4px;
  border: 1px solid #388e3c;
  border-top: none;
  border-left: none;
`;

export const Target = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1000px auto 1000px;
  width: 200px;
  height: 200px;
  color: #ffffff;
  background: #ff0000;
`;
