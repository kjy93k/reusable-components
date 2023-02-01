import { PropsWithChildren } from 'react';
import { AccordionProps, useAccordionContext } from '.';
import { StyleAccordionContent } from '../UI/AccordionStyle';

const AccordionContent = ({ children }: PropsWithChildren<Partial<AccordionProps>>) => {
  const { isActive } = useAccordionContext();

  return <>{isActive && <StyleAccordionContent>{children}</StyleAccordionContent>}</>;
};

export { AccordionContent };
