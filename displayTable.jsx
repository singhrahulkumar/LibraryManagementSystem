import React from 'react';
import { connect } from 'react-redux';
import {setEditBookId,setPageNumber,setEditBookDetails,setBookDetails,setAddBookId} from './actions/bookActions';


class DisplayTable extends React.Component {
    constructor(props){
        super(props);
        this.editPage=this.editPage.bind(this);
        this.deletePage=this.deletePage.bind(this);
        this.addPage=this.addPage.bind(this);
        
    };

    
addPage()
{
    const {dispatch,pageNum,addbookid}=this.props;
    var editBookDetails={"id":addbookid.toString(),"name":'',"title":'',"author":'',"description":'',"noofbook":'',"rating":'',"bookPosition":'',"issuedTo":[]};
    dispatch(setAddBookId(parseInt(addbookid)+1));
    dispatch(setEditBookDetails(editBookDetails));
   dispatch(setPageNumber(pageNum+1));
}

deletePage(e){
const {dispatch,pageNum,bookDetails} = this.props;
var idcopy=0;
bookDetails.map((book,i)=>{
    if(book.id==e.target.id)
    {
        idcopy=i;
    }
})
 bookDetails.splice(idcopy,1);
dispatch(setBookDetails(bookDetails));
this.forceUpdate();

}
 editPage(e){
     const {dispatch,pageNum,bookDetails}=this.props;
     var editBookDetails={};
     bookDetails.map((book,id)=>{
          if(book.id===e.target.id){
            editBookDetails=book;
          }
     })
     dispatch(setEditBookDetails(editBookDetails));
     dispatch(setPageNumber(pageNum+1));
}

render() {
     var {bookDetails}=this.props;
    
     return (
          <div>
              <button  id ="add" className="btn btn-primary pull-right" onClick={this.addPage} >ADD</button>
         <table className={'table table-striped'}>
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Book Name</th>
                        <th>Book Title</th>
                        <th>Book Author</th>
                        <th>Book Description</th>
                        <th>No.of Book</th>
                        <th>Book Rating</th>
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
                      <td  onClick={this.editPage} > <span  id={book.id} className={'edit-action action-btn'}>edit</span></td>
                      <td  onClick={this.deletePage}> <span id={book.id} className={'delete-action action-btn'}>delete</span></td>

             </tr>
           
                    )}
            </tbody>
            </table>
     </div>
      );
   }
}
function mapStateToProps(state) {
  const { bookDetails,pageNum ,addbookid} = state.bookReducer;
  return { bookDetails,pageNum,addbookid };
}
export default connect(mapStateToProps)(DisplayTable);