import React from 'react';
import { action } from '@storybook/addon-actions';
import  Button  from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const SmallButton = () => <Button size="sm" onClick={action('clicked')}>Small Button</Button>;
export const NormalButton = () => <Button onClick={action('clicked')}>Normal Button</Button>;
export const LargeButton = () => <Button size="lg" onClick={action('clicked')}>Large Button</Button>;
export const CustomBackgroundButton = () => <Button bg="red" color="white">Custom Background</Button>;
export const LargeWithFullWidthButton = () => <Button large={true} fullWidth={true} onClick={action('clicked')}>Large Button</Button>;

 