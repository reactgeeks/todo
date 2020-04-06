import '@testing-library/jest-dom';
import React from 'react';
import Button from '../Button';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer'
import 'jest-styled-components'


configure({ adapter: new Adapter() });

describe("Testcases for button", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button>click here</Button>)
    })

    test("test onclick function are triggered by mock functoin", () => {
        let onclick = jest.fn(() => {});
        wrapper.setProps({
            handleClick: onclick,
            isLoading: true,
            action: 'icon'
        });
        wrapper.simulate("click");
        let html = wrapper.html();
        expect(html.indexOf('svg')).toBe(103);

        wrapper.setProps({
            handleClick: onclick,
            isLoading: true,
            action: 'text'
        });
        wrapper.simulate("click");
        html = wrapper.html();
        expect(html.indexOf('Loading...')).toBe(102);
    })

    test("test icons and there positions", () => {
        wrapper.setProps({
            icon: 'FaGithub',
            iconPosition: 'left'
        });
        let html = wrapper.html();
        expect(html.indexOf('flex-direction:row')).toBe(28);

        wrapper.setProps({
            icon: 'FaGithub',
            iconPosition: 'right'
        });
        html = wrapper.html();
        expect(html.indexOf('flex-direction:row-reverse')).toBe(28);

        wrapper.setProps({
            icon: 'FaGithub',
            iconPosition: 'top'
        });
        html = wrapper.html();
        expect(html.indexOf('flex-direction:column')).toBe(28);

        
    })

    test("test background and color", () => {
        const bg = "white";
        const color = "black";
        const tree = renderer.create(<Button bg={bg} color={color}/>).toJSON();
        expect(tree).toHaveStyleRule('background', bg);
        expect(tree).toHaveStyleRule('color', color);
    });

    test("test customizable button sizes", () => {
        const smallButton = renderer.create(<Button size="sm"/>).toJSON();
        expect(smallButton).toHaveStyleRule('font-size', '0.7em');
        const normalButton = renderer.create(<Button />).toJSON();
        expect(normalButton).toHaveStyleRule('font-size', '1em');
        const largeButton = renderer.create(<Button size="lg"/>).toJSON();
        expect(largeButton).toHaveStyleRule('font-size', '1.5em');
    });

})
