import React, { FC } from 'react';
import { Button, Form } from 'antd';
import { motion } from 'framer-motion';

import { useTranslation } from 'shared/utils/translation';

import { useAuthStore } from 'stores/auth';

import { SButton, SInput, SGetCodeButton } from '../shared/style';

import { SForm } from './style';
import { ISignUpProps } from './types';
import { authFormItemVariants } from '../shared/animations';

const PureSignUp: FC<ISignUpProps> = () => {
  const [form] = Form.useForm();

  const { t } = useTranslation();

  const { register, verify } = useAuthStore();
  const handleSubmit = (form: any) => {
    register(form);
  };

  const handleVerify = () => {
    const email = form.getFieldValue('email');
    verify(email);
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
            label={t('enter_name')}
            name="name"
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
                type: 'email',
                message: t('validation_error_email'),
              },
            ]}
            label={t('enter_email')}
            name="email"
          >
            <SInput
              placeholder={t('email')}
              suffix={(
                <SGetCodeButton
                  type="primary"
                  onClick={handleVerify}
                >
                  {t('get_code')}
                </SGetCodeButton>
)}
            />
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
              ({ getFieldValue }) => ({
                validator: (_: any, value: string) => {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject();
                },
                message: t('validation_error_confirm_password'),
              }),
            ]}
            label={t('confirm_password')}
            name="confirm_password"
          >
            <SInput type="password" placeholder={t('password')} />
          </Form.Item>
        </motion.div>

        <motion.div variants={authFormItemVariants}>
          <Form.Item>
            <SButton htmlType="submit">{t('enter_to_cabinet')}</SButton>
          </Form.Item>
        </motion.div>
      </SForm>
    </Form>
  );
};

export const SignUp = PureSignUp;
