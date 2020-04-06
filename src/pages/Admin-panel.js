import React , { Component } from 'react';
import {Route ,BrowserRouter , Router, Switch} from 'react-router-dom';
import Dropdowns from '../Components/Dropdowns';
import StudentList from '../Components/StudentsList';
import Studentspecific from '../Components/Studentspecific';
import Managment from '../Components/Management';
import Paziresh from '../Components/paziresh';
import Teacherlist from '../Components/TeacherList';
import Teacherspecific from '../Components/Teacherspecific';
import Teacherregister from '../Components/teacherregister';
import Librarylist from '../Components/Librarylist';
import Librarycreate from '../Components/Librarycreate';
import Header from '../Components/Header';
import Adminpanel from '../Components/Adminpanel1';
import { Button , Navbar , Nav , NavDropdown , Form } from 'react-bootstrap';
class Admine_Panel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          name: 'محسن',
          job : 'دانش آموزان'
        }
       
    }


    student = () => {
        this.setState({ name: 'سارا' , job : 'دانش آموزان'}) 
        // history.push('/')
    }

    parent = () => {
      this.setState({ name: 'میلاد' , job : 'والدین'}) 
      // history.push('/')
  }

  teacher = () => {
    this.setState({ name: 'تهمینه' , job : 'دبیران'}) 
    // history.push('/')
  }
  
      render() {
        console.log(window.location.pathname)
    return (
        <div className="container-fluid adminpanel">
            <div className="row">
                <BrowserRouter>
                <div className="col-xl-10 col-lg-9 col-md-8 col-sm-8 col-12">
                <Route path="/adminpanel/student" 
                render={() => {
                  return window.location.pathname === "/adminpanel/student"?(<div className="text-dark"><br/><br/><StudentList /><br/><br/></div>
                    ):(<a></a>)}}/>
                <Route path="/adminpanel/teaher/teacheList" component={()=>(<div><br/><br/><Teacherlist/><br/><br/></div>)} />
                <Route path="/adminpanel/teaher/specific" component={()=>(<div><br/><br/><Teacherspecific/><br/><br/></div>)} />
                <Route path="/adminpanel/teaher/register" component={()=>(<div><br/><br/><Teacherregister/><br/><br/></div>)} />

                <Route path="/adminpanel/libraryList" component={()=>(<div><br/><br/><Librarylist/><br/><br/></div>)} />
                <Route path="/adminpanel/librarycreate" component={()=>(<div><br/><br/><Librarycreate/><br/><br/></div>)} />
                <Route path="/adminpanel/student/specific" component={()=>(<div><br/><br/><Studentspecific/><br/><br/></div>)} />
                <Route path="/adminpanel/student/paziresh" component={()=>(<div><br/><br/><Paziresh/><br/><br/></div>)} />
                <Route path="/adminpanel"  render={() => {
          return window.location.pathname === "/adminpanel" ? (
             <Managment />
            ):(
             <a></a>
            )
        }
      } />

                
                </div>
                
                
                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-12" style={{backgroundColor:'#154360'}}>
                  <Dropdowns title="دانش آموزان" content1="همه دانش آموزان" 
                  icon = {<i class="fas fa-angle-left text-white ml-3"></i>} 
                  content2="جزئیات دانش آموزان"
                  content3="فرم پذیرش" content4="ارتقا دانش آموز" 
                  icon2 = {<i class="fas fa-user-graduate ml-2 text-warning"></i>}
                  icon3 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  icon4 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  icon5 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  />


                  <Dropdowns title="معلمان" content1="همه معلمان" 
                  content2="جزئیات معلم"
                  content3="افزودن معلم" content4="پرداخت" 
                  icon = {<i class="fas fa-angle-left text-white ml-3"></i>} 
                  icon2 = {<i class="fas fa-chalkboard-teacher ml-2 text-warning"></i>}
                  icon3 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  icon4 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  icon5 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  />
                  <Dropdowns title="کتابخانه" content1="همه کتاب ها" 
                  content2="افزودن کتاب جدید" 
                  icon = {<i class="fas fa-angle-left text-white ml-3"></i>} 
                  icon2 = {<i class="fas fa-book-open ml-2 text-warning"></i>}
                  icon3 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  
                  />
                  <Dropdowns title="والدین" 
                  content1="همه والدین"
                  content2="جزئیات والدین"
                  content3="افزودن والدین"
                  icon2 = {<i class="fas fa-male ml-2 mr-1 text-warning"></i>}
                  icon = {<i class="fas fa-angle-left text-white ml-3"></i>} 
                  icon3 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  icon4 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  />


                  <Dropdowns title="حساب" 
                  content1="مجموعه تمام هزینه ها" 
                  content2="هزینه ها" 
                  content3="افزودن هزینه" 
                  icon2 = {<i class="fas fa-calculator ml-2 text-warning"></i>}
                  icon = {<i class="fas fa-angle-left text-white ml-3"></i>} 
                  icon3 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  icon4 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  />
                  <Dropdowns title="کلاس" 
                  content1="همه کلاس ها" 
                  content2="افزودن کلاس جدید" 
                  icon2 = {<i class="fas fa-pencil-ruler ml-2 text-warning"></i>}
                  icon = {<i class="fas fa-angle-left text-white ml-3"></i>} 
                  icon3 = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  />


                  <Dropdowns title="موضوع"
                  content1="موضوع" 
                  icon = {<i class="fas fa-angle-left text-white ml-3"></i>} 
                  icon2 = {<i class="far fa-newspaper ml-2 text-warning"></i>}/>
                  <Dropdowns title="روال کلاس"icon2 = {<i class="fas fa-calendar-alt ml-2 text-warning"></i>}/>
                  <Dropdowns title="حضور" content1="همه والدین" icon2 = {<i class="fas fa-clipboard-list ml-2 text-warning"></i>} />
                  <Dropdowns title="امتحان" 
                  content1="برنامه امتحان" 
                  content2="نمرات امتحان"
                  icon = {<i class="fas fa-angle-left text-white ml-3"></i>}
                  icon3 = {<i class="fas fa-angle-left text-white ml-3"></i>}  
                  icon2 = {<i class="fas fa-edit ml-2 text-warning"></i>}/>
                  <Dropdowns title="انتقال" content1="همه والدین" icon2 = {<i class="fas fa-bus-alt ml-2 text-warning"></i>}/>
                  <Dropdowns title="خوابگاه" content1="همه والدین" icon2 = {<i class="fas fa-bed ml-2 text-warning"></i>}/>
                  <Dropdowns title="اطلاع" content1="همه والدین" icon2 = {<i class="fas fa-envelope ml-2 text-warning"></i>}/>
                  <Dropdowns title="پیام" content1="همه والدین" icon2 = {<i class="fas fa-envelope ml-2 text-warning"></i>}/>
                  
                  <Dropdowns title="نقشه" content1="همه والدین" icon2 = {<i class="fas fa-map-marker-alt ml-2 text-warning"></i>}/>
                  <Dropdowns title="حساب" content1="همه والدین" icon2 = {<i class="fas fa-cogs ml-2 text-warning"></i>}/>
                  
                </div>
                </BrowserRouter>
            </div>
        </div>
    )
    }
}

export default Admine_Panel;