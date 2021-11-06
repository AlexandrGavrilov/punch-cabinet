import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { applyMedia } from 'assets/styles/media';

export const SWrapper = styled(motion.div)`
  position: relative;
  margin: auto;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.25);
`;

export const SWelcome = styled.div`
  width: 37%;
  background: rgba(56, 124, 188, 0.25);
  box-shadow: inset 33px -33px 33px rgba(42, 95, 143, 0.1),
    inset -33px 33px 33px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(75px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 65px 0;
`;

export const SLink = styled(Link)`
  padding: 15px 0;
  background: #fff;
  border-radius: 15px;
  font-size: 24px;
  text-decoration: none;
  width: 280px;
  text-align: center;
  ${applyMedia(
    'small-screen',
    css`
      width: auto;
      padding: 15px 15px;
    `,
  )}
`;

export const STitle = styled.div`
  color: #fff;
  font-size: 30px;
`;

export const SImage = styled.div``;

export const SForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 63%;
  justify-content: center;
  align-items: center;
`;

export const SFormTitle = styled.div`
  font-size: 36px;
  margin-bottom: 25px;
`;

export const SDescription = styled.div`
  font-size: 24px;
  color: #fff;
`;
export const SLanguageSwitcher = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
