import React, {Component} from 'react';
import '../App.css';
import AgeStats from './AgeStats';

class App extends Component {
    constructor() {
        super();
        this.state = {
            newDate: '',
            birthday: '1990-04-10',
        }
    }
    changeBirthday() {
        // console.log(this.state);
        this.setState({birthday: this.state.newDate})
    }


    render() {
        return (
            <div>
                <h1>Age Teller</h1>
                    <input
                    onChange={ event => this.setState({ newDate: event.target.value })}
                    type="date"
                    placeholder="Enter Age to Age Teller" />
                    {' '}
                    <button onClick={ () => this.changeBirthday() }>
                    Submit
                    </button>
                    <AgeStats date={this.state.birthday} />
            </div>
        )
    }
}



export default App;