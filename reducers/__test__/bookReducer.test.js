 import bookReducer from '../bookReducer';
 import * as actions from '../../actions/bookActions';

 describe('book  reducer', () => {
   beforeEach(() => {
  const defaultstate={
    pageNum : -1,
    bookDetails:[],
    filterbookDetails:[],
    editbookid:0,
    editBookDetails:{},
    addbookid:'1004',
    userData:[],
    filteruserData:[],
    loggedinUser:{},
    islooggedin:false,
    filtervalue:'0',
    issuebook:[],
    issueBookId:0,
    returnBookId:0,
    issuebookDetails:[]
}
})
  it('should return the initial state', () => {
    expect(bookReducer(undefined, [{}])).toEqual({
      pageNum : -1,
    bookDetails:[],
    filterbookDetails:[],
    editbookid:0,
    editBookDetails:{},
    addbookid:'1004',
    userData:[],
    filteruserData:[],
    loggedinUser:{},
    islooggedin:false,
    filtervalue:'0',
    issuebook:[],
    issueBookId:0,
    returnBookId:0,
    issuebookDetails:[]
      })//end of expect

      })//end of it 
 //end of describe

  it('should handle SET_PAGE_NUMBER', () => {
    const initialState = {
      pageNum: -1
    }
    const newState = bookReducer(initialState,{
      type: actions.SET_PAGE_NUMBER,
        number: 0
    })
      expect(newState).toEqual({
        pageNum : 0
      })
});

it('set book details',()=>{
     const initialState={
       bookDetails:[]
     }
      const newState=bookReducer(initialState,{
        type:actions.SET_BOOK_DETAILS,
        book:{
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
      })

      expect(newState).toEqual({
       bookDetails: {
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
      })
})

it('set filter  book details',()=>{
     const initialState={
       filterbookDetails:[]
     }
      const newState=bookReducer(initialState,{
        type:actions.SET_FILTER_BOOK_DETAILS,
        filterbook:{
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
      })

  expect(newState).toEqual({
       filterbookDetails: {
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
      })
})

  it('set user data details',()=>{
     const initialState={
       userData:[]
     }
      const newState=bookReducer(initialState,{
        type:actions.SET_USER,
        userData: {
         userId:'101',
         userName:'Rahul',
         password:'Rahul',
         issuedBook:[{id:'1001',issueDate:'02/11/2018',returnDate:'05/11/2018',rating:'4'}
                    
                    ]
    }
      })
          expect(newState).toEqual({
       userData: {
         userId:'101',
         userName:'Rahul',
         password:'Rahul',
         issuedBook:[{id:'1001',issueDate:'02/11/2018',returnDate:'05/11/2018',rating:'4'}
                    
                    ]
    }
      })

      
  })

  it('set filter user data details',()=>{
     const initialState={
       filteruserData:[]
     }
      const newState=bookReducer(initialState,{
        type:actions.SET_FILTER_USER,
        filteruserData: {
         userId:'101',
         userName:'Rahul',
         password:'Rahul',
         issuedBook:[{id:'1001',issueDate:'02/11/2018',returnDate:'05/11/2018',rating:'4'}
                    
                    ]
    }
      })

      expect(newState).toEqual({
        filteruserData:{
           userId:'101',
         userName:'Rahul',
         password:'Rahul',
         issuedBook:[{id:'1001',issueDate:'02/11/2018',returnDate:'05/11/2018',rating:'4'}
                    
                    ]
        }
      })
  })


it('set edit book id',()=>{
  const initialState={
    editbookid:0
  }

  const newState=bookReducer(initialState,{
    type:actions.SET_EDIT_BOOK_ID,
    editbookid:'1004'

  })
  expect(newState).toEqual({
    editbookid:'1004'
  })

})

it('edit book details',()=>{
  const initialState={
    editBookDetails:{}
  }

  const newState=bookReducer(initialState,{
    type:actions.SET_EDIT_BOOK_DETAILS,
    editBookDetails:{
       id:'1005',
    name:'Math',
    title:'Trigonometry',
    author:'RDSharma',
    description:'good book',
    noofbook:'10',
    rating:'5',
    bookPosition:'wcp3-127',
    issuedTo:[]

    }
  })

  expect(newState).toEqual({
    editBookDetails:{
       id:'1005',
    name:'Math',
    title:'Trigonometry',
    author:'RDSharma',
    description:'good book',
    noofbook:'10',
    rating:'5',
    bookPosition:'wcp3-127',
    issuedTo:[]

    }
  })

})

it('set edit book field details',()=>{
  const initialState={
     editBookDetails:{
       id:'1005',
    name:'Math',
    title:'Trigonometry',
    author:'RDSharma',
    description:'good book',
    noofbook:'10',
    rating:'5',
    bookPosition:'wcp3-127',
    issuedTo:[]

    }
  }

  const newState=bookReducer(initialState,{
    type:actions.SET_EDIT_BOOK_FIELD_DETAILS,
    name:'name',
    value:'Science'
  })

  expect(newState).toEqual({
    editBookDetails:{
       id:'1005',
    name:'Science',
    title:'Trigonometry',
    author:'RDSharma',
    description:'good book',
    noofbook:'10',
    rating:'5',
    bookPosition:'wcp3-127',
    issuedTo:[]

    }

  })
})

it('set logged in user',()=>{
  const initialState={
   loggedinUser:{}
  }

  const newState=bookReducer(initialState,{
    type:actions.SET_LOGGED_IN_USER,
    name:'userName',
    value:'Rahul'
  })

 expect(newState).toEqual({
  loggedinUser:{
    userName:'Rahul'
  }
   })

})


it('set Add book id',()=>{
  const initialState={
    addbookid:'1004'
  }

  const newState=bookReducer(initialState,{
    type:actions.SET_ADD_BOOK_ID,
    addbookid:'1004'

  })
  expect(newState).toEqual({
    addbookid:'1004'
  })

})

it(' set is logged in',()=>{
  const initialState={
    islooggedin:false
  }

  const newState=bookReducer(initialState,{
    type:actions.SET_ISLOGIN,
    islooggedin:true

  })
  expect(newState).toEqual({
   islooggedin:true
  })

})


it('set filter value ',()=>{
  const initialState={
   filtervalue:'0'
  }

  const newState=bookReducer(initialState,{
    type:actions.SET_FILTER_VALUE,
   filtervalue:'3'

  })
  expect(newState).toEqual({
  filtervalue:'3'
  })

})

it('set issue  book id',()=>{
  const initialState={
    issueBookId:0
   
  }

  const newState=bookReducer(initialState,{
    type:actions.SET_ISSUE_BOOK_ID,
    issueBookId:'1004'
   

  })
  expect(newState).toEqual({
    issueBookId:'1004'
    
  })

})

it('set return   book id',()=>{
  const initialState={
   returnBookId:0
  }

  const newState=bookReducer(initialState,{
    type:actions.SET_RETURN_BOOK_ID,
    returnBookId:'1004'

  })
  expect(newState).toEqual({
    returnBookId:'1004'
  })

})
})


























