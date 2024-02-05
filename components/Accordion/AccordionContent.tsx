import { ComponentProps } from 'react';
import { AccordionProps, useAccordionContext } from '.';
import { AccordionContentStyle } from './Accordion.style';

const AccordionContent = ({ children, styles, ...props }: Partial<AccordionProps> & ComponentProps<'div'>) => {
  const { isActive } = useAccordionContext();

  return (
    <>
      {isActive && (
        <AccordionContentStyle css={[styles]} {...props}>
          {children}
        </AccordionContentStyle>
      )}
    </>
  );
};

export { AccordionContent };
