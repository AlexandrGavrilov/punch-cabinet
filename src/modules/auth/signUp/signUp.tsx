import React, { FC } from 'react';
import { Form } from 'antd';

import { useTranslation } from 'shared/utils/translation';

import { Container } from '../shared/components/Container';
import { SButton, SInput } from '../shared/style';

import { SForm } from './style';
import { ISignUpProps } from './types';

const PureSignUp: FC<ISignUpProps> = () => {
  const [form] = Form.useForm();

  const { t } = useTranslation();
  return (
    <Container>
      <Form layout="vertical" form={form}>
        <SForm>
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
          <Form.Item>
            <SButton htmlType="submit">{t('enter_to_cabinet')}</SButton>
          </Form.Item>
        </SForm>
      </Form>
    </Container>
  );
};

export const SignUp = PureSignUp;
