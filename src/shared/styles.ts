import styled, { css } from 'styled-components';
import { Button } from 'antd';

export const btnStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff6767;
  border: 1px solid #ff6767;
  
  color: #fff;
`;

export const SButton = styled(Button)`
  ${btnStyles};
  
  :hover {
    ${btnStyles}
  }
  
  :focus {
    ${btnStyles}
  }
`;
