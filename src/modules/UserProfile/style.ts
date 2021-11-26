import styled from 'styled-components';
import { Drawer } from 'antd';

export const SDrawer = styled(Drawer)`
  .ant-drawer-body, .ant-drawer-header {
    background: #e7caca;
  }
  .ant-drawer-header {
    .ant-drawer-title {
      font-size: 32px;
      color: #ff6767;
    }
    border-bottom: none;
    box-shadow: 0 0 10px 0 #ff6767;
  }
`;

export const STitle = styled.div`
  color: #ff6767;
  font-size: 22px;
`;

export const SItem = styled.div`
  color: #ff6767;
  font-size: 18px;
`;
