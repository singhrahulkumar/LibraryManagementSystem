import React from 'react';
import { shallow  } from 'enzyme';
import {ReturnBook}  from '../returnBook';

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
var userData=[
    {
         userId:'101',
         userName:'Rahul',
         password:'Rahul',
         issuedBook:[{id:'1001',issueDate:'02/11/2018',returnDate:'05/11/2018',rating:'4'}
                    
                    ]
    },
    {
         userId:'102',
         userName:'Gowri',
         password:'Gowri',
         issuedBook:[{id:'1001',issueDate:'02/11/2018',returnDate:'05/11/2018',rating:'4'},
                    {id:'1002',issueDate:'03/11/2018',returnDate:'06/11/2018',rating:'4'} 
                   ]
    },
    {
         userId:'103',
         userName:'Pavitra',
         password:'Pavitra',
         issuedBook:[{id:'1002',issueDate:'04/11/2018',returnDate:'07/11/2018',rating:'3'},
                    {id:'1003',issueDate:'05/11/2018',returnDate:'08/11/2018',rating:'4'} 
                   ]
    },
    {
         userId:'104',
         userName:'Saket',
         password:'Saket',
         issuedBook:[ {id:'1003',issueDate:'05/11/2018',returnDate:'08/11/2018',rating:'4'} 
                   ]
    }
  ]

const mockLoginfn =  bookData;
const mockLoginFnUser=userData;
const loggedinUser={
    userName:'Rahul'
}
const dispatch=jest.fn();
beforeEach(()=>{
  wrapper = shallow(<ReturnBook dispatch={dispatch} loggedinUser={loggedinUser} userData={mockLoginFnUser} bookDetails={mockLoginfn}/>)
})
 it('Return Book  renderd',()=>{
   expect(wrapper).toBeDefined;
 })

});
