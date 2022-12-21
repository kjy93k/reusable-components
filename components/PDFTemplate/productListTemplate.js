import React from 'react';
import styled from 'styled-components';

const StyledProductList = styled.div`
  width: 1123px;
  height: 794px;
  padding: 33px 48px;
  display: flex;
  flex-direction: column;
  font-family: Arial;
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
    margin-top: 24px;
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
      height: 380px;
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
      text-align: center;
      font-weight: bold;
      margin-bottom: 5px;
      font-size: 14px;
    }
    .description {
      flex: 1;
      word-break: break-all;
    }
    .note {
      height: 39px;
      word-break: break-all;
    }
  }
  .pager {
    text-align: right;
    font-size: 13px;
    margin-top: 10px;
    color: #666;
  }
`;

const ProductListTemplate = (props) => {
  const { children, productList } = props;
  let totalPage = 5;
  function slice(string, length, ellipsis = ' ...') {
    return string.length > length ? string.slice(0, length) + ellipsis : string;
  }
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
                        <div className="price">{productItem.price || 'N/A'}</div>
                        <div className="description">{slice(productItem.description, 400) || 'N/A'}</div>
                        <div className="note">
                          <strong>Note:</strong>
                          {slice(productItem.note, 100) || 'N/A'}
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
