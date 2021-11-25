import React, { FC } from 'react';
import { Form } from 'antd';
import { motion } from 'framer-motion';

import { useTranslation } from 'shared/utils/translation';

import { useAuthStore } from 'stores/auth';

import {
  SInput, SButton, SForgotPasswordButton, SPasswordWrapper,
} from '../shared/style';
import { authFormItemVariants } from '../shared/animations';

import { SForm } from './style';
import { ISignInProps } from './types';

const PureSignIn: FC<ISignInProps> = ({ handleClose }) => {
  const [form] = Form.useForm();
  const { t } = useTranslation();

  const { login } = useAuthStore();
  const handleSubmit = async (form: any) => {
    await login(form);
    handleClose();
  };

  const openResetPassword = () => {
    useAuthStore.setState({ isResetOpen: true });
  };
  return (
    <Form layout="vertical" form={form} onFinish={handleSubmit}>
      <SForm>
        <motion.div variants={authFormItemVariants}>
          <Form.Item
            rules={[
              {
                required: true,
                message: t('validation_error_required'),
              },
              {
                type: 'email',
                message: t('validation_error_email'),
              },
            ]}
            label={t('enter_email')}
            name="email"
          >
            <SInput placeholder={t('email')} />
          </Form.Item>
        </motion.div>

        <motion.div variants={authFormItemVariants}>
          <Form.Item
            rules={[
              {
                required: true,
                message: t('validation_error_required'),
              },
              {
                min: 8,
                max: 16,
                message: t('validation_error_password'),
              },
            ]}
            label={t('enter_password')}
            name="password"
          >
            <SInput type="password" placeholder={t('password')} />
          </Form.Item>
        </motion.div>

        <motion.div variants={authFormItemVariants}>
          <Form.Item>
            <SButton htmlType="submit">{t('enter_to_cabinet')}</SButton>
          </Form.Item>
        </motion.div>

        <motion.div variants={authFormItemVariants}>
          <SForgotPasswordButton onClick={openResetPassword}>{t('forgot_password')}</SForgotPasswordButton>
        </motion.div>
      </SForm>
    </Form>
  );
};

export const SignIn = PureSignIn;
