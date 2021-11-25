import styled, { css } from 'styled-components';
import { Layout, Menu } from 'antd';

import { applyMedia } from 'utils/media';

export const SWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const SComponentWrapper = styled.div`
  margin-top: 55px;
  width: 100%;
  height: 100%;
  ${applyMedia('tablet', css`
    margin-top: 85px;
  `)}
`;

export const SHeader = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e7caca;
  padding: 5px 10px;
  box-shadow: 0 -10px 30px 2px #ff6767;
  ${applyMedia('tablet', css`
    flex-direction: column-reverse;
  `)}
`;

export const SContentWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  ${applyMedia('tablet', css`
  `)}
`;

export const SLogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SLogo = styled.img`
  height: 20px;
  transform: scale(5);
`;

export const STitle = styled.div`
  width: 20px;
  font-size: 10px;
  line-height: 10px;
  margin: 0 10px;
  color: #ff6767;
  font-weight: 700;
`;

export const SMenu = styled(Menu)`
  background: rgba(0, 0, 0, 0);
  font-size: 18px;
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
    
    .ant-menu-item {
      padding: 0 5px;
      &&&&&&:after {
        bottom: 8px;
      }
    }
  `)}
`;
