/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';
import React, { JSXElementConstructor, ReactElement, useCallback, useMemo, useState } from 'react';
import { createContext, PropsWithChildren, useContext } from 'react';
import { Tabs } from '.';
import { TabsStyle } from './Tabs.style';

export interface TabProps {
  styles?: CssProps['Tab'] | CssProps['TabChild'];
}

interface CssProps {
  Tab: {
    list: SerializedStyles | SerializedStyles[] | (SerializedStyles | SerializedStyles[])[];
    item: SerializedStyles | SerializedStyles[] | (SerializedStyles | SerializedStyles[])[];
    content: SerializedStyles | SerializedStyles[] | (SerializedStyles | SerializedStyles[])[];
  };
  TabChild: SerializedStyles | SerializedStyles[] | (SerializedStyles | SerializedStyles[])[];
}

const TabsWrapContext = createContext({
  activeIndex: 0,
  setActiveIndex: (index: number) => {},
  TabsStyle: { list: {}, item: {}, content: {} },
});
const useTabsWrapContext = () => {
  return useContext(TabsWrapContext);
};
const { Provider } = TabsWrapContext;

const TabsWrap = (props: PropsWithChildren<TabProps>) => {
  const [activeIndex, setActive] = useState(0);
  const setActiveIndex = useCallback((index: number) => setActive(() => index), []);
  const { children, styles } = props;
  const value = { activeIndex, setActiveIndex, TabsStyle: (styles as CssProps['Tab']) || TabsStyle };
  const TabsArr = useMemo(() => React.Children.toArray(children), [children]);
  const ActiveTabContent = useMemo(
    () => (TabsArr[activeIndex] as ReactElement<any, string | JSXElementConstructor<any>>).props.children[1],
    [TabsArr, activeIndex],
  );

  return (
    <Provider value={value}>
      <>
        <Tabs>
          {TabsArr.map((tabs, index) => {
            if (React.isValidElement(tabs)) {
              const { isActive } = tabs.props;
              const Tab = React.Children.toArray(tabs.props.children)[0];
              return (
                <React.Fragment key={index}>
                  {React.isValidElement<{ isActive: boolean; index: number }>(Tab) &&
                    typeof Tab.type === 'function' &&
                    Tab.type.name === 'Tab' &&
                    React.cloneElement(Tab, { isActive, index })}
                </React.Fragment>
              );
            }
          })}
        </Tabs>
        {ActiveTabContent?.type.name === 'TabContents' && ActiveTabContent}
      </>
    </Provider>
  );
};

export { TabsWrap, useTabsWrapContext };
