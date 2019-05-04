import React from 'react';
import DisplayTable from './displayTable.jsx';
import SearchBox from './searchBox.jsx';
import EditBook from './editBook.jsx';
import ShowUser from './showUser.jsx';
import ReturnBookDetails from './returnBookDetails.jsx'
import LogIn from './logIn.jsx';
import User from './user.jsx';
import ReturnBook from './returnBook.jsx'
import {setBookDetails ,setFilterBookDetails,setPageNumber,setUserDetails,setFilterUserDetails,setLoggedinUser,setIsLoggedIn,setFilterValue} from './actions/bookActions';
import { connect } from 'react-redux';

class App extends React.Component {

    constructor(props)
    {
        super (props);
        this.state={
             query:'',
            filteredData: this.props.data
        }
        this.doSearch=this.doSearch.bind(this);
        this.show=this.show.bind(this);
      
    }

    show(e){
        const {dispatch}=this.props;
        if(e.target.id==='manage'){
             dispatch(setPageNumber(0));
        }

        if(e.target.id==='show'){
             dispatch(setPageNumber(2));
        }

    }

    componentWillMount()
{
        const {dispatch}=this.props;
       dispatch(setBookDetails(this.props.data));
        dispatch(setUserDetails(this.props.userDat));
        dispatch(setFilterBookDetails(this.props.data));
        dispatch(setFilterUserDetails(this.props.userDat));
       
       
}


    doSearch(queryText)
    {
        const {dispatch,bookDetails,filterbookDetails,filtervalue,userData,filteruserData}=this.props;
         var queryResult=[]; 
         if(filtervalue==='0'){
           alert("please select appropriate dropdown.");
         }
         switch(filtervalue){
         case '1':
                  if(queryText!='')
                 {
                   var userdetail=[];
                   filteruserData.map((user,i)=>{
                   if(user.userName.toLowerCase().indexOf(queryText)!=-1)
                    userdetail.push(user);
                });
                dispatch(setUserDetails(userdetail));
            }
            else
                dispatch(setUserDetails(filteruserData));
             break;
        
        case '3':
                  if(queryText!='')
                {
                    var bookauthordetail=[];
                    filterbookDetails.map((book,i)=>{
                    if(book.author.toLowerCase().indexOf(queryText)!=-1)
                      bookauthordetail.push(book);
                   });
                dispatch(setBookDetails(bookauthordetail));
                }else{
                    dispatch(setBookDetails(filterbookDetails));
                    }
                  break;
        case '4':
                  if(queryText!='')
                {
                    var booktitledetail=[];
                    filterbookDetails.map((book,i)=>{
                    if(book.title.toLowerCase().indexOf(queryText)!=-1)
                      booktitledetail.push(book);
                   });
                dispatch(setBookDetails(booktitledetail));
                }else{
                    dispatch(setBookDetails(filterbookDetails));
                    }
                  break;
              
       
         }
       

       
        this.setState({
            query:queryText,
            filteredData: queryResult
        })

    }

    logout()
    {
        const {dispatch,filterbookDetails,filteruserData }=this.props;
          dispatch(setFilterValue(0));
          this.setState({
            query:'',
            
        })
         dispatch(setLoggedinUser({}));
         dispatch(setBookDetails(filterbookDetails));
         dispatch(setUserDetails(filteruserData));
          dispatch(setPageNumber(-1));
          dispatch(setIsLoggedIn(false));
    }
        open(e)
        {
            const {dispatch}=this.props;
            if(e.target.id==='booklist'){
                dispatch(setPageNumber(3));
            }
             if(e.target.id==='issue'){
                dispatch(setPageNumber(4));
            }

        }
   render() {
       const{pageNum,islooggedin}=this.props;
      return (
         <div className="InstantBox">
               <div className={'main-header clearfix'}> <h1 className={'text-center col-md-8 col-sm-6 col-xs-6'}>Library Management System</h1>

               { islooggedin===true && <button onClick={this.logout.bind(this)} className={'btn btn-default logout pull-right col-md-1 col-sm-2 col-xs-3'}>Log Out</button>}</div>
               <div className={'col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 col-xs-12'}>
                {pageNum==-1 && <LogIn/>}
               { pageNum==0 &&  
               <div>  
                   <div className={'tab-pane'}>
                    <button id={"manage"} className="btn btn-info manage-btn" onClick={this.show.bind(this)}>ManageBook</button>
                    <button id={"show"} className="btn btn-default" onClick={this.show.bind(this)}>Show Issued Book</button>
                </div>
                 <DisplayTable  />
                </div>
                }
                {pageNum==1 && <EditBook/>}  
                {pageNum==2 && <div>  
                   <div className={'tab-pane'}>
                    <button id={"manage"} className="btn btn-default manage-btn" onClick={this.show.bind(this)}>ManageBook</button>
                    <button id={"show"} className="btn btn-info" onClick={this.show.bind(this)}>Show Issued Book</button>
                </div>
                 <SearchBox query={this.state.query} doSearch={this.doSearch}/>
                <ShowUser/>
                </div>
                }  
                {pageNum==3 && 
                <div>
                <div className={'tab-pane'}>
                    <button id={"booklist"} className="btn btn-info manage-btn" onClick={this.open.bind(this)}>Book List</button>
                    <button id={"issue"} className="btn btn-default" onClick={this.open.bind(this)}>Issue Book List</button>
                </div>
                <SearchBox query={this.state.query} doSearch={this.doSearch}/>
                <User/>
                </div>
                }     
                 {pageNum==4 && 
                <div>
                <div className={'tab-pane'}>
                    <button id={"booklist"} className="btn btn-default manage-btn" onClick={this.open.bind(this)}>Book List</button>
                    <button id={"issue"} className="btn btn-info" onClick={this.open.bind(this)}>Issue Book List</button>
                </div>
                <ReturnBook/>
                </div>
                }   
                  {
                      pageNum==5 && 
                      <ReturnBookDetails/>
                  }
                  </div>
                </div>
      );
   }
}

function mapStateToProps(state) {
  const {bookDetails,filterbookDetails,pageNum,islooggedin,filtervalue,userData,filteruserData} = state.bookReducer;
  return {bookDetails,filterbookDetails,pageNum,islooggedin,filtervalue,userData,filteruserData};
}
export default connect(mapStateToProps)(App);