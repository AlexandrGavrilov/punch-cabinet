import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from 'antd';

export const SAuthElement = styled(Button)`
  transition: all 0.3s ease;
  margin: 0 15px;
  line-height: 1.5715;
  border-radius: 4px;
`;

export const SAuthWrapper = styled(motion.div)`
  display: flex;
`;

export const SSelectedAuth = styled(motion.div)`
  position: absolute;
  padding: 30px 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background: #7373ff;
`;

export const SBackground = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
`;
