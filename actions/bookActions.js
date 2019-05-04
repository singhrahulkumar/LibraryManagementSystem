export const SET_BOOK_DETAILS= 'SET_BOOK_DETAILS'
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER'
export const SET_EDIT_BOOK_ID='SET_EDIT_BOOK_ID'
export const SET_EDIT_BOOK_DETAILS = 'SET_EDIT_BOOK_DETAILS'
export const SET_EDIT_BOOK_FIELD_DETAILS='SET_EDIT_BOOK_FIELD_DETAILS'
export const SET_ADD_BOOK_ID='SET_ADD_BOOK_ID'
export const SET_USER='SET_USER'
export const SET_LOGGED_IN_USER='SET_LOGGED_IN_USER'
export const SET_ISLOGIN='SET_ISLOGIN'
export const SET_FILTER_VALUE='SET_FILTER_VALUE'
export const SET_ADMIN_SHOW_ISSUE_BOOK='SET_ADMIN_SHOW_ISSUE_BOOK'
export const SET_FILTER_BOOK_DETAILS='SET_FILTER_BOOK_DETAILS'
export const SET_FILTER_USER='SET_FILTER_USER'
export const SET_RETURN_BOOK_ID='SET_RETURN_BOOK_ID'
export const SET_ISSUE_BOOK_ID='SET_ISSUE_BOOK_ID'
export const SET_ISSUE_BOOK_DETAILS='SET_ISSUE_BOOK_DETAILS'

export function setBookDetails(book) {
    
    return {
        type : SET_BOOK_DETAILS,
        book
    }
}

export function setFilterBookDetails(filterbook) {
    
    return {
        type : SET_FILTER_BOOK_DETAILS,
        filterbook
    }
}
export function setEditBookId(editbookid)
{
return {
    type: SET_EDIT_BOOK_ID,
    editbookid
}
}
export function setPageNumber(number) {
    
    return {
        type : SET_PAGE_NUMBER,
        number
    }
}
    export function setEditBookDetails(editBookDetails) {
    return {
        type : SET_EDIT_BOOK_DETAILS,
        editBookDetails
    }
}

export function setEditBookFieldDetails(name,value) {
    return {
        type : SET_EDIT_BOOK_FIELD_DETAILS,
        name,
        value
    }
}

export function setLoggedinUser(name,value) {
    return {
        type : SET_LOGGED_IN_USER,
        name,
        value
    }
}

export function setAddBookId(addbookid){
   return{
       type:SET_ADD_BOOK_ID,
       addbookid
   }
}

export function setUserDetails(userData){
   return{
       type:SET_USER,
       userData
   }
}

export function setFilterUserDetails(filteruserData){
   return{
       type:SET_FILTER_USER,
       filteruserData
   }
}
export function setIsLoggedIn(islooggedin){
return{
       type:SET_ISLOGIN,
       islooggedin
   }
}

export function setFilterValue(filtervalue){
return{
       type:SET_FILTER_VALUE,
       filtervalue
   }
}

export function setAdminShowIssueBook(issuebook){
return{
       type:SET_ADMIN_SHOW_ISSUE_BOOK,
       issuebook
   }
}

export function setIssueBookId(issueBookId){
return{
       type:SET_ISSUE_BOOK_ID,
       issueBookId
   }
}

export function setReturnBookId(returnBookId){
return{
       type:SET_RETURN_BOOK_ID,
       returnBookId
   }
}

export function setIssueBookDetails(issuebookDetails){
return{
       type:SET_ISSUE_BOOK_DETAILS,
       issuebookDetails
   }
}