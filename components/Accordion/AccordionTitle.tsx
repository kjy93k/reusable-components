/** @jsxImportSource @emotion/react */
import { ComponentProps, PropsWithChildren, useContext } from 'react';
import { AccordionProps, useAccordionContext } from '.';
import { AccordionIcon } from './AccordionIcon';

const AccordionTitle = ({
  children,
  iconOpen,
  iconClose,
  styles,
  ...props
}: PropsWithChildren<Partial<AccordionProps>> & ComponentProps<'button'>) => {
  const { toggleExpandActive, AccordionStyle } = useAccordionContext();
  return (
    <button css={[AccordionStyle.title, styles]} onClick={toggleExpandActive} {...props}>
      {children}
      <AccordionIcon {...{ iconOpen, iconClose }} />
    </button>
  );
};

export { AccordionTitle };
