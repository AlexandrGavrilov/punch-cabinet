import styled, { css } from 'styled-components';
import { Select } from 'antd';

export const SSelect: typeof Select = styled(Select)`

  &&& .ant-select-selector {
    height: 40px;
    background: #ff6767; 
    border-radius: 4px;
    display: flex;
    align-items: center;
    color: #fff;
    &:focus {
      border: none;
    }
  }

`;
