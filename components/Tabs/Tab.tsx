/** @jsxImportSource @emotion/react */
import { ComponentProps, PropsWithChildren, useEffect, useMemo } from 'react';
import { TabsProps } from '.';
import { TabProps, useTabsWrapContext } from './TabsWrap';

const Tab = ({
  children,
  isActive,
  index = 0,
  styles,
  ...props
}: PropsWithChildren<TabProps & TabsProps & { index?: number }> & ComponentProps<'li'>) => {
  const { activeIndex, setActiveIndex, TabsStyle } = useTabsWrapContext();
  useEffect(() => {
    !!isActive && setActiveIndex(index);
  }, [index, isActive, setActiveIndex]);
  const activeClass = useMemo(() => (activeIndex === index && 'active') || '', [activeIndex, index]);

  return (
    <li css={[TabsStyle.item, styles]} {...props} className={`${props.className} ${activeClass}`}>
      <button onClick={() => setActiveIndex(index)}>{children}</button>
    </li>
  );
};

export { Tab };
