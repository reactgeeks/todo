import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../todo/components/Button';

export default {
  title: 'Button',
  component: Button,
};

const handleClick = () => { }

export const SmallButton = () => <Button size="sm" action="text">Small Button</Button>;
export const NormalButton = () => <Button action="text">Normal Button</Button>;
export const LargeButton = () => <Button size="lg" action="text">Large Button</Button>;
export const CustomBackgroundButton = () => <Button bg="#DADBE2" color="#5e6c84" action="text">Custom Background</Button>;
export const LoadingIconButton = () => <Button icon="FaGithub" iconPosition="left" action="icon" isLoading={true} onClick={handleClick}>Icon Background</Button>;
export const LoadingTextButton = () => <Button action="text" isLoading={true} onClick={handleClick}>Loading Text Background</Button>;
export const FullWidthButton = () => <Button action="text" block={true}>Full Width Button</Button>;