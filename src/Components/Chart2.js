import React , {Component} from 'react';
import {Line , Pie , Bar , Bubble } from 'react-chartjs-2';

class Chart1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData : {        
                labels: ["پنجشنبه", "چهار شنبه" , "سه شنبه", "دوشنبه", "یکشنبه" , "شنبه"],
                datasets: [{
                label: "c",
                // backgroundColor: 'rgb(93, 173, 226 )', 'rgb(247, 220, 111 )' , 'rgb(46, 204, 113)',
                borderColor: 'rgb(255, 99, 132)',
                data: [5, 14 , 10 , 8 , 9 , 7 ,0],
                }]
            },
            chartData2 : {
                labels: ["پنجشنبه", "چهار شنبه" , "سه شنبه", "دوشنبه", "یکشنبه" , "شنبه"],
                datasets: [{
                label: "c",
                backgroundColor: 'white',
                borderColor: 'blue',
                data: [5, 14 , 10 , 8 , 9 , 7 ,0],
                }]
            }
        }
    }
  render(){
    return (
      <div>
            <div class="d-flex justify-content-center">
    <div class="mt-3 mb-1">نمودار درآمد ها</div>
  </div>

      <Line 
      data = {this.state.chartData}
      options={{
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        }
      }}
    //   width={600}
      height={190}
      />
      
      </div>
    )
  }
}

export default Chart1;
