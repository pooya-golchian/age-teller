import React, {Component} from 'react';

class AgeStats extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    timeSince(date) {
        let today = new Date().getTime();
        let otherDate = new Date(date).getTime();
        let diffDate = Math.abs(today - otherDate);
        let days = Math.floor( diffDate / ( 1000*3600*24 ));
        let years = Math.floor( days/365 );
        days -= years * 365;
        let months = Math.floor( days/31 );
        days -= months * 365;
        return `${years} Years, ${months} Months and ${days} Days`;
    }





    render() {
        return (
            <div>
                <h2>{this.props.date}</h2>
                <h3>{ this.timeSince(this.props.date)}! </h3>
            </div>
        )
    }
}



export default AgeStats;