import { Accordion } from '@/components/Accordion';
import { AccordionStyle } from '@/components/Accordion/Accordion.style';
import { css } from '@emotion/react';
const DefaultAccordion = () => {
  return (
    <>
      <h2>아코디언 태그 단독 사용 시 Props 종류 예제</h2>
      <Accordion.Wrap multiple>
        <Accordion
          title="Accordion sample title 0"
          content="Accordion sample content 0"
          iconOpen="-열기-"
          iconClose="-접기-"
          isOpen
        ></Accordion>
      </Accordion.Wrap>
      <Accordion.Wrap multiple>
        <Accordion
          title="Accordion sample title 0"
          content="Accordion sample content 0"
          iconOpen="-열기-"
          iconClose="-접기-"
          isOpen
        ></Accordion>
      </Accordion.Wrap>

      <h2>아코디언 Props 예제</h2>
      <Accordion.Wrap multiple>
        <Accordion>
          <Accordion.Title
            iconOpen="<열기>"
            iconClose="<접기>"
            styles={css`
              background-color: black;
              color: white;
              border-radius: 10px;
            `}
          >
            Accordion sample title 0
          </Accordion.Title>
          <Accordion.Content>Accordion sample content 0 </Accordion.Content>
        </Accordion>
      </Accordion.Wrap>
    </>
  );
};
const SingleActiveAccordion = () => {
  return (
    <>
      <h2>단독 오픈형 아코디언 예제, activeId, toggleActiveId 전달 필수</h2>
      <Accordion.Wrap>
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
      </Accordion.Wrap>
    </>
  );
};
const MultipleActiveAccordion = () => {
  return (
    <>
      <h2>멀티 오픈형 아코디언 예제</h2>
      <Accordion.Wrap multiple>
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
      </Accordion.Wrap>
    </>
  );
};

const AccordionExamples = () => {
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

export default AccordionExamples;
