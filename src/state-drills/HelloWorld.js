import React, { Component } from 'react'

export class HelloWorld extends Component {
    constructor(props){
        super(props)
        this.state = {
            who: 'world'
        }
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}!</p>
                <button onClick={() => this.setState({who: 'world'})}>World</button>
                <button onClick={() => this.setState({who: 'react'})}>React</button>
                <button onClick={() => this.setState({who: 'friend'})}>Friend</button>
            </div>
        )
    }
}

export default HelloWorld
