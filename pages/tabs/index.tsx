import React from 'react';
import { Tabs } from '@/components/Tabs';
const TabsExamples = () => {
  return (
    <>
      <Tabs.Wrap>
        {[...Array(4)].map((tab, index) => {
          return (
            <Tabs key={index} isActive={index === 3}>
              <Tabs.Tab>
                {`탭 타이틀${index}`}
                {index === 1 && '좀 더 길게~~~'}
              </Tabs.Tab>
              <Tabs.Contents>탭 컨텐츠{index}</Tabs.Contents>
            </Tabs>
          );
        })}
      </Tabs.Wrap>
      <Tabs.Wrap>
        {[...Array(4)].map((tab, index) => {
          return (
            <Tabs key={index} isActive={index === 1}>
              <Tabs.Tab className="auto-width">
                {`탭 타이틀${index}`}
                {index === 1 && '좀 더 길게~~~'}
              </Tabs.Tab>
              <Tabs.Contents>탭 컨텐츠{index}</Tabs.Contents>
            </Tabs>
          );
        })}
      </Tabs.Wrap>
    </>
  );
};

export default TabsExamples;
