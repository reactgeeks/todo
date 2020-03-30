import React from 'react';
import { action } from '@storybook/addon-actions';
import  Button  from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const NormalButton = () => <Button onClick={action('clicked')}>button</Button>;

export const LargeButton = () => <Button large={true} onClick={action('clicked')}>Large Button</Button>;
export const LargeWithFullWidthButton = () => <Button large={true} fullWidth={true} onClick={action('clicked')}>Large Button</Button>;

 