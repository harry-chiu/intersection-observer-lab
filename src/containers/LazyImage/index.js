import React, { useEffect } from 'react';
import { Container, Title, List, ListItem, Image } from './style';

const LazyImage = () => {
  // 模擬拿取 30 張圖片
  const renderImages = () => {
    const idList = [];

    let counter = 1;
    const limit = 30;
    while (counter <= limit) {
      idList.push(counter);
      counter++;
    }

    // src      放低解析度的圖片
    // data-src 放真正要給使用者看的圖片
    return idList.map(id => (
      <ListItem key={id}>
        <Image
          className="lazy"
          src={`https://picsum.photos/id/${id}/10/10`}
          data-src={`https://picsum.photos/id/${id}/300/300`}
          alt=""
        />
      </ListItem>
    ));
  };

  // 懶加載圖片
  const lazyLoading = () => {
    // 設定 callback
    const callback = (entries, observer) => {
      entries.forEach(entry => {
        // 如果不是處於交互狀態就返回
        if (!entry.isIntersecting) return;

        // 將處於交互狀態的 image 拿出來
        // 並且將 src 替換為 data-src
        // 接下來移除 lazy 標籤
        // 最後取消觀察
        let image = entry.target;
        image.src = image.dataset.src;
        image.classList.remove('lazy');
        observer.unobserve(image);
      });
    };

    // 設定 options
    // 元件的 50% 出現在視野時觸發
    const options = {
      threshold: 0.5,
    };

    // 註冊 observer 並將含有 lazy 標籤的 image 全部納入觀察名單中
    const observer = new IntersectionObserver(callback, options);
    const lazyImages = document.getElementsByClassName('lazy');
    Array.from(lazyImages).forEach(lazyImage => {
      observer.observe(lazyImage);
    });
  };

  // 確認目前頁面加載的狀態
  // 確保 image 的元件都已經載入
  useEffect(() => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', lazyLoading);
      return;
    }

    lazyLoading();

    return () => document.removeEventListener('DOMContentLoaded', lazyLoading);
  }, []);

  return (
    <Container>
      <Title>Lazy Image</Title>
      <List>{renderImages()}</List>
    </Container>
  );
};

export default LazyImage;
