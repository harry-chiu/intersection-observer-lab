import React from 'react';
import { Container, Image } from './style';

const Something = props => {
  const { page } = props;
  const isShow = page === 7;
  const imageSrc =
    'https://cdn.vox-cdn.com/thumbor/x-4_gX51odoc_j6_jGGbzeGWf3M=/0x0:1280x720/1200x0/filters:focal(0x0:1280x720):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11980261/slenderman_1125272.jpeg';

  return (
    <Container isShow={isShow}>
      <Image src={imageSrc} alt="" />
    </Container>
  );
};

export default Something;
