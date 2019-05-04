import React from 'react';
import DisplayTable from './displayTable.jsx';
import SearchBox from './searchBox.jsx';
import EditBook from './editBook.jsx'
import {setBookDetails ,setPageNumber,setUserDetails,setAdminShowIssueBook} from './actions/bookActions';
import { connect } from 'react-redux';

export class ShowUser extends React.Component{
     constructor(props)
    {
        super (props);
        this.state={
                   }
    }
showUser()
{
    const {dispatch,bookDetails,userData}=this.props;
    var userTr=[];
    for(var i=0;i<bookDetails.length;i++)
   {
        for (var j=0;j<bookDetails[i].issuedTo.length;j++)
        {
            for(var k=0;k<userData.length;k++)
            {
                if(userData[k].userId===bookDetails[i].issuedTo[j])
                {

                    for (var m=0;m<userData[k].issuedBook.length;m++)
                    {
                        if(userData[k].issuedBook[m].id===bookDetails[i].id)
                        { 
                           userTr.push(
                                        <tr>
                                        <td>{userData[k].userName}</td>
                                        <td>{bookDetails[i].name}</td>
                                        <td>{bookDetails[i].author}</td>
                                        <td>{bookDetails[i].title}</td>
                                        <td>{userData[k].issuedBook[m].issueDate}</td>
                                        <td>{userData[k].issuedBook[m].returnDate}</td> 
                                        </tr>
                                    )
                                            
                            break;
                        }
                    }
                    break;
                }
                                    
            }

        }
                    
    }
                    
    return userTr;
}

       render (){
           const {userData,bookDetails} =this.props
           return(
               <div>
                 
                  <table className={'table table-striped'}>
                       <thead>
                    <tr>
                        <th> User Name</th>
                        <th> Book Name</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Issued Date</th>
                        <th>Return Date</th>
                    </tr>
                </thead>
                <tbody>
                 {this.showUser()}
                 </tbody>
                </table>
                </div>
           )
       }
      
   
    
}


function mapStateToProps(state) {
  const {userData,bookDetails,issuebook} = state.bookReducer;
  return {userData,bookDetails,issuebook};
}
export default connect(mapStateToProps)(ShowUser);