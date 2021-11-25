import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { applyMedia } from 'utils/media';

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

  ${applyMedia('tablet', css`
    font-size: 12px;
    margin: 0 5px;
    height: 24px;
  `)}
`;
