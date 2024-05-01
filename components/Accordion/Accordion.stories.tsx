import { Accordion } from '@/components/Accordion';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion > = ({children, ...args}) => {
  return (
    <Accordion.Wrap >
      {[...Array(3)].map((_, i) => {
      return (<Accordion {...args} key={i}>
        <Accordion.Title >아코디언 타이틀 {i}</Accordion.Title>
        <Accordion.Content>내용 {i}</Accordion.Content>
      </Accordion>)
      })}
    </Accordion.Wrap>
  )
}

const MultipleOpenTemplate: ComponentStory<typeof Accordion > = ({children, ...args}) => {
  return (
    <Accordion.Wrap multiple>
      {[...Array(3)].map((_, i) => {
      return (<Accordion {...args} key={i}>
        <Accordion.Title >아코디언 타이틀 {i}</Accordion.Title>
        <Accordion.Content>내용 {i}</Accordion.Content>
      </Accordion>)
      })}
    </Accordion.Wrap>
  )
}

const ChangeIconTemplate: ComponentStory<typeof Accordion > = ({children, ...args}) => {
  return (
    <Accordion.Wrap multiple>
     <Accordion {...args} >
        <Accordion.Title iconOpen={<img width="16" height="16" alt="열기" src="/static/icons/icon-plus.svg" />} iconClose={<img width="16" height="16" alt="닫기" src="/static/icons/icon-minus.svg" />} >아코디언 타이틀 0</Accordion.Title>
        <Accordion.Content>내용 0</Accordion.Content>
      </Accordion>
      <Accordion {...args} disabled >
        <Accordion.Title iconOpen={<img width="16" height="16" alt="열기" src="/static/icons/icon-plus.svg" />} iconClose={<img width="16" height="16" alt="닫기" src="/static/icons/icon-minus.svg" />} >아코디언 타이틀 1</Accordion.Title>
        <Accordion.Content>내용 1</Accordion.Content>
      </Accordion>
    </Accordion.Wrap>
  )
}
export const SingleOpen = Template.bind({});
SingleOpen.args = {
  isOpen: false,
};

export const MultipleOpen = MultipleOpenTemplate.bind({});
MultipleOpen.args = {
  isOpen: false,
};

export const ChangeIcon = ChangeIconTemplate.bind({});
MultipleOpen.args = {
  isOpen: false,
};

