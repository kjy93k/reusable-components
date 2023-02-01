import { Accordion } from '../components/Accordion';
import { AccordionWrap } from '../components/Accordion/AccordionWrap';
import { StyleAccordionContent, StyleAccordionTitle } from '../components/UI/AccordionStyle';
import { useToggleActiveId } from '../hooks/useToggleActiveId';

const DefaultAccordion = () => {
  return (
    <>
      <h2>아코디언 태그 단독 사용 시 Props 종류 예제</h2>
      <AccordionWrap multiple>
        <Accordion
          title="Accordion sample title 0"
          content="Accordion sample content 0"
          iconOpen="-열기-"
          iconClose="-접기-"
          isOpen
        ></Accordion>
        <Accordion
          title="Accordion sample title 0"
          content="Accordion sample content 0"
          iconOpen="-열기-"
          iconClose="-접기-"
        ></Accordion>
        <Accordion
          title="Accordion sample title 0"
          content="Accordion sample content 0"
          iconOpen="-열기-"
          iconClose="-접기-"
        ></Accordion>
      </AccordionWrap>

      <h2>아코디언 Props 예제</h2>
      <AccordionWrap multiple>
        <Accordion>
          <Accordion.Title iconOpen="<열기>" iconClose="<접기>">
            Accordion sample title 0
          </Accordion.Title>
          <Accordion.Content>Accordion sample content 0 </Accordion.Content>
        </Accordion>
      </AccordionWrap>
    </>
  );
};
const SingleActiveAccordion = () => {
  return (
    <>
      <h2>단독 오픈형 아코디언 예제, activeId, toggleActiveId 전달 필수</h2>
      <AccordionWrap>
        {[...Array(4)].map((accordion, index) => {
          return (
            <div key={index}>
              <Accordion isOpen={index === 0}>
                {/* <Accordion isOpen={index === 0} activeId={activeId} toggleActiveId={toggleActiveId}> */}
                <Accordion.Title>Accordion sample title {index}</Accordion.Title>{' '}
                <Accordion.Content>Accordion sample content {index}</Accordion.Content>
              </Accordion>
            </div>
          );
        })}
      </AccordionWrap>
    </>
  );
};
const MultipleActiveAccordion = () => {
  return (
    <>
      <h2>멀티 오픈형 아코디언 예제</h2>
      <AccordionWrap multiple>
        {[...Array(4)].map((accordion, index) => {
          return (
            <div key={index}>
              <Accordion>
                <Accordion.Title>Accordion sample title {index}</Accordion.Title>
                <Accordion.Content>Accordion sample content {index}</Accordion.Content>
              </Accordion>
            </div>
          );
        })}
      </AccordionWrap>
    </>
  );
};

const Examples = () => {
  return (
    <>
      <div>
        <DefaultAccordion />
        <SingleActiveAccordion />
        <MultipleActiveAccordion />
      </div>
    </>
  );
};

export default Examples;
