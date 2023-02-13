import { css } from '@emotion/react';
import { THEME } from '@/constants';

const TabsListStyle = css`
  list-style: none;
  display: flex;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior: none;
`;
const TabsItemStyle = css`
  border-bottom: 3px solid ${THEME.COLORS.GRAY[40]};
  color: ${THEME.COLORS.GRAY[50]};
  font-size: 16px;
  font-weight: 500;
  flex: 1;

  &.auto-width {
    flex-basis: auto;
    flex-shrink: 0;
  }

  &.active {
    border-color: ${THEME.COLORS.GRAY[90]};
    color: ${THEME.COLORS.GRAY[90]};
  }

  button {
    width: 100%;
    height: 100%;
    padding: 16px 20px;
  }
`;

const TabsContentStyle = css`
  padding: 32px 0px;
`;

const TabsStyle = {
  list: [TabsListStyle],
  item: [TabsItemStyle],
  content: [TabsContentStyle],
};

export { TabsStyle };
