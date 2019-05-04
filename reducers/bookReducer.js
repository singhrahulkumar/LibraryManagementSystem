import {SET_BOOK_DETAILS,SET_PAGE_NUMBER,SET_EDIT_BOOK_ID,SET_EDIT_BOOK_DETAILS,SET_EDIT_BOOK_FIELD_DETAILS,SET_ADD_BOOK_ID,
    SET_USER,SET_LOGGED_IN_USER,SET_ISLOGIN,SET_FILTER_VALUE,SET_ADMIN_SHOW_ISSUE_BOOK,SET_FILTER_USER,
    SET_FILTER_BOOK_DETAILS,SET_RETURN_BOOK_ID,SET_ISSUE_BOOK_ID,SET_ISSUE_BOOK_DETAILS} from '../actions/bookActions'
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

function bookReducer(state = defaultstate, action) {
    
    switch(action.type) {
        case 'SET_PAGE_NUMBER' : 
            return {
                ...state,
                pageNum : action.number
            }
        case 'SET_BOOK_DETAILS' : 
        
            return {
                ...state,
                bookDetails : action.book
            }
            case 'SET_FILTER_BOOK_DETAILS' : 
        
            return {
                ...state,
                filterbookDetails : action.filterbook
            }
        case 'SET_EDIT_BOOK_ID':
        return {
            ...state,
            editbookid:action.editbookid
        }
         case 'SET_EDIT_BOOK_DETAILS' :
            return {
                ...state,
               editBookDetails : action.editBookDetails
            }
            case 'SET_EDIT_BOOK_FIELD_DETAILS':
            return {
               ...state,
               editBookDetails : {
                    ...state.editBookDetails,
                    [action.name] : action.value
                }
            }

            case 'SET_ADD_BOOK_ID':
              return{
                  ...state,
                  addbookid:action.addbookid
              }
                case 'SET_USER':
                return{
                    ...state,
                    userData:action.userData
                }
                 case 'SET_FILTER_USER':
                return{
                    ...state,
                    filteruserData:action.filteruserData
                }

                case 'SET_LOGGED_IN_USER':
                return{
                    ...state,
                    loggedinUser:{
                        ...state.loggedinUser,
                        [action.name]:action.value
                    }
                }

                case 'SET_ISLOGIN':
                return{
                     ...state,
                     islooggedin:action.islooggedin
                }
                    case 'SET_FILTER_VALUE':
                    return{
                        ...state,
                        filtervalue:action.filtervalue

                    }
                    case 'SET_ADMIN_SHOW_ISSUE_BOOK':
                    return{
                        ...state,

                    }

                    case 'SET_ISSUE_BOOK_ID':
                    return{
                        ...state,
                       issueBookId:action.issueBookId
                    }

                     case 'SET_RETURN_BOOK_ID':
                    return{
                        ...state,
                        returnBookId:action.returnBookId
                        
                    }

                    case 'SET_ISSUE_BOOK_DETAILS':
                    return{
                        ...state,
                        issuebookDetails:action.issuebookDetails
                    }
     default : return state;

    }
}

export default bookReducer