import React, { useState } from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { useHistory } from "react-router-dom";

import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Example extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        name : 'ورود دانش آموزان',
        name2: 'worker',
        style : 'block',
        data2 : "Please",
        data : [] ,
        isOpen : false
    }
}



  
render(){
 
  
  return (
   <div>
       <div className="container-fluid login-page">
           <div className="row">
               <div className="col-lg-6 col-md-6 col-sm-12">
                 <div className="d-flex justify-content-center">
                   <div>
                   <img src={require('../img/newschool.jpg')} className="img-size6"/>
                   </div>
                 </div>
                 
               </div>

               <div className="col-lg-6 col-md-6 col-sm-12 bg-primary">
               <br/><br/><br/>
               <div class="d-flex justify-content-center mb-3 text-white">
    <div class="p-2"><a onClick={()=> this.setState({name : 'ورود دانش آموزان'})} style={{cursor:'default'}}>دانش آموزان</a></div>
    <div class="p-2"><a onClick={()=> this.setState({name : 'ورود معلمان'})} style={{cursor:'default'}}>معلمان</a></div>
    <div class="p-2"><a onClick={()=> this.setState({name : 'ورود دبیران'})} style={{cursor:'default'}}>دبیران</a></div>
  </div>
  <div class="d-flex justify-content-center mb-3 text-white">
  <div class="p-2"><a>{this.state.name}</a></div>
</div>
<div class="d-flex justify-content-center mb-3">
<input className="input-design3" type="text" id="fname" name="fname" placeholder="نام کاربری" />
</div>
<div class="d-flex justify-content-center mb-3">
<input className="input-design3" type="text" id="fname" name="fname" placeholder="رمز عبور" />
</div>
<div class="d-flex justify-content-center">
<a className="btn-lg btn btn-warning">ورود</a>
</div>
</div>

           </div>
       </div>
   </div>
  );
}
 
  
}

const mapStateToProps = (state) =>{
  return {
    age:state.age ,
    Name :state.name
  }
}


const mapDispachToProps = (dispach) =>{
  return {
      onAgeUp : () => dispach({type:'AGE_UP'}),
      onAgeDown : () => dispach({type:'AGE_DOWN'})
  }
}

export default connect (mapStateToProps, mapDispachToProps) (withRouter(Example));