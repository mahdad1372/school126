import React, { useState } from 'react';
import {connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { useHistory } from "react-router-dom";

import './Dropdowns.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class Example extends React.Component {
  constructor(props){
    super(props)
        this.state = {
            name : 'اطلاعات همه دانش آموزان',
            name2: 'worker',
            style : 'block',
            data2 : "Please",
            data : [] ,
            isOpen : false
        }
    
}


//  {change} = this.context
  // const [isOpen, setIsOpen] = useState(false);
  // let history = useHistory();
  // const toggle = () => setIsOpen(!isOpen);

   toggle = () => {
     this.setState({
       isOpen : !this.state.isOpen
     })
   }


   page1 = () => {
    
    switch(this.props.content1){
      case 'همه دانش آموزان':
         return this.props.history.push("/adminpanel/student")
         console.log('hello');
         case 'همه معلمان':
          return this.props.history.push("/adminpanel/teaher/teacheList")
         console.log('hello');
         case 'همه کتاب ها':
          return this.props.history.push("/adminpanel/libraryList")
         console.log('hello');   
        default :
        return console.log('cc')
    }
  }


   page2 = () => {
    
    switch(this.props.content2){
      case "جزئیات دانش آموزان":
        return this.props.history.push("/adminpanel/student/specific");
        case "جزئیات معلم":
        return this.props.history.push("/adminpanel/teaher/specific");
        case "افزودن کتاب جدید":
        return this.props.history.push("/adminpanel/librarycreate");
        default :
        return console.log('cccc')
    }
  }

   page3 = () => {
    
    switch(this.props.content3){
      case "فرم پذیرش":
        return this.props.history.push("/adminpanel/student/paziresh");
        case "افزودن معلم":
        return this.props.history.push("/adminpanel/teaher/register");
        default :
        return console.log('cccc')
    }
  }

  onAgeDown(){
    console.log('Sexy pamela')
   
    
    }
  
render(){
  console.log(this.props)
  
  return (
    <div>
        <div className="d-flex mt-3">
      <div class="mr-auto">
      <i class="fas fa-angle-left text-white"></i>
      </div>
  <div class="">
  <div className="text-right text-style1">
      <a className="ml-3" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.title}
      {this.props.icon2}
      </a>
      </div>
  </div>
      </div>
      
      <Collapse isOpen={this.state.isOpen}>
          <div class="d-flex justify-content-end mt-3" onClick={this.page1}>
  <div class="text-style2">{this.props.content1} {this.props.icon}</div>
  </div> 
  <div class="d-flex justify-content-end mt-3" onClick={this.page2}>
    <div class="text-style2">{this.props.content2}{this.props.icon3}</div>
  </div> 
  <div class="d-flex justify-content-end mt-3" onClick={this.page3}>
    <div class="text-style2">{this.props.content3} {this.props.icon4}</div>
  </div> 
  <div class="d-flex justify-content-end mt-3">
    <div class="text-style2">{this.props.content4} {this.props.icon5}</div>
  </div> 
      </Collapse>
      <div className="line2 mt-3">
      </div>
    </div>
  );
}
  // console.log(props.content1);
  
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