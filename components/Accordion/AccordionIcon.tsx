import { IconProps, useAccordionContext } from '.';
import Image from 'next/image';
import { css } from '@emotion/react';
import { ComponentProps } from 'react';

// TODO: 필터에서 사용되는 아이콘, 추후 아코디언 스타일 생성 시 필터 아이콘과 함께 수정 필요
const DefaultIconOpen = (props: Partial<ComponentProps<typeof Image>>) => {
  return <Image width="16" height="16" alt="열기" src="/static/icons/icon-line-arrow-bottom.svg" {...props} />;
};
const DefaultIconClose = () => {
  return (
    <DefaultIconOpen
      css={css`
        transform: rotate(180deg);
      `}
      alt="닫기"
    />
  );
};

const AccordionIcon = ({ iconOpen = <DefaultIconOpen />, iconClose = <DefaultIconClose /> }: IconProps) => {
  const { isActive } = useAccordionContext();
  return <span className="icon">{isActive ? iconClose : iconOpen}</span>;
};

export { AccordionIcon };
