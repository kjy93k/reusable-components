import { ComponentProps, createContext, useContext } from 'react';
import { useToggleActiveId } from '@/hooks/useToggleActiveId';
interface AccordionWrapProps {
  multiple?: boolean;
}
const AccordionWrapContext = createContext({
  activeId: '',
  toggleActiveId: (id: string) => {},
  setDefaultActiveId: (id: string) => {},
  multiple: false,
});
const useAccordionWrapContext = () => {
  return useContext(AccordionWrapContext);
};
const { Provider } = AccordionWrapContext;

const AccordionWrap = ({ children, multiple }: AccordionWrapProps & ComponentProps<'div'>) => {
  const [activeId, toggleActiveId, setDefaultActiveId] = useToggleActiveId();
  const value = { activeId, toggleActiveId, setDefaultActiveId, multiple: !!multiple };

  return (
    <>
      <Provider value={value}>{children}</Provider>
    </>
  );
};

export { AccordionWrap, useAccordionWrapContext };
