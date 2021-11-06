import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { useTranslation } from 'shared/utils/translation';

import { LanguageSwitcher } from 'shared/components/LanguageSwitcher';

import {
  SWelcome,
  SWrapper,
  SDescription,
  SImage,
  STitle,
  SForm,
  SFormTitle,
  SLanguageSwitcher,
} from './style';

export const Container: FC = ({ children }) => {
  const { t } = useTranslation();

  return (
    <SWrapper>
      <SWelcome>
        <STitle>{t('welcome')}</STitle>
        <SImage>Img</SImage>
        <SDescription>Title</SDescription>

      </SWelcome>
      <SForm>
        <SFormTitle>{}</SFormTitle>
        <>{children}</>
      </SForm>
      <SLanguageSwitcher>
        <LanguageSwitcher />
      </SLanguageSwitcher>
    </SWrapper>
  );
};
