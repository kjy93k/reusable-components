/** @jsxImportSource @emotion/react */
import { PropsWithChildren } from 'react';
import { TabsWrap, useTabsWrapContext } from './TabsWrap';
import { Tab } from './Tab';
import { TabContents } from './TabContents';

export interface TabsProps {
  isActive?: boolean;
}
/**
 * @example <Tabs.Wrap>
            <Tabs isActive>
              <Tabs.Tab> 탭 타이틀 </Tabs.Tab>
              <Tabs.Contents> 탭 컨텐츠 </Tabs.Contents>
            </Tabs>      
      </Tabs.Wrap>
 *
 * * required
 * @property parent* <Tabs.Wrap> Tabs를 감싸는 영역 </Tabs.Wrap>
 * @property children* <Tabs.Tab> 탭 타이틀 영역 </Tabs.Tab>
 * @property children  <Tabs.Contents> 탭 컨텐츠 영역 </Tabs.Contents>
 * @property className* isActive: 초기 랜더링 시 액티브 여부
 */
const Tabs = (props: PropsWithChildren<TabsProps>) => {
  const { children } = props;
  const { TabsStyle } = useTabsWrapContext();
  return <ul css={[TabsStyle.list]}>{children}</ul>;
};
/**
 * @property styles css`...css`: TabsStyle.list 기본값이 아닌 다른 스타일을 사용할 경우 사용
 */
Tabs.Wrap = TabsWrap;
/**
 * @property className  auto-width: 텍스트 길이에 맞춰 탭 길이가 늘어나고 탭이 많을 때 스크롤이 생김
 * @property styles css`...css`: TabsStyle.item 기본값이 아닌 다른 스타일을 사용할 경우 사용
 */
Tabs.Tab = Tab;
/**
 * @property styles css`...css`: TabsStyle.content 기본값이 아닌 다른 스타일을 사용할 경우 사용
 */
Tabs.Contents = TabContents;

export { Tabs };
