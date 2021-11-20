import styled, { css } from 'styled-components';
import { Layout, Menu } from 'antd';

import { applyMedia } from 'utils/media';

export const SWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const SHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  ${applyMedia('tablet', css`
    
    height: 30px;
  `)}
`;

export const SMenu = styled(Menu)`
  background: rgba(0, 0, 0, 0);
  font-size: 18px;
  border: none;

  .ant-menu-title-content a {
    color: #ff6767;
    &:hover {
      color: #ff6767;
    };
  }
  
  &&&& .ant-menu-item-selected:after {
    border-bottom: 2px solid #ff6767;
    &:hover {
      border-bottom: 2px solid #ff6767;
    }
  }

  .ant-menu-item {
    &:after {
      bottom: -4px;
    }
  }

  ${applyMedia('tablet', css`
    font-size: 12px;
    
    .ant-menu-item:after {
      bottom: 8px;
    }
  `)}
`;
