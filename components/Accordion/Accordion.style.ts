import { THEME } from '@/constants';
import styled from '@emotion/styled';

export const AccordionTitleStyle = styled.button`
  padding: 10px;
  border-bottom: 1px solid #666;
  background-color: ${THEME.COLORS.GRAY[30]};
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
  & > .icon {
    display: flex;
    margin-left: auto;
  }
`;

export const AccordionContentStyle = styled.div`
  padding: 20px 10px;
`;
