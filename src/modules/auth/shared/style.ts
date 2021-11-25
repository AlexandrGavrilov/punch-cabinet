import styled, { css } from 'styled-components';
import { Button, Input } from 'antd';

import { applyMedia } from 'utils/media';
import { btnStyles } from '../../../shared/styles';

export const SInput = styled(Input)`
  width: 480px;
  height: 45px;
  position: relative;
  border-radius: 10px;

  
  ${applyMedia(
    'screen',
    css`
      width: 400px;
    `,
  )}
  ${applyMedia(
    'small-screen',
    css`
      width: 300px;
    `,
  )}
  ${applyMedia(
    'tablet',
    css`
      width: auto;
    `,
  )}
`;

export const SSuffixButton = styled(Button)`
  ${btnStyles};
  position: absolute;
  right: -1px;
  top: -1px;
  height: 45px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  &:disabled {
    filter: grayscale(0.8);
    ${btnStyles};
    
    &:hover {
      ${btnStyles}
    }

    &:focus {
      ${btnStyles}
    }
  }
  
  &:hover {
    ${btnStyles}
  }

  &:focus {
    ${btnStyles}
  }

  ${applyMedia(
    'small-screen',
    css`
      font-size: 12px;
      width: 88px;
      padding: 0;
    `,
  )}
`;

export const SForgotPasswordButton = styled(Button)`
  border: none;
  background: rgba(0, 0, 0, 0);
  color: #fff;
  border-bottom: 1px dashed #ff6767;
  opacity: 0.8;
  :hover {
    border-bottom: 1px dashed #ff6767;
    opacity: 1;
    background: rgba(0, 0, 0, 0);
    color: #ff6767;
  }
;

`;
export const SPasswordWrapper = styled.div`
  position: relative;
  
  .ant-form-item-control-input-content, .ant-form-item-control-input, .ant-col.ant-form-item-control, .ant-row.ant-form-item {
    overflow: visible;
  }
`;

export const SButton = styled(Button)`
  width: 280px;
  height: 50px;
  border-radius: 10px;
  
  &&&&&&&&&&&&:disabled {
    ${btnStyles};
    filter: grayscale(0.8);
  }

  ${btnStyles}
  
  &:hover {
    ${btnStyles}
  }

  &:focus {
    ${btnStyles}
  }

  ${applyMedia(
    'small-screen',
    css`
            width: 200px;
          `,
  )}
`;

export const SRegistrationSelection = styled.div`
  display: flex;
  align-items: center;
`;
export const SOr = styled.div`
 margin: 0 10px;
  white-space: nowrap;
`;

export const SLabelButton = styled(Button)<{ isActive: boolean }>`
  background: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
  :hover {
    background: rgba(0, 0, 0, 0);

  }
  :focus {
    background: rgba(0, 0, 0, 0);

  }
`;
