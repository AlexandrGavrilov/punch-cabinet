import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import { useTranslation } from 'shared/utils/translation';
import closeIconSrc from 'assets/img/close-icon.png';

import {
  SAuthElement, SAuthWrapper, SBackground, SSelectedAuth, SClose,
} from './style';
import { SignUp } from './signUp';
import { SignIn } from './signIn';

export const Auth = () => {
  const [selectedAuth, setSelectedAuth] = useState<null | 'register' | 'login'>(null);
  const { t } = useTranslation();

  const handleSelectAuth = (selectedAuth: 'register' | 'login') => async () => {
    setSelectedAuth(selectedAuth);
  };

  const handleClose = () => {
    setSelectedAuth(null);
  };
  const item = {
    hidden: { opacity: 0, transition: { duration: 0 } },
    show: { opacity: 1, transition: { duration: 0.2 } },
  };

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

  return (
    <SAuthWrapper>
      <SAuthElement size="large" type="primary" onClick={handleSelectAuth('register')}>
        {t('register')}
      </SAuthElement>
      <SAuthElement size="large" type="primary" theme="dark" onClick={handleSelectAuth('login')}>
        {t('login')}
      </SAuthElement>
      <AnimatePresence>
        {selectedAuth && (
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
        {selectedAuth && (
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
            {selectedAuth === 'register' ? <SignUp /> : <SignIn />}
        </SSelectedAuth>
        )}
      </AnimatePresence>
    </SAuthWrapper>

  );
};
