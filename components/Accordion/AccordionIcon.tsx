import { IconProps, useAccordionContext } from '.';

const AccordionIcon = ({ iconOpen = '+', iconClose = '-' }: IconProps) => {
  const { isActive } = useAccordionContext();
  return <span>{isActive ? iconClose : iconOpen}</span>;
};

export { AccordionIcon };
