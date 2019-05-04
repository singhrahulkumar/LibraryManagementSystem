import React from 'react';
import { shallow  } from 'enzyme';
import {SearchBox}  from '../searchBox';

describe('user', () => {
  let wrapper;
const loggedinUser={
    "userName":'Admin'
}
beforeEach(()=>{
  wrapper = shallow(<SearchBox  loggedinUser={loggedinUser}/>)
})
 it('searchBox  renderd',()=>{
   expect(wrapper).toBeDefined;
 })

});
