import React from 'react';
import { connect } from 'react-redux';
import {setEditBookId,setPageNumber,setEditBookDetails,setBookDetails,setAddBookId,setFilterValue} from './actions/bookActions';


export class SearchBox extends React.Component {
    constructor(props)
    {
       super(props);
       this.doSearch=this.doSearch.bind(this);
    }
 doSearch(e){
     var query =e.target.value;
     this.props.doSearch(query);
    }
    selectFilter(e){
        const {dispatch}=this.props;
        dispatch(setFilterValue(e.target.value));
    }
  render() {
    const {loggedinUser}=this.props;
      return (
          <div className={'clearfix search-pane'}>
           <div className={'col-lg-5 col-md-6 col-xs-6 no-padding-left'}>
           <input type="text" id="search" className={'form-control'} ref={"searchInput"} placeholder="Search Name" value={this.props.query} onChange={this.doSearch}/>
           </div>
           <div className={'col-lg-4 col-md-5 col-xs-5 pull-right no-padding-right'}>
           <select onChange={this.selectFilter.bind(this)} className={'form-control'}>
             <option value="0">please select a value</option>
            { loggedinUser.userName=="Admin" && <option value="1">username</option>}
             <option value="3">author</option>
              <option value="4">title</option>
         </select>
         </div>
        </div>
      );
   }
}


function mapStateToProps(state) {
  const { bookDetails,pageNum ,addbookid,filtervalue,loggedinUser} = state.bookReducer;
  return { bookDetails,pageNum,addbookid,filtervalue,loggedinUser };
}
export default connect(mapStateToProps)(SearchBox);