import React, { useState, useEffect, useRef } from 'react';
import Something from '../../components/Something';
import colorTranslator from '../../utils/colorTranslator';
import backgroundTranslator from '../../utils/backgrounTranslator';
import {
  Container,
  Wrapper,
  Title,
  List,
  ListItem,
  ID,
  Name,
  Body,
  ToggleLoading,
  LoadingTag,
  Skeleton,
  Page,
  PageWrapper,
} from './style';

const InfiniteList = () => {
  const toggleLoadingRef = useRef(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const color = colorTranslator(page);
  const background = backgroundTranslator(page);

  // 換頁時會觸發的 hook
  // 也就是無限加載時會觸發換頁
  useEffect(() => {
    const fetchData = async () => {
      // 模擬打一次 API 拿 10 筆
      const start = (page - 1) * 10 + 1;
      const end = page * 10;
      const idList = [];

      let counter = start;
      while (counter <= end) {
        idList.push(counter);
        counter++;
      }

      // 觸發 Loading 狀態並發送 Request
      setIsLoading(true);
      const newData = await Promise.all(
        idList.map(async id => {
          const api = 'https://jsonplaceholder.typicode.com/comments';
          const response = await fetch(`${api}/${id}`);

          return await response.json();
        }),
      );

      // 關閉 Loading 狀態並 setData
      setIsLoading(false);
      setData(previousData => [...previousData, ...newData]);
    };

    fetchData();
  }, [page]);

  // 建立 observer 及綁定事件的 hook
  useEffect(() => {
    // 設定 callback
    const callback = entries => {
      entries.forEach(entry => {
        // 如果沒有在交互狀態就返回
        console.log(entry);
        if (!entry.isIntersecting || !data.length) return;

        setPage(previousPage => previousPage + 1);
      });
    };

    // 設定 options
    // threshold 表示完全呈現才算是有交互
    const options = {
      threshold: 1,
    };

    // 建立 observer 並開始觀察 ToggleLoading 元件
    const observer = new IntersectionObserver(callback, options);
    const toggleLoading = toggleLoadingRef.current;
    if (!toggleLoading) return;

    observer.observe(toggleLoading);

    return () => observer.unobserve(toggleLoading);
  }, [toggleLoadingRef, data]);

  return (
    <Container color={color} background={background}>
      <Wrapper>
        {/* 標題 */}
        <Title>Inifinite List</Title>

        {/* Infinite List 無限加載列表 */}
        <List>
          {/* 尚未載入資料時的 Skeleton */}
          {!data.length && <Skeleton />}
          {!data.length && <Skeleton />}
          {!data.length && <Skeleton />}

          {/* 呈現列表資料 */}
          {data.length &&
            data.map(data => (
              <ListItem key={data.id}>
                <ID>id: {data.id}</ID>
                <Name>name: {data.name}</Name>
                <Body>body: {data.body}</Body>
              </ListItem>
            ))}

          {/* 觸發加載的元件 */}
          <ToggleLoading ref={toggleLoadingRef} />

          {/* 如果在正在載入就顯示 Loading */}
          {isLoading && <LoadingTag>Loading...</LoadingTag>}
        </List>
      </Wrapper>
      <Something page={page} />
      <PageWrapper>
        <Page color={color} background={background}>
          {page}
        </Page>
      </PageWrapper>
    </Container>
  );
};

export default InfiniteList;
