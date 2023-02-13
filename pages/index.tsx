/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Link from 'next/link';
import { TabsStyle } from '@/components/Tabs/Tabs.style';
import { PLAYGROUND, THEME } from '@/constants';

const Playground = () => {
  return (
    <div
      css={[
        TabsStyle.list,
        css`
          justify-content: center;
          padding-top: 40px;
          gap: 10px;
        `,
      ]}
    >
      {PLAYGROUND.PATH.map((pathItem, index) => {
        return (
          <Link href={pathItem.href}>
            <span
              className={index === 0 ? 'active' : ''}
              css={css`
                display: inline-block;
                padding: 16px 20px;
              `}
            >
              {pathItem.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Playground;
