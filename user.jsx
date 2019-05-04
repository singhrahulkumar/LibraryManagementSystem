import React from 'react';
import DisplayTable from './displayTable.jsx';
import SearchBox from './searchBox.jsx';
import EditBook from './editBook.jsx';
import ShowUser from './showUser.jsx';
import {setBookDetails ,setPageNumber,setUserDetails,setLoggedinUser,setIsLoggedIn,setIssueBookId} from './actions/bookActions';
import { connect } from 'react-redux';

export class User extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            actionBtn: "action-btn"
        }
       this.issuebook=this.issuebook.bind(this);
      
    }

    issuebook(e)
    {
        const {dispatch,bookDetails,userData,loggedinUser}=this.props;
        var position;
        bookDetails.map((book,i)=>{
            if(book.id===e.target.id)
            {
                if(book.noofbook>0)
                    {
                 book.issuedTo.push(loggedinUser.userId);
                 position=book.bookPosition;
                 book.noofbook=parseInt(book.noofbook)-1;
                    }
            }
        });
        dispatch(setBookDetails(bookDetails));
        userData.map((user,i)=>{
            if(user.userId===loggedinUser.userId){
                var today = new Date();
                var dd = today.getDate();
                 var mm = today.getMonth()+1; //January is 0!
                var dd1=dd+3;
                var yyyy = today.getFullYear();
                if(dd<10) {
                     dd = '0'+dd
                } 
                if(mm<10) {
                     mm = '0'+mm
                  } 
                var  issuedate = dd + '/' + mm + '/' + yyyy;
                var returndate=  dd1 + '/' + mm + '/' + yyyy;
                user.issuedBook.push({id:e.target.id,issueDate:issuedate,returnDate:returndate,rating:''});
            }
            
        });
        dispatch(setUserDetails(userData));
        alert("book issued. please take the book from location :"+position);
        this.forceUpdate();
        
    }



   render(){
        const {loggedinUser,bookDetails}=this.props;

        return(
            <div>
               <table className={'table table-striped'}>
                 <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>No.of Book</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {bookDetails.map((book,i) =>
            
                   <tr key={i}>
                     <td>{book.id}</td>
                      <td>{book.name}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.description}</td>
                      <td>{book.noofbook}</td>
                      <td>{book.rating}</td>
                      <td onClick={this.issuebook.bind(this)} ><span id={book.id} className={this.state.actionBtn}>Issue Book</span></td>
                      

             </tr>
           
                    )}
            </tbody>
            </table>
           
                
            </div>
        );
    }
}

function mapStateToProps(state) {
  const {loggedinUser,userData,bookDetails} = state.bookReducer;
  return { loggedinUser,userData,bookDetails};
}
export default connect(mapStateToProps)(User);