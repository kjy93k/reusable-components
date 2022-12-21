import React from 'react';
import styled from 'styled-components';

const StyledProductList = styled.div`
  width: 1123px;
  height: 794px;
  padding: 33px 48px;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  box-sizing: border-box;
  border-color: #000;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .logo {
      height: 48px;
      display: block;
    }
    .name {
      position: absolute;
      right: 0;
      font-size: 13px;
      color: #777;
    }
  }
  .content {
    margin-top: 40px;
    flex: 1;

    .items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 10px;
      height: 100%;
      margin: 0;
    }
    .item {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
    }
    .thumbnail {
      /* height: 380px; */
      height: 248px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #efefef;

      img {
        display: block;
        max-width: 100%;
        max-height: 100%;
      }
    }
    .info {
      margin-top: 10px;
      font-size: 13px;
      display: flex;
      flex-direction: column;
      flex: 1;

      div:not(:first-child) {
        margin-top: 5px;
      }
    }
    .title {
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 24px;
    }
    .description {
      font-size: 18px;
      display: -webkit-box;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      line-height: 1.5;
      -webkit-line-clamp: 6;
      height: calc(18px * 1.5 * 6);
    }
    .price {
      flex: 1;
      color: #666;
    }
    .note {
      display: -webkit-box;
      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      line-height: 18px;
      -webkit-line-clamp: 3;
      height: calc(18px * 3);
      color: #666;
    }
  }
  .pager {
    text-align: right;
    font-size: 13px;
    margin-top: 20px;
    color: #666;
  }
`;

const ProductListTemplate = (props) => {
  const { children, productList } = props;
  let totalPage = 5;

  return (
    <div id="pdf">
      {[...Array(totalPage)].map((pages, index) => {
        return (
          <StyledProductList key={index}>
            <div className="header">
              <img className="logo" src="https://i.imgur.com/OYDOpv4.png" />
              <div className="name">Visitor Name</div>
            </div>
            <div className="content">
              <ul className="items">
                {productList.map((productItem, index) => {
                  return (
                    <li className="item" key={index}>
                      <div className="thumbnail">
                        <img src={productItem.thumb} />
                      </div>
                      <div className="info">
                        <div className="title">{productItem.title}</div>
                        <div className="description">{productItem.description || '-'}</div>
                        <div className="price">{productItem.price || '-'}</div>
                        <div className="note">
                          <p>Note:</p>
                          {productItem.note || '-'}
                        </div>
                      </div>
                      {children}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="pager">
              Page {index + 1} of {totalPage}
            </div>
          </StyledProductList>
        );
      })}
    </div>
  );
};

export default ProductListTemplate;
