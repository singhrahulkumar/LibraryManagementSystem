import React from 'react';
import { shallow  } from 'enzyme';
import {ReturnBookDetails}  from '../returnBookDetails';

describe('user', () => {
  let wrapper;
  var bookData=[
{
    id:'1001',
    name:'chemistry',
    title:'physical chemistry',
    author:'KCSinha',
    description:'good book',
    noofbook:'10',
    rating:'5',
    bookPosition:'wcp3-125',
    issuedTo:['101','102']
   
},
{
    id:'1002',
    name:'physics',
    title:' modern physics',
    author:'ARVasishtha',
    description:'good book',
    noofbook:'10',
    rating:'5',
    bookPosition:'wcp3-126',
    issuedTo:['102','103']
},
{
     id:'1003',
    name:'Math',
    title:'Trigonometry',
    author:'RDSharma',
    description:'good book',
    noofbook:'10',
    rating:'5',
    bookPosition:'wcp3-127',
    issuedTo:['103','104']
}

];

const mockLoginfn =  bookData;
const returnBookId='1001';
const issuebookDetails=[{
    bookid:'1001',
    bookname:'chemistry',
    booktitle:'physical chemistry',
    bookauthor:'KCSinha',
    bookdescription:'good book',
   rating:'5',
   
}]

beforeEach(()=>{
  wrapper = shallow(<ReturnBookDetails returnBookId={returnBookId} issuebookDetails={issuebookDetails}/>)
})
 it('retrurn book details  renderd',()=>{
   expect(wrapper).toBeDefined;
 })

});
