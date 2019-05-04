import React from 'react';
import DisplayTable from './displayTable.jsx';
import SearchBox from './searchBox.jsx';
import EditBook from './editBook.jsx';
import ShowUser from './showUser.jsx';
import {setBookDetails ,setPageNumber,setUserDetails,setLoggedinUser,setIsLoggedIn,setIssueBookDetails,setReturnBookId} from './actions/bookActions';
import { connect } from 'react-redux';

export class ReturnBook extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
         actionBtn: "action-btn"
        }
       this.returnbook=this.returnbook.bind(this);
      
    }

    returnbook(e)
    {
        const {dispatch,bookDetails,userData,loggedinUser}=this.props;
        dispatch(setReturnBookId(e.target.id));
        dispatch(setPageNumber(5));
    }


    renderIssueBook(){
        const {dispatch,userData,bookDetails,loggedinUser}=this.props;
        var index;
        userData.map((user,i)=>{
               if(user.userName===loggedinUser.userName){
                     index=i;
                    }
        });
        var issuebooktr=[];  
        var issuebookDetails=[];      
        for(var i=0;i<userData[index].issuedBook.length;i++){
            for(var j=0;j<bookDetails.length;j++)
            {
                if(bookDetails[j].id===userData[index].issuedBook[i].id){
                    issuebookDetails.push({
                    "bookid":bookDetails[j].id,
                    "bookname":bookDetails[j].name,
                     "booktitle":bookDetails[j].title,
                     "bookauthor":bookDetails[j].author,
                     "bookdescription":bookDetails[j].description,
                     "bookissuedate":userData[index].issuedBook[i].issueDate,
                     "bookreturndate":userData[index].issuedBook[i].returnDate
                                  });
                issuebooktr.push(
                    <tr key={j}>
                        <td>{bookDetails[j].id}</td>
                        <td>{bookDetails[j].name}</td>
                        <td>{bookDetails[j].title}</td>
                        <td>{bookDetails[j].author}</td>
                        <td>{bookDetails[j].description}</td>
                        <td>{userData[index].issuedBook[i].issueDate}</td>
                        <td>{userData[index].issuedBook[i].returnDate}</td>
                        <td onClick={this.returnbook.bind(this)} ><span id={bookDetails[j].id} className={this.state.actionBtn}>Return Book</span></td>
                    </tr>
                );
                    break;
                }
            }
        }
    dispatch(setIssueBookDetails(issuebookDetails));
        return issuebooktr;
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
                        <th>Issue Date</th>
                        <th>Return Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderIssueBook()}
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
export default connect(mapStateToProps)(ReturnBook);