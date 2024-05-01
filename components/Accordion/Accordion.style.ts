import { THEME } from '@/constants';
import styled from '@emotion/styled';

export const AccordionTitleStyle = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 4px;
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid ${THEME.COLORS.GRAY[30]};
  color: ${THEME.COLORS.GRAY[90]};
  .icon {
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    &-close {
      transform: rotate(180deg);
    }
  }
`;

export const AccordionContentStyle = styled.div`
  padding: 16px 4px 20px 4px;
`;
