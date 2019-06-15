import React, { Component } from 'react'

export class RouletteGun extends Component {
    constructor(props){
        console.log(props);
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }

    handleClick(){
        this.setState({spinningTheChamber: true})
        this.timeOut = setTimeout(() => {
            let randomNum = Math.floor(Math.random() * 8) + 1;
            this.setState({chamber: randomNum, spinningTheChamber: false})
        }, 2000);

    }

    componentWillUnmount(){
        clearTimeout(this.timeOut);
    }

    render() {
        let text = '';
        if(this.state.spinningTheChamber === true){
            text = `spinning the chamber and pulling the trigger! ...`
        }
        else if(this.state.chamber === this.props.bulletInChamber){
            text = `BANG!!!`
        }
        else {
            text = `you're safe!`
        }
        return (
            <div>
                <p>{text}</p>
                <button onClick={() => this.handleClick()}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun

RouletteGun.defaultProp = {
    bulletInChamber: 8
}