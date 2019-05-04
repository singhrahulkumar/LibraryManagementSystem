import React from 'react';
import DisplayTable from './displayTable.jsx';
import SearchBox from './searchBox.jsx';
import EditBook from './editBook.jsx';
import ShowUser from './showUser.jsx';
import {setBookDetails ,setPageNumber,setUserDetails,setLoggedinUser,setIsLoggedIn} from './actions/bookActions';
import { connect } from 'react-redux';


export class LogIn extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
          errormessage:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    handleChange(e) {
    const {dispatch} = this.props;
    dispatch(setLoggedinUser(e.target.name,e.target.value));
    }
submitForm(e){
    e.preventDefault();
  
  const {dispatch,loggedinUser,userData}=this.props;
  if(loggedinUser.userName==="Admin" && loggedinUser.password==='Admin'){
          dispatch(setPageNumber(0));
          dispatch(setIsLoggedIn(true));
        }
else{
    var isvaliduser=false;
  for(var i=0;i<userData.length;i++){
      if(userData[i].userName===loggedinUser.userName && userData[i].password===loggedinUser.password){
          dispatch(setLoggedinUser("userId",userData[i].userId));
          dispatch(setPageNumber(3));
          dispatch(setIsLoggedIn(true));
          isvaliduser=true;
          break;
      }
  }
if(!isvaliduser){
this.setState({
    errormessage:'invalid username or password'
});
dispatch(setPageNumber(-1));
}

}


}

    render(){
        const {loggedinUser}=this.props;
        return(
           
            <div className={'col-lg-6 col-md-8 login-pane col-lg-offset-3 col-md-offset-2 col-xs-12'}>
                <form id={'loginForm'} onSubmit={this.submitForm.bind(this)}>
               <div>
                <label>User Name </label>
                <input className={'col-lg-8 no-float form-control'} type="text" value ={loggedinUser.userName} name="userName" onChange={this.handleChange.bind(this)}/>
                </div>
            <div>
                <label>Password</label>
                <input className={'col-lg-8 no-float form-control'} type="password" value ={loggedinUser.password} name="password" onChange={this.handleChange.bind(this)}/>
            </div>
                 
            <div>
                <button  type="submit" className="btn btn-primary">SUBMIT</button>
            </div>
            <div className={'error-message'}> {this.state.errormessage}</div>        
        </form >
        </div>
        
            
        );
    }
}

function mapStateToProps(state) {
  const {loggedinUser,userData} = state.bookReducer;
  return { loggedinUser,userData};
}
export default connect(mapStateToProps)(LogIn);