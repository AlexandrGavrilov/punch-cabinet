import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { applyMedia } from 'utils/media';

const btnStyles = css`
  background: #ff6767;
  border: 1px solid #ff6767;
`;

export const SAuthElement = styled(Button)`
  transition: all 0.3s ease;
  margin: 0 15px;
  line-height: 1.5715;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  
  ${btnStyles};
  &:hover {
    ${btnStyles};
  }
  &:focus {
    ${btnStyles};
  }
  ${applyMedia('tablet', css`
    font-size: 12px;
    margin: 0 5px;
    height: 24px;
  `)}
`;

export const SAuthWrapper = styled(motion.div)`
  display: flex;
  
  * {
    overflow: hidden;
  }
`;

export const SSelectedAuth = styled(motion.div)`
  position: fixed;
  z-index: 2;
  max-width: 90vw;
  padding: 30px 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background: #e7caca;
  ${applyMedia(
    'small-screen',
    css`
      padding: 40px 15px;
    `,
  )}
`;

export const SClose = styled(motion.button)`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const SBackground = styled(motion.div)`
  position: fixed;
  overflow: hidden;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
`;
