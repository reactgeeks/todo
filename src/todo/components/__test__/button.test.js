import '@testing-library/jest-dom';
import React from 'react';
import Button from '../Button';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Testcases for button", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Button>click here</Button>)
    })

    test("check onclick function are triggered by mock functoin", () => {
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

    test("check icons and there positions", () => {
        wrapper.setProps({
            icon: 'FaGithub',
            iconPosition: 'left'
        });
        let html = wrapper.html();
        console.log(html)
        expect(html.indexOf('flex-direction:row')).toBe(28);

        wrapper.setProps({
            icon: 'FaGithub',
            iconPosition: 'right'
        });
        html = wrapper.html();
        console.log(html)
        expect(html.indexOf('flex-direction:row-reverse')).toBe(28);

        wrapper.setProps({
            icon: 'FaGithub',
            iconPosition: 'top'
        });
        html = wrapper.html();
        console.log(html)
        expect(html.indexOf('flex-direction:column')).toBe(28);

        wrapper.setProps({
            icon: 'FaGithub',
            iconPosition: 'bottom'
        });
        html = wrapper.html();
        console.log(html)
        expect(html.indexOf('flex-direction:column-reverse')).toBe(28);
    })

})
