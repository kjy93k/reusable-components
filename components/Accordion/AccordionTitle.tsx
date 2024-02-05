/** @jsxImportSource @emotion/react */
import { ComponentProps } from 'react';
import { AccordionProps, useAccordionContext } from '.';
import { AccordionIcon } from './AccordionIcon';
import { AccordionTitleStyle } from './Accordion.style';

const AccordionTitle = ({
  children,
  iconOpen,
  iconClose,
  styles,
  ...props
}: Partial<AccordionProps> & ComponentProps<'button'>) => {
  const { toggleExpandActive } = useAccordionContext();
  return (
    <AccordionTitleStyle css={[styles]} onClick={toggleExpandActive} {...props}>
      {children}
      <AccordionIcon {...{ iconOpen, iconClose }} />
    </AccordionTitleStyle>
  );
};

export { AccordionTitle };
