import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props){
        super(props);

        this.state ={
            age: this.props.age
        }
    }

    birthday = () => {
        this.setState({age: this.state.age + 1});
    }

    
    render() {
    return (
        <fieldset>
        <div>
            <h1>{this.props.lastName},{this.props.firstName}</h1>
            <h3>Age: {this.state.age}</h3> comes from line 7
            <h3>hair Color: {this.props.hairColor}</h3>
            <button onClick={ () => this.birthday()}>Happy birthday!</button>
        </div>
        </fieldset>
    );
    }
}

export default PersonCard;