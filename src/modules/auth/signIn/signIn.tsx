import React, { FC } from 'react';
import { Form } from 'antd';

import { useTranslation } from 'shared/utils/translation';

import { Container } from '../shared/components/Container';
import { SInput, SButton } from '../shared/style';

import { SForm } from './style';
import { ISignInProps } from './types';

const PureSignIn: FC<ISignInProps> = () => {
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
          <Form.Item>
            <SButton htmlType="submit">{t('enter_to_cabinet')}</SButton>
          </Form.Item>
        </SForm>
      </Form>
    </Container>
  );
};

export const SignIn = PureSignIn;
