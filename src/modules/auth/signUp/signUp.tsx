import React, { FC, useEffect, useState } from 'react';
import { Form } from 'antd';

import { motion } from 'framer-motion';

import { useTranslation } from 'shared/utils/translation';

import { useAuthStore } from 'stores/auth';

import {
  SButton, SInput, SSuffixButton,
} from '../shared/style';

import { SForm } from './style';
import { ISignUpProps } from './types';
import { authFormItemVariants } from '../shared/animations';
import { PhoneNumberInput } from './PhoneNumberInput';

const PureSignUp: FC<ISignUpProps> = () => {
  const [registrationVariant, setRegistrationVariant] = useState<'email' | 'phone'>('email');
  const [form] = Form.useForm();

  const { t } = useTranslation();

  const {
    register, verify, verifyConfirm, isVerified, isCodeSent,
  } = useAuthStore();
  const handleSubmit = (form: any) => {
    register(form);
  };

  const handleChangeRegistrationVariant = (variant: 'email' | 'phone') => () => {
    setRegistrationVariant(variant);
  };

  const handleVerify = async () => {
    const email = form.getFieldValue('email');
    verify(email);
  };

  useEffect(() => () => {
    useAuthStore.setState({ isCodeSent: false });
  }, []);

  const handleVerifyConfirm = () => {
    const code = form.getFieldValue('verify');
    const email = form.getFieldValue('email');
    verifyConfirm(code, email);
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
            label={(t('enter_email')
              // <SRegistrationSelection>
              //   <SLabelButton
              //     isActive={registrationVariant === 'email'}
              //     onClick={handleChangeRegistrationVariant('email')}
              //   >
              //     {t('enter_email')}
              //   </SLabelButton>
              //   <SOr>
              //     -
              //     {`  ${t('or')}  `}
              //     -
              //   </SOr>
              //   <SLabelButton
              //     isActive={registrationVariant === 'phone'}
              //     onClick={handleChangeRegistrationVariant('phone')}
              //   >
              //     {t('enter_phone')}
              //   </SLabelButton>
              // </SRegistrationSelection>
            )}
            name={registrationVariant}
          >
            {registrationVariant === 'email' ? (
              <SInput
                placeholder={t('email')}
                suffix={(
                  <SSuffixButton
                    disabled={isCodeSent}
                    type="primary"
                    onClick={handleVerify}
                  >
                    {t('get_code')}
                  </SSuffixButton>
              )}
              />
            ) : <PhoneNumberInput />}
          </Form.Item>
        </motion.div>
        <motion.div variants={authFormItemVariants}>
          <Form.Item
            label={t('enter_code')}
            name="verify"
            rules={[{
              min: 9,
              max: 9,
              message: t('validation_error_confirmation_code'),
            },
            {
              required: true,
              message: t('validation_error_required'),
            }]}
          >
            <SInput
              disabled={isVerified || !isCodeSent}
              suffix={(
                <SSuffixButton
                  disabled={isVerified || !isCodeSent}
                  type="primary"
                  onClick={handleVerifyConfirm}
                >
                  {t('verify_code')}
                </SSuffixButton>
                )}
              type="number"
              placeholder={t('verify_code')}
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
            <SButton htmlType="submit">{t('apply_registration')}</SButton>
          </Form.Item>
        </motion.div>
      </SForm>
    </Form>
  );
};

export const SignUp = PureSignUp;
