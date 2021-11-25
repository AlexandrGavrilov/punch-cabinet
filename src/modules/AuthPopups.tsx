import { AnimatePresence } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import closeIconSrc from 'assets/img/close-icon.png';
import { useAuthStore } from 'stores/auth';

import { SBackground, SClose, SSelectedAuth } from './auth/style';
import { RestorePassword } from './auth/RestorePassword';
import { SignIn, SignUp } from './auth';

const SWrapper = styled.div`
  * {
    overflow: hidden;
  }
`;

export const AuthPopups = () => {
  const { selectedAuth, isResetOpen, setSelectedAuth } = useAuthStore();

  const selectedAuthVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const handleClose = () => {
    useAuthStore.setState({ isResetOpen: false });
    setSelectedAuth(null);
  };
  return (
    <SWrapper>
      <AnimatePresence>
        {(selectedAuth || isResetOpen) && (
        <SBackground
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          layout
          onClick={handleClose}
        />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isResetOpen && (
        <SSelectedAuth
          initial="hidden"
          animate="show"
          layout
          exit="hidden"
          variants={selectedAuthVariants}
        >
          <SClose
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <img src={closeIconSrc} alt="close" />
          </SClose>
          <RestorePassword />
        </SSelectedAuth>
        )}

      </AnimatePresence>
      <AnimatePresence>
        {selectedAuth && !isResetOpen && (
        <SSelectedAuth
          initial="hidden"
          animate="show"
          layout
          exit="hidden"
          variants={selectedAuthVariants}
        >
          <SClose
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <img src={closeIconSrc} alt="close" />
          </SClose>
          { selectedAuth === 'register' ? <SignUp handleClose={handleClose} /> : <SignIn handleClose={handleClose} />}
        </SSelectedAuth>
        )}
      </AnimatePresence>
    </SWrapper>
  );
};
