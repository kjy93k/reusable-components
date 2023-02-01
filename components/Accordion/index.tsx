import React, {
  PropsWithChildren,
  ReactNode,
  useContext,
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react';
import { useAccordionWrapContext } from './AccordionWrap';

import { useToggle } from '../../hooks/useToggle';
import { AccordionContent } from './AccordionContent';
import { AccordionIcon } from './AccordionIcon';
import { AccordionTitle } from './AccordionTitle';

export interface AccordionProps extends IconProps {
  title?: string;
  content?: ReactNode;
  activeId?: string;
  isOpen?: boolean;
  toggleActiveId?: (id: string) => void;
}

export interface IconProps {
  iconOpen?: ReactNode;
  iconClose?: ReactNode;
}

const AccordionContext = createContext({ expand: false, toggleExpandActive: () => {}, isActive: false });
const useAccordionContext = () => {
  return useContext(AccordionContext);
};
const { Provider } = AccordionContext;

const uuid = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substring(2);
  return dateString + randomness;
};

const Accordion = (props: PropsWithChildren<AccordionProps>) => {
  const { children, title, content, isOpen, iconOpen, iconClose } = props;
  const { activeId, toggleActiveId, setDefaultActiveId, multiple } = useAccordionWrapContext();
  // Multiple Active를 위한 state
  const [expand, toggleExpand] = useToggle(!!isOpen);
  // Single Active를 위한 uniqueId 생성
  const uniqueId = useMemo(() => uuid(), []);
  const setActiveId = useCallback(() => {
    !multiple && toggleActiveId(uniqueId);
  }, []);

  const toggleExpandActive = () => {
    // multiple Accordion에서만 사용
    toggleExpand();
    // single Accordion에서만 사용
    setActiveId();
  };
  // single Accordion에서 isOpen인 경우 default Active 설정
  useEffect(() => {
    !!isOpen && setDefaultActiveId(uniqueId);
  }, []);

  // multiple Accordion에서는 컴포넌트 내의 expand 사용
  // single Accordion에서는 컴포넌트 외부의 wrap에 있는 active 아이디와 uniqueId를 비교하여 active
  const isActive = useMemo(() => (multiple ? expand : activeId === uniqueId), [activeId, expand, multiple]);
  const value = { expand, toggleExpandActive, isActive };
  return (
    <Provider value={value}>
      <div>
        {children || (
          <>
            <AccordionTitle {...{ iconOpen, iconClose }}>{title}</AccordionTitle>
            <AccordionContent>{content}</AccordionContent>
          </>
        )}
      </div>
    </Provider>
  );
};

Accordion.Title = AccordionTitle;
Accordion.Icon = AccordionIcon;
Accordion.Content = AccordionContent;

export { Accordion, useAccordionContext };
