import React from 'react';

import i18n from '../../utils/translation';

import { SSelect } from './style';

export const LanguageSwitcher = () => {
  const onChange = (value: string) => {
    i18n.changeLanguage(value);
  };
  const options = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Русский',
      value: 'ru',
    },
  ];
  return <SSelect defaultValue={i18n.language} onChange={onChange} options={options} />;
};
