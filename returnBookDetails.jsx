import React from 'react';
import DisplayTable from './displayTable.jsx';
import SearchBox from './searchBox.jsx';
import EditBook from './editBook.jsx';
import ShowUser from './showUser.jsx';
import {setBookDetails ,setPageNumber,setUserDetails,setLoggedinUser,setIsLoggedIn} from './actions/bookActions';
import { connect } from 'react-redux';

export class ReturnBookDetails extends React.Component{

    constructor(props){
        super(props);


         this.returnbook=this.returnbook.bind(this);
    }

returnbook()
{

  
    const {dispatch,bookDetails,userData,loggedinUser,returnBookId}=this.props;
 
        var position;
        bookDetails.map((book,i)=>{
            if(book.id===returnBookId)
            {
               
                 book.issuedTo.splice(i,1);
                 book.noofbook=parseInt(book.noofbook)+1;
                 position=book.bookPosition;
                    
            }
        });

    
        dispatch(setBookDetails(bookDetails));
        userData.map((user,i)=>{
            if(user.userId===loggedinUser.userId){
                  user.issuedBook.map((issuebook,j)=>{
                   if(issuebook.id===returnBookId){
                      user.issuedBook.splice(j,1);
                    }
                  })
            }
            
        });
        dispatch(setUserDetails(userData));
        alert("book returned.please  keep the book at "+position+" location",dispatch(setPageNumber(4)));
}

render(){
    const {issuebookDetails,returnBookId}=this.props;
    var issuebook;
    issuebookDetails.map((issueBook,i)=>{
        if(issueBook.bookid===returnBookId)
            {
                  issuebook=issueBook;
            }
    })
  
    return(
        <form onSubmit={this.returnbook.bind(this)}>
        <div className={'clearfix'}>
            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>BookId</label>
               <input type="text" disabled className={'form-control'} value ={issuebook.bookid} name="id"/>
           </div>

           <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Name</label>
               <input type="text"disabled className={'form-control'} value ={issuebook.bookname} name="name"  />
           </div>

            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Title</label>
               <input type="text" disabled className={'form-control'} value ={issuebook.booktitle} name="title" />
           </div>

            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Author</label>
               <input type="text" disabled className={'form-control'} value ={issuebook.bookauthor} name="author" />
           </div>

            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Description</label>
               <input type="text" disabled className={'form-control'} value ={issuebook.bookdescription}  name="description"/>
           </div>
           <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Rating</label>
               <input type="number" min="1" max="5" className={'form-control'} name="rating" />
           </div>
        </div>
        <div className={'col-lg-5'}>
            <button  type="submit" className={'btn btn-primary'}>SUBMIT</button>
        </div>
        </form >
    )
}

}

function mapStateToProps(state) {
  const { bookDetails,pageNum,loggedinUser,returnBookId,userData,issuebookDetails} = state.bookReducer;
  return { bookDetails,pageNum,loggedinUser,returnBookId,userData,issuebookDetails };
}
export default connect(mapStateToProps)(ReturnBookDetails);