import React, {Component} from 'react'
import {Bar, Line, Pie, Doughnut} from 'react-chartjs-2'

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:{
                labels: ['Boston', 'Worcester', 'Sprinfield', 'Lowell', 'Cambridge', 'New Bedford'],
                datasets:[
                    {
                        label: 'Population',
                        data:[
                            617540,
                            581945,
                            153060,
                            716519,
                            405162,
                            695072
                        ],
                        backgroundColor:[
                            '#990000',
                            '#730099',
                            '#007399',
                            '#00994d',
                            '#999900',
                            '#2e2e6b',
                        ]
                     }
                    
                ]
            }
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-lg-12">
                    <Line
                        data={this.state.chartData}
                        options={{
                            maintainAspecRatio: false
                        }}
                     />
                    </div>
                    
                    
                </div>
                
            </div>
        )
    }
}

export default Chart