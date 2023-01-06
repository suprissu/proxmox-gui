// #region IMPORTS
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import tw from 'twin.macro';
import { useToggle } from 'usehooks-ts';
// #endregion IMPORTS

// #region STYLED COMPONENTS
const Container = tw.div`relative flex flex-col mt-6`;
const CustomLabel = tw.label`absolute left-2 capitalize transition-all`;
const CustomInput = tw.input`border rounded-md p-2 text-info-700 outline-none hover:(border-primary-500 ring ring-primary-100) focus:(border-primary-500 ring ring-primary-100)`;
const RightIconContainer = tw.div`absolute top-1/2 -translate-y-1/2 right-2 p-2 rounded-md cursor-pointer hover:(bg-info-50)`;
const TextTypeIcon = tw(EyeIcon)`w-4 h-4 text-info-500`;
const PasswordTypeIcon = tw(EyeSlashIcon)`w-4 h-4 text-info-500`;
// #endregion STYLED COMPONENTS

// #region PROPS
type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  variants?: 'basic' | 'material';
};
// #endregion PROPS

// #region MAIN COMPONENT
const Input: React.FC<InputProps> = ({
  label,
  type,
  onChange,
  onFocus,
  onBlur,
  variants = 'basic',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const [isPasswordType, togglePasswordType] = useToggle(type === 'password');

  return (
    <Container>
      <CustomLabel
        css={[
          variants === 'basic' || isFocused || Boolean(value)
            ? tw`-top-5 translate-y-0 text-xs text-info-500`
            : tw`top-1/2 -translate-y-1/2 text-info-200`,
        ]}
      >
        {label}
      </CustomLabel>
      <CustomInput
        onFocus={(e) => {
          setIsFocused(true);
          onFocus && onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur && onBlur(e);
        }}
        onChange={(e) => {
          setValue(e.target.value);
          onChange && onChange(e);
        }}
        type={type === 'password' ? (isPasswordType ? 'password' : 'text') : type}
        {...props}
      />
      <RightIconContainer onClick={() => type === 'password' && togglePasswordType()}>
        {type === 'password' ? (
          isPasswordType ? (
            <PasswordTypeIcon />
          ) : (
            <TextTypeIcon />
          )
        ) : undefined}
      </RightIconContainer>
    </Container>
  );
};
// #endregion MAIN COMPONENT

export default Input;
