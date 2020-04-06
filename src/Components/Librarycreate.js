import React, { Component } from 'react';

import '../App.css';

class Librarycreate extends Component{

    render(){
      
        return(
            <div className="bg-white student-design" style={{borderRadius:5}}>
                <br/>
            <div className="d-flex justify-content-end">
                <h3 className="mr-3">اضافه کردن کتاب جدید</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12 text-right">
                       
                    
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-right">
                        <a>نام نویسنده</a><br/>
                        <input className="input-design" type="text" id="fname" name="fname" />
                       <br/><br/><br/>
                    <a>تاریخ آپلود</a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" />
                    <br/><br/><br/>
</div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-right">
                        <a>موضوع</a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" /><br/><br/><br/>
                    <a>تاریخ اتشار</a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" />
                   <br/><br/><br/>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-right">
                        <a>نام کتاب</a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" /><br/><br/><br/>
                    <a>شماره شناسه </a><br/>
                    <input className="input-design" type="text" id="fname" name="fname" /><br/><br/><br/>
                    </div>
                </div>
                <br/><br/>
                <div>
                <div className="row">
 
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-right">
                    
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

export default Librarycreate;