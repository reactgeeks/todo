import '@testing-library/jest-dom';
import React from 'react';
import Button, {GroupButton} from '../Button';
import { configure, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

configure({ adapter: new Adapter() });
describe("Testcases for Group buttons", () => {
    test('Horizontal group buttons', () => {
        let wrapper;
        wrapper = mount(
            <GroupButton in_margin="2px" out_margin="5px" background="#138496" color="#FBFBFB">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Four</Button>
            </GroupButton>
        );
        expect(wrapper.find('GroupButton')).toHaveStyleRule('margin', '5px');
        expect(wrapper.find('Button').at(0)).toHaveStyleRule('background','#138496');
        expect(wrapper.find('Button').at(0)).toHaveStyleRule('color', '#FBFBFB');
        expect(wrapper.find('Button').at(0)).toHaveStyleRule('margin', '2px');
    });

    test('Vertical group buttons', () => {
        let wrapper;
        wrapper = mount(
            <GroupButton vertical out_margin="5px" background="#138496" color="#FBFBFB" outline="solid thin black" width="100%">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Four</Button>
            </GroupButton>
        );
        expect(wrapper.find('GroupButton')).toHaveStyleRule('margin', '5px');
        expect(wrapper.find('GroupButton')).toHaveStyleRule('flex-direction', 'column');
        expect(wrapper.find('Button').at(0)).toHaveStyleRule('background','#138496');
        expect(wrapper.find('Button').at(0)).toHaveStyleRule('color', '#FBFBFB');
        expect(wrapper.find('Button').at(0)).toHaveStyleRule('outline', 'solid thin black');
        expect(wrapper.find('Button').at(0)).toHaveStyleRule('width', '100%');
    });

});