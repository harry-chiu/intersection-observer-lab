import React, { useRef, useState, useEffect } from 'react';
import {
  Container,
  Title,
  StatusContainer,
  StatusList,
  StatusListItem,
  StatusTitle,
  StatusContent,
  RootContainer,
  RootTag,
  Target,
} from './style';

const Home = () => {
  const rootRef = useRef();
  const targetRef = useRef();
  const [entryInformation, setEntryInformation] = useState({});
  const [toggleCount, setToggleCount] = useState(0);
  const isIntersecting = entryInformation.isIntersecting || 'false';
  const intersectionRatio = entryInformation.intersectionRatio || '0';
  const target = entryInformation.target || '';
  const time = entryInformation.time || '';

  useEffect(() => {
    // 取得 root 和 target 元件
    const root = rootRef.current;
    const target = targetRef.current;

    // 確認 root 和 target 元件存在
    if (!root || !target) return;

    // 設定 callback
    const callback = entries => {
      entries.forEach(entry => {
        console.log(entry);
        setEntryInformation(entry);
        setToggleCount(previous => previous + 1);
      });
    };

    // 設定 options
    const options = {
      root: root,
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    // 建立 observer 並對 target 進行觀察
    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);

    return () => observer.unobserve(target);
  }, [rootRef, targetRef]);

  return (
    <Container>
      {/* 頁面標題 */}
      <Title>Intersection Observer</Title>

      {/* Status 容器 */}
      <StatusContainer>
        <StatusList>
          {/* Toggle Count 觸發幾次 */}
          <StatusListItem>
            <StatusTitle>Toggle Count:</StatusTitle>
            <StatusContent>{toggleCount} 次</StatusContent>
          </StatusListItem>

          {/* isIntersecting 是否和頁面交互 */}
          <StatusListItem>
            <StatusTitle>isIntersecting: </StatusTitle>
            <StatusContent>{isIntersecting.toString()}</StatusContent>
          </StatusListItem>

          {/* intersectionRatio 交互的比例 */}
          <StatusListItem>
            <StatusTitle>intersectionRatio: </StatusTitle>
            <StatusContent>{intersectionRatio.toString()}</StatusContent>
          </StatusListItem>

          {/* Target 產生交互的元件 */}
          <StatusListItem>
            <StatusTitle>target: </StatusTitle>
            <StatusContent>{target.innerText}</StatusContent>
          </StatusListItem>

          {/* Time 交互觸發的時間 */}
          <StatusListItem>
            <StatusTitle>Time: </StatusTitle>
            <StatusContent>{time} 毫秒</StatusContent>
          </StatusListItem>
        </StatusList>
      </StatusContainer>

      {/* Root 容器 */}
      <RootContainer ref={rootRef}>
        {/* 作為提示的 Tag */}
        <RootTag>root: RootContainer</RootTag>

        {/* 觀察的目標 */}
        <Target ref={targetRef}>This is target</Target>
      </RootContainer>
    </Container>
  );
};

export default Home;
