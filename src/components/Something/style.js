import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  0% {
    display: block;
    transform: scale(1);
  }
  9% {
    transform: scale(1.1) translate(100px);
  }
  10% {
    transform: scale(1.1) translate(-200px);
  }
  11% {
    transform: scale(1.1) translate(0);
  }
  52% {
    transform: scale(2.5) translate(200px);
  }
  53% {
    transform: scale(2.5) translate(-150px);
  }
  54% {
    transform: scale(2.5) translate(100px);
  }
  75% {
    transform: scale(3.5) translate(200px);
  }
  76% {
    transform: scale(3.5) translate(-50px);
  }
  77% {
    transform: scale(3.5) translate(120px);
  }
  99% {
    transform: scale(5);
    opacity: 0.9;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.isShow ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  z-index: 3;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation-name: ${zoomIn};
  animation-duration: 0.4s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
`;
