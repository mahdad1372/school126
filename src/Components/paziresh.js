import React, { Component } from 'react';

import '../App.css';

class Paziresh extends Component{

    render(){
      
        return(
            <div className="bg-white student-design" style={{borderRadius:5}}>
                <br/>
            <div className="d-flex justify-content-end">
                <h3 className="mr-3">اضافه کردن دانش آموز جدید</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 text-right">
                        <a>تاریخ تولد</a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" placeholder="dd/mm/yy" /><br/><br/><br/>
                    <a>ایمیل</a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" /><br/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-right">
                        <a> جنسیت</a><br/>
                        <select id="cars" className="select-design">
  <option className="option-design" value="volvo">جنسیت</option>
  <option className="option-design" value="saab">مرد</option>
  <option className="option-design" value="mercedes">زن</option>
</select><br/><br/><br/>
                    <a>مذهب</a><br/>
                    <select id="cars" className="select-design">
  <option className="option-design" value="volvo">مذهب</option>
  <option className="option-design" value="saab">اسلام</option>
  <option className="option-design" value="mercedes">مسیحی</option>
  <option className="option-design" value="mercedes">یهودی</option>
  <option className="option-design" value="mercedes">زرتشتی</option>
</select><br/><br/><br/>
<a>تلفن</a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" />
</div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-right">
                        <a>نام خانوادگی</a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" /><br/><br/><br/>
                    <a>گروه خونی</a><br/>
                    <select id="cars" className="select-design2">
  <option className="option-design2" value="volvo">لطفا گروه خونی خود را انتخاب کنید</option>
  <option className="option-design2" value="saab">A+</option>
  <option className="option-design2" value="mercedes">A-</option>
  <option className="option-design2" value="saab">O+</option>
  <option className="option-design2" value="mercedes">O-</option>
  <option className="option-design2" value="saab">B+</option>
  <option className="option-design2" value="mercedes">B-</option>
</select><br/><br/><br/>
<a>بخش</a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" /><br/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-right">
                        <a>نام اصلی</a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" /><br/><br/><br/>
                    <a>رول </a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" /><br/><br/><br/>
                    <a>کلاس</a><br/>
                    <select id="cars" className="select-design2" style={{paddingLeft:50}}>
  <option className="option-design2 pl-3" value="volvo">لطفا کلاس را انتخاب کنید</option>
  <option className="option-design2" value="saab">یک</option>
  <option className="option-design2" value="mercedes">دو</option>
  <option className="option-design2" value="saab">سه</option>
  <option className="option-design2" value="mercedes">چهار</option>
  <option className="option-design2" value="saab">پنج</option>
  <option className="option-design2" value="mercedes">شش</option>
</select><br/>
                    </div>
                </div>
                <br/><br/>
                <div>
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 text-right">
                        <br/>
                        <a>آپلود عکس</a><br/>
                    <input type="file" id="myfile" name="myfile" />
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 text-right">
                    <a>آدرس</a><br/>
                    <textarea className="textarea" id="w3mission" rows="4" cols="50">
                    </textarea><br/><br/>
                    
                    <a className="btn btn-info mr-2">تنظیم مجدد</a>
                    <a className="btn btn-warning">ذخیره</a>
                      </div>
                </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Paziresh;