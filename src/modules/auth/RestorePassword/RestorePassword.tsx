import React, { useState } from 'react';
import { Form } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from 'stores/auth';
import { authFormItemVariants } from '../shared/animations';
import { SButton, SInput, SSuffixButton } from '../shared/style';
import { PhoneNumberInput } from '../signUp/PhoneNumberInput';
import { SForm } from '../signUp/style';
import { PASS_REG_EXP } from '../../../shared/constants';

export const RestorePassword = () => {
  const { t } = useTranslation();

  const [registrationVariant, setRegistrationVariant] = useState<'email' | 'phone'>('email');

  const [form] = Form.useForm();

  const {
    isResetPasswordVerified, isResetPasswordCodeSent, verifyReset, verifyResetConfirm, resetPassword,
  } = useAuthStore();

  const handleVerify = async () => {
    const email = form.getFieldValue('email');
    verifyReset(email);
  };

  const handleVerifyConfirm = () => {
    const code = form.getFieldValue('verify');
    const email = form.getFieldValue('email');
    verifyResetConfirm(code, email);
  };

  const handleRestore = (form: any) => {
    resetPassword(form);
  };
  const l = 1;
  return (
    <Form layout="vertical" form={form} onFinish={handleRestore}>
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
                      // onChange={handleEmailChange}
                suffix={(
                  <SSuffixButton
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
            rules={[
              {
                required: true,
                message: t('validation_error_required'),
              }]}
          >
            <SInput
              disabled={!isResetPasswordCodeSent}
              suffix={(
                <SSuffixButton
                  disabled={!isResetPasswordCodeSent}
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
                message: t('validation_error_password_length'),
              },
              {
                validator(_: any, value: string) {
                  if (!value || value.length < 8) {
                    return Promise.resolve();
                  }
                  if (PASS_REG_EXP.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error(t('validation_error_password')));
                },
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
            <SButton disabled={!isResetPasswordVerified} htmlType="submit">{t('forgot_password')}</SButton>
          </Form.Item>
        </motion.div>
      </SForm>
    </Form>
  );
};
