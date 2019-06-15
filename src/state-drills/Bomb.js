import React, { Component } from 'react'

export class Bomb extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            if(this.state.count > 7){
                this.setState({count: 0})
            }

            let newCount = this.state.count + 1;
            this.setState({count: newCount})
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        let time = '';

        if(this.state.count >= 8){
            time = 'BOOM!!!'
        }
        else if(this.state.count%2 === 0){
            time = 'tick'
        }
        else{
            time = 'tock'
        }

        return (
            <div>
                <p>{time}</p>
            </div>
        )
    }
}

export default Bomb
