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
  <h2>اطلاعات همه دانش آموزان</h2><br/>
  <a>{this.props.age}</a>
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
  <th>ایمیل</th>
  <th>تلفن</th>
  <th>تاریخ تولد</th>
  <th>آدرس</th>
  <th>والدین</th>
  <th>بخش</th>
  <th>کلاس</th>
  <th>جنسیت</th>
  <th>نام</th>
  <th>عکس</th>
  <th>کد</th>
</tr>
</thead>
<tbody>
<tr className="text-center">
<th><br/>ahmadi@gmail.com</th>
  <th><br/>+9551184</th>
  <th><br/>12/3/1396</th>
  <th><br/>تهران</th>
  <th><br/>رضا مرادی
  <br/><br/><a className="btn btn-info text-white ml-1" onClick={page}>نمایش جزئیات</a>
  </th>
  <th><br/>4</th>
  <th><br/>3</th>
  <th><br/>مرد</th>
  <th><br/>سعید احمدی</th>
  <th><img src={require('../img/student.png')}/></th>
  <th><br/>#0252</th>
</tr>
<tr className="text-center">
<th><br/>ahmadi@gmail.com</th>
  <th><br/>+9551184</th>
  <th><br/>12/3/1396</th>
  <th><br/>تهران</th>
  <th><br/>رضا مرادی
  <br/><br/><a className="btn btn-info text-white ml-1" onClick={page}>نمایش جزئیات</a>
  </th>
  <th><br/>4</th>
  <th><br/>3</th>
  <th><br/>مرد</th>
  <th><br/>سعید احمدی</th>
  <th><img src={require('../img/student.png')}/></th>
  <th><br/>#0252</th>
</tr>
<tr className="text-center">
<th><br/>ahmadi@gmail.com</th>
  <th><br/>+9551184</th>
  <th><br/>12/3/1396</th>
  <th><br/>تهران</th>
  <th><br/>رضا مرادی
  <br/><br/><a className="btn btn-info text-white ml-1" onClick={page}>نمایش جزئیات</a>
  </th>
  <th><br/>4</th>
  <th><br/>3</th>
  <th><br/>مرد</th>
  <th><br/>سعید احمدی</th>
  <th><img src={require('../img/student.png')}/></th>
  <th><br/>#0252</th>
</tr>
<tr className="text-center">
<th><br/>ahmadi@gmail.com</th>
  <th><br/>+9551184</th>
  <th><br/>12/3/1396</th>
  <th><br/>تهران</th>
  <th><br/>رضا مرادی
  <br/><br/><a className="btn btn-info text-white ml-1" onClick={page}>نمایش جزئیات</a>
  </th>
  <th><br/>4</th>
  <th><br/>3</th>
  <th><br/>مرد</th>
  <th><br/>سعید احمدی</th>
  <th><img src={require('../img/student.png')}/></th>
  <th><br/>#0252</th>
</tr>
<tr className="text-center">
<th><br/>ahmadi@gmail.com</th>
  <th><br/>+9551184</th>
  <th><br/>12/3/1396</th>
  <th><br/>تهران</th>
  <th><br/>رضا مرادی
  <br/><br/><a className="btn btn-info text-white ml-1" onClick={page}>نمایش جزئیات</a>
  </th>
  <th><br/>4</th>
  <th><br/>3</th>
  <th><br/>مرد</th>
  <th><br/>سعید احمدی</th>
  <th><img src={require('../img/student.png')}/></th>
  <th><br/>#0252</th>
</tr>
<tr className="text-center">
<th><br/>ahmadi@gmail.com</th>
  <th><br/>+9551184</th>
  <th><br/>12/3/1396</th>
  <th><br/>تهران</th>
  <th><br/>رضا مرادی
  <br/><br/><a className="btn btn-info text-white ml-1" onClick={page}>نمایش جزئیات</a>
  </th>
  <th><br/>4</th>
  <th><br/>3</th>
  <th><br/>مرد</th>
  <th><br/>سعید احمدی</th>
  <th><img src={require('../img/student.png')}/></th>
  <th><br/>#0252</th>
  
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