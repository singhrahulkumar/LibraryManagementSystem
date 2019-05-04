import React from 'react';
import { connect } from 'react-redux';
import {setEditBookId,setPageNumber,setEditBookDetails,setEditBookFieldDetails,setBookDetails,setFilterBookDetails} from './actions/bookActions';

class EditBook extends React.Component{

constructor(props)
{
    super(props);
    this.state={
        isDisable:true
    }
   
}

componentDidMount(){
    const {dispatch,editBookDetails}=this.props;
    if(editBookDetails.name===''){
        this.setState({isDisable:false});
    }
}

handleChange(e) {
     const {dispatch} = this.props;
    dispatch(setEditBookFieldDetails(e.target.name,e.target.value));
}

submitForm(e)
{
  e.preventDefault();
  const {dispatch,pageNum,editBookDetails,bookDetails}=this.props;
  var addornot=true;
  bookDetails.map((book,i)=>{
  if(book.id==editBookDetails.id)
    {
       bookDetails[i]=editBookDetails;
       addornot=false;

    }
  })
if(addornot)
    {
        bookDetails.push(editBookDetails);
    }
 dispatch(setBookDetails(bookDetails));
 dispatch(setFilterBookDetails(bookDetails))
 dispatch(setPageNumber(pageNum-1));
}

render(){
    const {editBookDetails}=this.props;
    return(
        <form onSubmit={this.submitForm.bind(this)}>
            <div className={'clearfix'}>
            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Book Id</label>
               <input type="text" disabled className={'form-control'} value ={editBookDetails.id} name="id"/>
           </div>

            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Book Name</label>
               <input type="text" disabled={this.state.isDisable} className={'form-control'} value ={editBookDetails.name} name="name" onChange={this.handleChange.bind(this)} />
           </div>

            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Book Title</label>
               <input type="text" disabled={this.state.isDisable} className={'form-control'} value ={editBookDetails.title} name="title" onChange={this.handleChange.bind(this)}/>
           </div>

            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Book Author</label>
               <input type="text" disabled={this.state.isDisable} className={'form-control'} value ={editBookDetails.author} name="author" onChange={this.handleChange.bind(this)}/>
           </div>

            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Book Description</label>
               <input type="text" disabled={this.state.isDisable} className={'form-control'} value ={editBookDetails.description}  name="description" onChange={this.handleChange.bind(this)}/>
           </div>

            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>No Of Book</label>
               <input type="number" className={'form-control'} value ={editBookDetails.noofbook} name="noofbook" onChange={this.handleChange.bind(this)}/>
           </div>

            <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Book Rating</label>
               <input type="number" min="1" max="5" disabled={this.state.isDisable} className={'form-control'} value ={editBookDetails.rating} name="rating" onChange={this.handleChange.bind(this)}/>
           </div>
             <div className={'col-lg-6 col-md-6 col-sm-6 col-xs-12'}>
               <label>Book Position</label>
               <input type="text" className={'form-control'} value ={editBookDetails.bookPosition} name="bookPosition" onChange={this.handleChange.bind(this)}/>
           </div>
           </div>
           <div className={'col-lg-5'}>
                <button type="submit" className={'btn btn-primary'}>SUBMIT</button>
            </div>
        </form >
    )
}

}

function mapStateToProps(state) {
  const { bookDetails,pageNum,editbookid,editBookDetails} = state.bookReducer;
  return { bookDetails,pageNum,editbookid,editBookDetails };
}
export default connect(mapStateToProps)(EditBook);