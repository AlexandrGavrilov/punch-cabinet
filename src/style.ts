import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .ant-form-item {
    margin-bottom: 20px;
    .ant-form-item-explain{
      position: absolute;
      top: 45px;
      left: 10px;
      z-index: 10;
      background: #ff6767;
      color: #fff;
      padding: 10px;
      border-radius: 25px;
      font-size: 12px;
      &:after {
        content: "";
        position: absolute;
        width: 15px;
        height: 15px;
        background: #ff6767;
        left: 10px;
        top: -4px;
        transform: rotate(23deg);
      }
    }
    *{
      overflow: visible;
    }
  }
`;
