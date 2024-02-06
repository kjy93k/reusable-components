 
import { ComponentProps, PropsWithChildren } from 'react';
import { TabProps, useTabsWrapContext } from './TabsWrap';

const TabContents = ({ children, styles, ...props }: PropsWithChildren<TabProps> & ComponentProps<'div'>) => {
  const { TabsStyle } = useTabsWrapContext();

  return (
    <div css={[TabsStyle.content, styles]} {...props}>
      {children}
    </div>
  );
};

export { TabContents };
