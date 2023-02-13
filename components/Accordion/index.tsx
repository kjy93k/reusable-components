import React, { PropsWithChildren, ReactNode, useContext, createContext, useCallback, useMemo, useEffect } from 'react';
import { AccordionWrap, useAccordionWrapContext } from './AccordionWrap';
import { SerializedStyles } from '@emotion/react';
import { AccordionStyle } from './Accordion.style';
import { useToggle } from '@/hooks/useToggle';
import { AccordionContent } from './AccordionContent';
import { AccordionIcon } from './AccordionIcon';
import { AccordionTitle } from './AccordionTitle';

export interface AccordionProps extends IconProps {
  title?: string;
  content?: ReactNode;
  activeId?: string;
  isOpen?: boolean;
  toggleActiveId?: (id: string) => void;
  styles?: CssProps['Accordion'] | CssProps['AccordionChild'];
}

interface CssProps {
  Accordion: {
    title: SerializedStyles | SerializedStyles[] | (SerializedStyles | SerializedStyles[])[];
    content: SerializedStyles | SerializedStyles[] | (SerializedStyles | SerializedStyles[])[];
  };
  AccordionChild: SerializedStyles | SerializedStyles[] | (SerializedStyles | SerializedStyles[])[];
}

export interface IconProps {
  iconOpen?: ReactNode;
  iconClose?: ReactNode;
}

const AccordionContext = createContext({
  expand: false,
  toggleExpandActive: () => {},
  isActive: false,
  AccordionStyle: { title: {}, content: {} },
});
const useAccordionContext = () => {
  return useContext(AccordionContext);
};
const { Provider } = AccordionContext;

const uuid = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substring(2);
  return dateString + randomness;
};
/**
 * @example  <Accordion.Wrap>
        <Accordion>
          <Accordion.Title> 아코디언 타이틀 </Accordion.Title>
          <Accordion.Content> 아코디언 컨텐츠 </Accordion.Content>
        </Accordion>
      </Accordion.Wrap>
 *
 * * required      
 * @property parent* <Accordion.Wrap> Accordion를 감싸는 영역 </Accordion.Wrap>
 * @property children <Accordion.Title> 아코디언 타이틀 영역 </Accordion.Title>
 * @property children  <Accordion.Contents> 아코디언 컨텐츠 영역 </Accordion.Contents>
 * @property className isOpen: 초기 랜더링 시 액티브 여부
 */
const Accordion = (props: PropsWithChildren<AccordionProps>) => {
  const { children, title, content, isOpen, iconOpen, iconClose, styles } = props;
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
  }, [isOpen, setDefaultActiveId, uniqueId]);

  // multiple Accordion에서는 컴포넌트 내의 expand 사용
  // single Accordion에서는 컴포넌트 외부의 wrap에 있는 active 아이디와 uniqueId를 비교하여 active
  const isActive = useMemo(() => (multiple ? expand : activeId === uniqueId), [activeId, expand, multiple, uniqueId]);

  const value = {
    expand,
    toggleExpandActive,
    isActive,
    AccordionStyle: (styles as CssProps['Accordion']) || AccordionStyle,
  };
  return (
    <Provider value={value}>
      <div>
        {children || (
          <>
            <Accordion.Title {...{ iconOpen, iconClose }}>{title}</Accordion.Title>
            <Accordion.Content>{content}</Accordion.Content>
          </>
        )}
      </div>
    </Provider>
  );
};
/**
 *
 * @property className multiple: 멀티플 오픈 여부, 기본값은 단일 오픈
 */
Accordion.Wrap = AccordionWrap;
/**
 *
 * @property className iconOpen: 기본값이 아닌 다른 아이콘을 사용할 경우 사용
 * @property className iconClose: 기본값이 아닌 다른 아이콘을 사용할 경우 사용
 * @property styles css`...css`: AccordionStyle.title 기본값이 아닌 다른 스타일을 사용할 경우 사용
 */
Accordion.Title = AccordionTitle;
Accordion.Icon = AccordionIcon;
/**
 *
 * @property styles css`...css`: AccordionStyle.contnet 기본값이 아닌 다른 스타일을 사용할 경우 사용
 */
Accordion.Content = AccordionContent;

export { Accordion, useAccordionContext };
