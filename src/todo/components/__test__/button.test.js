import '@testing-library/jest-dom';
import React, {useState} from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import Button from '../Button';
import {shallow} from "enzyme";
describe("Testcases for button",()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Button>click here</Button>)
    })
    test("check onclick function are triggered by mock functoin",()=>{
        let onclick = jest.fn(()=>{})
        wrapper.setProps({
            handleClick:onclick
        });
        console.log(wrapper.html(),"gfg")
        wrapper.simulate("click"); 
        expect(onclick.mock.calls.length).toBe(1);
    })
 
})
