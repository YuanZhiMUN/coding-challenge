import React from 'react';
var BarChart = require("react-chartjs").Bar;

class MyBarChart extends React.Component {
    render(){
       
        var barChartData = {
            labels : ['OutAddress1', 'OutAddress2'],
            datasets : [
                {
                    fillColor : "rgba(220,220,220,0.5)",
                    strokeColor : "rgba(220,220,220,0.8)",
                    highlightFill: "rgba(220,220,220,0.75)",
                    highlightStroke: "rgba(220,220,220,1)",
                    data : this.props.data
                }
            ]
        };

        var options = {
            scaleBeginAtZero: true,     
            layout: {
                padding: {
                    left: 50,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            maintainAspectRatio: false,
            barShowStroke : true,
            title: {
                display: true,
                text: 'Custom Chart Title'
            }
        };

        return <BarChart data={barChartData} options={options}/>
    }
}

export default MyBarChart;
