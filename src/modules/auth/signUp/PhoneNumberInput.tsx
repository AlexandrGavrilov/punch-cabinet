// @ts-nocheck
import React, {
  useState, useCallback, forwardRef, useMemo,
} from 'react';
import { Input, Select } from 'antd';
import PhoneInput from 'react-phone-number-input/min';
import 'react-phone-number-input/style.css';

function getSelectedOption(options, value) {
  for (const option of options) {
    if (!option.divider && option.value === value) {
      return option;
    }
  }
  return null;
}

export function CountrySelect({
  value,
  onChange,
  options,
  ...rest
}) {
  const handleOnChange = useCallback((event) => {
    const { value } = event.target;
    onChange(value === 'ZZ' ? undefined : value);
  }, [onChange]);

  const selectedOption = useMemo(() => getSelectedOption(options, value), [options, value]);

  // "ZZ" means "International".
  // (HTML requires each `<option/>` have some string `value`).
  return (
    <select
      {...rest}
      value={value || 'ZZ'}
      onChange={handleOnChange}
    >
      {options.map(({ value, label, divider }) => (
        <option
          key={divider ? '|' : value || 'ZZ'}
          value={divider ? '|' : value || 'ZZ'}
          disabled={!!divider}
          style={divider ? {
            fontSize: '1px',
            backgroundColor: 'currentColor',
            color: 'inherit',
          }
            : undefined}
        >
          {label}
        </option>
      ))}
    </select>
  );
}

const PhoneInputComponent = forwardRef(({ onChange, ...props }, ref) => {
  const handleChange = useCallback((e) => onChange(e.target.value), [onChange]);
  return <Input ref={ref} {...props} onChange={handleChange} />;
});

export const PhoneNumberInput = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <div className="app">
      <PhoneInput
        {...props}
        inputComponent={PhoneInputComponent}
        countrySelectComponent={Select}
      />
    </div>
  );
};
