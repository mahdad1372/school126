import React , {Component} from 'react';
import {Line , Pie , Bar , Doughnut } from 'react-chartjs-2';

class Chart1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData : {        
                labels: ["پسر", "دختر"],
                datasets: [{
                label: "c",
                backgroundColor: ['rgb(93, 173, 226 )', 'rgb(247, 220, 111 )' , 'rgb(46, 204, 113)'],
                
                data: [15, 10 , 0 , 0],
                }] ,

            }
        }
    }
  render(){
    return (
      <div>
            <div class="d-flex justify-content-center">
    <div class="mt-3 mb-1">دانش آموزان</div>
  </div>

      <Doughnut 
      data = {this.state.chartData}
      options={{
        legend: {
            display: true,
            labels: {
                fontColor: 'black',
                fontFamily : 'myFirstFont2',
                fontSize:20
            },

        }
      }}
    //   width={600}
      height={400}
      />
      </div>
    )
  }
}

export default Chart1;
