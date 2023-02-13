/** @jsxImportSource @emotion/react */
import { ComponentProps, PropsWithChildren } from 'react';
import { AccordionProps, useAccordionContext } from '.';

const AccordionContent = ({
  children,
  styles,
  ...props
}: PropsWithChildren<Partial<AccordionProps>> & ComponentProps<'div'>) => {
  const { isActive, AccordionStyle } = useAccordionContext();

  return (
    <>
      {isActive && (
        <div css={[AccordionStyle.content, styles]} {...props}>
          {children}
        </div>
      )}
    </>
  );
};

export { AccordionContent };
