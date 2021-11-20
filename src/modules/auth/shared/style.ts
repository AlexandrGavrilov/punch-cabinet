import styled, { css } from 'styled-components';
import { Button, Input } from 'antd';

import { applyMedia } from 'utils/media';

export const SInput = styled(Input)`
  width: 480px;
  height: 45px;
  position: relative;
  border-radius: 10px;

  &&&&&&&:focus {
    border-color: #ff6767;
  }
  
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
`;

const btnStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff6767;
  border: 1px solid #ff6767;
  
  color: #fff;
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
`;

export const SButton = styled(Button)`
  width: 280px;
  height: 50px;
  border-radius: 10px;

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
