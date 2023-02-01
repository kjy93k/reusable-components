import { PropsWithChildren, useContext } from 'react';
import { AccordionProps, useAccordionContext } from '.';
import { StyleAccordionTitle } from '../UI/AccordionStyle';
import { AccordionIcon } from './AccordionIcon';

const AccordionTitle = ({ children, iconOpen, iconClose }: PropsWithChildren<Partial<AccordionProps>>) => {
  const { toggleExpandActive } = useAccordionContext();
  return (
    <StyleAccordionTitle onClick={toggleExpandActive}>
      {children}
      <AccordionIcon {...{ iconOpen, iconClose }} />
    </StyleAccordionTitle>
  );
};

export { AccordionTitle };
