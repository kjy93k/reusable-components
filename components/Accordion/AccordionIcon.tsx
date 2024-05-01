import { IconProps, useAccordionContext } from '.';
import Image from 'next/image';
import { css } from '@emotion/react';
import { ComponentProps } from 'react';

const DefaultIconOpen = (props: Partial<ComponentProps<typeof Image>>) => {
  return <Image width="16" height="16" alt="열기" src="/static/icons/icon-line-arrow-bottom.svg" {...props} />;
};
const DefaultIconClose = () => {
  return (
    <DefaultIconOpen
      alt="닫기"
    />
  );
};

const AccordionIcon = ({ iconOpen = <DefaultIconOpen />, iconClose = <DefaultIconClose /> }: IconProps) => {
  const { isActive } = useAccordionContext();
  return <span className={`icon ${isActive && 'icon-close'}`}>{isActive ? iconClose : iconOpen}</span>;
};

export { AccordionIcon };
