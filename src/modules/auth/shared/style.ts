import styled, { css } from 'styled-components';
import { Button, Input } from 'antd';

import { applyMedia } from 'assets/styles/media';

export const SInput = styled(Input)`
  width: 480px;
  height: 45px;
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
      width: auto;
    `,
  )}
`;

const btnStyles = css`
  background: #3b4878;
  color: #fff;
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
      width: auto;
    `,
  )}
`;
