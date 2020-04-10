import React  from 'react';
import { action } from '@storybook/addon-actions';
import  Button, {GroupButton}  from '../todo/components/Button';

export default {
  title: 'Button',
  component: Button,
};

const handleClick = () => {}

export const SmallButton = () => <Button size="sm" action="text">Small Button</Button>;
export const NormalButton = () => <Button action="text">Normal Button</Button>;
export const LargeButton = () => <Button size="lg" action="text">Large Button</Button>;
export const CustomBackgroundButton = () => <Button bg="#DADBE2" color="#5e6c84" action="text">Custom Background</Button>;
export const LoadingIconButton = () => <Button icon = "FaGithub" iconPosition="left" action="icon" isLoading={true} onClick={handleClick}>Icon Background</Button>;
export const LoadingTextButton = () => <Button action="text" isLoading={true}>Loading Text Background</Button>;
export const FullWidthButton = () => <Button action="text" block={true}>Full Width Button</Button>;
export const horizontalGroupBUttons = () => (
<GroupButton in_margin="1px" out_margin="10px">
    <Button action="text">Button</Button>
    <Button bg="#138496" color="#FBFBFB">Button</Button>
    <Button bg="#138496" color="#FBFBFB">Button</Button>
</GroupButton>);
export const verticalGroupButtons = () => (
<GroupButton in_margin="0" out_margin="10px" vertical>
    <Button action="text">Button</Button>
    <Button bg="#138496" color="#FBFBFB">Button</Button>
    <Button bg="#138496" color="#FBFBFB">Button</Button>
</GroupButton>);