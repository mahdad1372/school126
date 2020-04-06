import React, { Component , useContext } from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { Button , Navbar , Nav , NavDropdown , Form } from 'react-bootstrap';
import './Dropdowns.css';
import '../App.css';

class Header extends Component {
  // let history = useHistory();
 

  render(){
    const page = () => {
    
      console.log('mahdad')
          this.props.history.push("/adminpanel/student/specific");
        
      }
    return(
      <div className="bg-white student-design" style={{borderRadius:5}}>
        <div className="d-flex justify-content-end">
            
            <div className="mr-3 mt-3">
  <h2>همه کتاب ها</h2><br/>

            </div>
        </div>
        <div class="d-flex justify-content-center mb-3 mt-3">
        <div class="p-2 search"><a className="btn btn-warning btn-lg text-white">جستجو</a></div>
<div class="p-2 search"><input className="input-design" type="text" id="fname" name="fname" placeholder="جستجو بر اساس تلفن" /></div>
<div class="p-2 search" style={{marginRight:40}}><input className="input-design2" type="text" id="fname" name="fname" placeholder="جستجو بر اساس نام" /></div>
<div class="p-2 search"><input className="input-design" type="text" id="fname" name="fname" placeholder="جستجو بر اساس شناسه" /></div>
</div>

<div class="d-flex justify-content-center mt-3">
<div class="p-2 search2"><a className="btn btn-warning btn-lg text-white">جستجو</a></div>
</div>
<div class="d-flex justify-content-center mt-1">
<div class="p-2 search2"><input className="input-design" type="text" id="fname" name="fname" placeholder="جستجو بر اساس تلفن" /></div>
</div>

<div class="d-flex justify-content-center mt-1">
<div class="p-2 search2"><input className="input-design2" type="text" id="fname" name="fname" placeholder="جستجو بر اساس نام" /></div>
</div>

<div class="d-flex justify-content-center mt-1">
<div class="p-2 search2"><input className="input-design" type="text" id="fname" name="fname" placeholder="جستجو بر اساس شناسه" /></div>
</div>
<table class="table table-striped">
<thead>
<tr className="text-center">
  <th>ایجاد تاریخ</th>
  <th>منتشر شده</th>
  <th>نویسنده</th>
  <th>موضوع</th>
  <th>نام کتاب</th>
  <th>کد</th>
</tr>
</thead>
<tbody>
<tr className="text-center">
<th><br/>1850</th>
  <th><br/>2018</th>
  <th><br/>ویکتور هوگو</th>
  <th><br/>رمان</th>
  <th><br/>بینوایان
  </th>
  <th><br/>001</th>
</tr>
<tr className="text-center">
<th><br/>1750</th>
  <th><br/>2019</th>
  <th><br/>چارلز دیکندز</th>
  <th><br/>رمان</th>
  <th><br/>الیور تویست
  </th>
  <th><br/>002</th>
</tr>
<tr className="text-center">
<th><br/>1950</th>
  <th><br/>2020</th>
  <th><br/>چارلز دیکندز</th>
  <th><br/>رمان</th>
  <th><br/>الکاپو
  </th>
  <th><br/>003</th>
</tr>
<tr className="text-center">
<th><br/>1750</th>
  <th><br/>2019</th>
  <th><br/>چارلز دیکندز</th>
  <th><br/>رمان</th>
  <th><br/>الیور تویست
  </th>
  <th><br/>002</th>
</tr>
<tr className="text-center">
<th><br/>1750</th>
  <th><br/>2019</th>
  <th><br/>چارلز دیکندز</th>
  <th><br/>رمان</th>
  <th><br/>الیور تویست
  </th>
  <th><br/>002</th>
</tr>
<tr className="text-center">
<th><br/>1750</th>
  <th><br/>2019</th>
  <th><br/>چارلز دیکندز</th>
  <th><br/>رمان</th>
  <th><br/>الیور تویست
  </th>
  <th><br/>002</th>
  
</tr>
</tbody>
</table>
      </div>
      
  )
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
export default connect (mapStateToProps, mapDispachToProps)(withRouter(Header));