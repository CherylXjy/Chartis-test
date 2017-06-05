import '../css/Images.css';
import React, { Component } from 'react';

class Images extends Component {

    renderChart(){
        var data = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            series: [
                [5, 2, 4, 2, 1]
            ]
        };
        new Chartist.Line('.ct-chart', data);
    }

    render(){
        return(
            <div className="imageContainer">
                Images Component
                <button className="btn" onClick={this.renderChart}>This is a button</button>
                <div className="ct-chart ct-perfect-fourth custom-chartsize"></div>
            </div>
        )
    }
}
export default Images