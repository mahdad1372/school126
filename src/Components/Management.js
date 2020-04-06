import React, { Component } from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Elanat from './Elanat';
import '../App.css';

class Managment extends Component{

    render(){
      
        return(
            <div><br/><br/>
                 <div class="d-flex flex-row-reverse mr-3">
    <div><h3>داشبورد مدیریت</h3></div>
  </div>
  <div className="container mb-3">
      <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="box2 bg-white mb-3">
              <div class="d-flex justify-content-center">
    <div class="mt-3 mr-3 text-center">
        <br/>
        <a>درآمد</a><br/>
        <a>5000 تومان</a>
    </div>
    <div class="mt-3 mb-3"><img src={require('../img/coin.png')}/></div>
  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div className="box2 bg-white mb-3">
          <div class="d-flex justify-content-center">
    <div class="mt-3 text-center mr-2">
        <br/>
        <a>والدین</a><br/>
    <a>400</a>
    </div>
    <div class="mt-3 mb-3"><img src={require('../img/mother.png')}/></div>
  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div className="box2 bg-white mb-3">
          <div class="d-flex justify-content-center">
    <div class="mt-3 text-center">
        <br/>
        <a>معلمان</a><br/>
    <a>2400</a>
    </div>
    <div class="mt-3 mb-3"><img src={require('../img/teacher2.png')}/></div>
  </div>
              </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
          <div className="box2 bg-white mb-3">
          <div class="d-flex justify-content-center">
    <div class="mt-3 text-center">
        <br/>
        <a>دانش آموزان</a><br/>
    <a>15000</a>
    </div>
    <div class="mt-3 mb-3"><img src={require('../img/student5.png')}/></div>
  </div>
              </div>
          </div>
      </div>
  </div>

  <div className="container mt-3">
      <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
              <div className="box2 bg-white">
              <Chart1 />
              </div>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 mb-3">
              <div className="box2 bg-white">
                  <Chart2 />
              </div>
          </div>
      </div>
  </div>

  <div className="container mt-3">
      <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
              <div className="box2 bg-white">
              <Elanat />
              </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mb-3">
              <div className="box2 bg-white">
                  <Chart3 />
              </div>
          </div>
      </div>
  </div>
            </div>
        )
    }
}

export default Managment;