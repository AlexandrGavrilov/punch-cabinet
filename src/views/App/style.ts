import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { motion } from 'framer-motion';

const { Header } = Layout;

export const SWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const SHeader = styled(Header)`
  background: rgba(0, 0, 0, 0.1);
`;

export const SMenu = styled(Menu)`
  background: rgba(0, 0, 0, 0);
  font-size: 18px;
`;

export const SAuthElement = styled(motion.button)`
  line-height: 1.5715;
  font-size: 18px;
  background: #7373ff;
  width: 75px;
  height: 40px;
  border-radius: 4px;
`;

export const SAuthWrapper = styled(motion.div)`
  display: flex;
`;

export const SSelectedAuth = styled(motion.div)`
  position: absolute;
  background: #7373ff;
  width: 350px;
  height: 600px;
`;

export const SBackground = styled(motion.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
`;
