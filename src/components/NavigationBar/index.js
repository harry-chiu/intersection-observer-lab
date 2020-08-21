import React, { useState } from 'react';
import { Container, StyledLink } from './style';

const HOME = '/';
const INFINITE_LIST = '/infinite-list';
const LAZY_IMAGE = '/lazy-image';

const NavigationBar = () => {
  const defaultPath = window.location.pathname;
  const [currentPath, setCurrentPath] = useState(defaultPath);
  const isHome = currentPath === HOME;
  const isInfiniteList = currentPath === INFINITE_LIST;
  const isLazyImage = currentPath === LAZY_IMAGE;

  return (
    <Container>
      <StyledLink
        to={HOME}
        selected={isHome}
        onClick={() => setCurrentPath(HOME)}
      >
        Home
      </StyledLink>
      <StyledLink
        to={INFINITE_LIST}
        selected={isInfiniteList}
        onClick={() => setCurrentPath(INFINITE_LIST)}
      >
        Infinite List
      </StyledLink>
      <StyledLink
        to={LAZY_IMAGE}
        selected={isLazyImage}
        onClick={() => setCurrentPath(LAZY_IMAGE)}
      >
        Lazy Image
      </StyledLink>
    </Container>
  );
};

export default NavigationBar;
