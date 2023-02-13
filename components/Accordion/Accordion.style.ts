import { THEME } from '@/constants';
import { css } from '@emotion/react';

const AccordionTitleStyle = css`
  padding: 12px 20px;
  border-bottom: 3px solid ${THEME.COLORS.GRAY[40]};
  background-color: ${THEME.COLORS.GRAY[30]};
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
`;

const AccordionContentStyle = css`
  padding: 32px 20px;
`;

const AccordionStyle = {
  title: [AccordionTitleStyle],
  content: [AccordionContentStyle],
};

export { AccordionStyle };
