import React, { Component } from 'react';

import '../App.css';

class Student_specific extends Component{
    
    
    render(){
        console.log(this.context)
        return(
            <div className="bg-white student-design" style={{borderRadius:5}}>
              <div className="d-flex justify-content-end">
                  
                  <div className="mr-3 mt-3">
                  <h2>درباره من</h2>
                  </div>
              </div>
              <br/>
              <div className="container">
                  <div className="row ">
                      <div className="col-lg-8 col-md-12 col-sm-12 text-center img-size3">
                         <h3>شهره رضایی</h3><br/>
                         <a>نام : شهره رضایی</a><br/><br/>
                         <a>جنسیت : زن</a><br/><br/>
                         <a>نام پدر : علی عابدی</a><br/><br/>
                         <a> تاریخ تولد : 25/3/1387</a><br/><br/>
                         <a>msavva@gmail.com: ایمیل</a><br/><br/>
                         <a>3: کلاس</a><br/><br/>
                         <a>آدرس : تهران ، بلار شریعتی</a><br/><br/>
                         <a>تلفن : +54684898</a><br/><br/><br/><br/><br/><br/>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
                      <img className="img-size3 img-size5" src={require('../img/student3.jpg')}/>
                      </div>
                  </div>
                  <div className="row">
                  <div className="col-lg-4 col-md-12 col-sm-12 d-flex justify-content-center">
                      <img className="img-size4" src={require('../img/student3.jpg')}/>
                      </div>
                      <div className="col-lg-8 col-md-12 col-sm-12 text-center img-size4">
                          <br/><br/>
                         <h3>شهره رضایی</h3><br/>
                         <a>نام : شهره رضایی</a><br/><br/>
                         <a>جنسیت : زن</a><br/><br/>
                         <a>نام پدر : علی عابدی</a><br/><br/>
                         <a> تاریخ تولد : 25/3/1387</a><br/><br/>
                         <a>msavva@gmail.com: ایمیل</a><br/><br/>
                         <a>3: کلاس</a><br/><br/>
                         <a>آدرس : تهران ، بلار شریعتی</a><br/><br/>
                         <a>تلفن : +54684898</a><br/><br/><br/><br/><br/><br/>
                      </div>

                  </div>
              </div>
            </div>
            
        )
    }
}

export default Student_specific;