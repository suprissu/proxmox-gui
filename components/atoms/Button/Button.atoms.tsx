import React from 'react';
import tw from 'twin.macro';

import { ExtraStyle } from '@/components/Types.components';

const basic = {
  primary: tw`text-primary-500 hover:bg-primary-100 disabled:text-primary-100`,
  secondary: tw`text-secondary-500 hover:bg-secondary-100 disabled:text-secondary-100`,
  error: tw`text-error-500 hover:bg-error-100 disabled:text-error-100`,
  success: tw`text-success-500 hover:bg-success-100 disabled:text-success-100`,
  warning: tw`text-warning-500 hover:bg-warning-100 disabled:text-warning-100`,
  info: tw`text-info-500 hover:bg-info-100 disabled:text-info-100`,
};

const solid = {
  primary: tw`text-white active:bg-primary-300 bg-primary-400 hover:(bg-primary-300) disabled:(bg-primary-50 text-primary-200) disabled:hover:(shadow-none bg-primary-50)`,
  secondary: tw`text-white active:bg-secondary-300 bg-secondary-400 hover:(bg-secondary-300) disabled:(bg-secondary-50 text-secondary-200) disabled:hover:(shadow-none bg-secondary-50)`,
  error: tw`text-white active:bg-error-300 bg-error-400 hover:(bg-error-300) disabled:(bg-error-50 text-error-200) disabled:hover:(shadow-none bg-error-50)`,
  success: tw`text-white active:bg-success-300 bg-success-400 hover:(bg-success-300) disabled:(bg-success-50 text-success-200) disabled:hover:(shadow-none bg-success-50)`,
  warning: tw`text-white active:bg-warning-300 bg-warning-400 hover:(bg-warning-300) disabled:(bg-warning-50 text-warning-200) disabled:hover:(shadow-none bg-warning-50)`,
  info: tw`text-black active:bg-info-200 bg-info-50 hover:(bg-info-200) disabled:(bg-info-50 text-info-200) disabled:hover:(shadow-none bg-info-50)`,
};

const outline = {
  primary: tw`border text-primary-500 border-primary-500 hover:bg-primary-100 disabled:text-primary-100 border-primary-100`,
  secondary: tw`border text-secondary-500 border-secondary-500 hover:bg-secondary-100 disabled:text-secondary-100 border-secondary-100`,
  error: tw`border text-error-500 border-error-500 hover:bg-error-100 disabled:text-error-100 border-error-100`,
  success: tw`border text-success-500 border-success-500 hover:bg-success-100 disabled:text-success-100 border-success-100`,
  warning: tw`border text-warning-500 border-warning-500 hover:bg-warning-100 disabled:text-warning-100 border-warning-100`,
  info: tw`border text-info-500 border-info-500 hover:bg-info-100 disabled:text-info-100 border-info-100`,
};

export type BaseButtonProps = React.ButtonHTMLAttributes<unknown> & {
  disabled?: boolean;
  variants?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'info';
  types?: 'solid' | 'outline' | 'basic';
  rounded?: boolean;
  icon?: JSX.Element;
  extraStyle?: ExtraStyle;
};

const BaseButton = tw.button`bg-transparent px-4 py-2 rounded capitalize text-xs transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed`;

export const Regular: React.FC<BaseButtonProps> = ({
  children,
  variants = 'info',
  rounded,
  icon,
  disabled,
  extraStyle,
  ...props
}) => {
  return (
    <BaseButton
      {...props}
      disabled={disabled}
      css={[
        solid[variants],
        icon && !'children:w-10 h-10',
        rounded && 'rounded-full',
        extraStyle,
      ]}
    >
      {icon}
      {children}
    </BaseButton>
  );
};

export const Outline: React.FC<BaseButtonProps> = ({
  children,
  variants = 'info',
  rounded,
  icon,
  disabled,
  extraStyle,
  ...props
}) => {
  return (
    <BaseButton
      {...props}
      disabled={disabled}
      css={[
        outline[variants],
        icon && !'children:w-10 h-10',
        rounded && 'rounded-full',
        extraStyle,
      ]}
    >
      {icon}
      {children}
    </BaseButton>
  );
};

export const Basic: React.FC<BaseButtonProps> = ({
  children,
  variants = 'info',
  rounded,
  icon,
  disabled,
  extraStyle,
  ...props
}) => {
  return (
    <BaseButton
      {...props}
      disabled={disabled}
      css={[
        basic[variants],
        icon && !'children:w-10 h-10',
        rounded && 'rounded-full',
        extraStyle,
      ]}
    >
      {icon}
      {children}
    </BaseButton>
  );
};
