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
