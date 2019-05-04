import React from 'react';
import { shallow  } from 'enzyme';
import {LogIn}  from '../logIn';

describe('Login', () => {
  let wrapper;
  const mockLoginfn = jest.fn();
  beforeEach(()=>{
  wrapper = shallow(<LogIn 
 loggedinUser={mockLoginfn}
  />)
 })
 it('login renderd',()=>{
   expect(wrapper).toBeDefined;
 })
// it('should call the mock login function', () => {
//    wrapper.find('#loginForm').simulate(
//      'submit', 
//      {preventDefault() {}}
//    )
//    expect(mockLoginfn.mock.calls.length).toBe(1)
//   })
});
