import React from 'react';
import Button from './Button';

class ButtonDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "black",
            backgroundColor: "#c3c3c3",
            width: 50,
            height: 25,
            content: ''
        }
    }

    render() {
        let buttonStyle = {
            color: this.state.color,
            backgroundColor: this.state.backgroundColor,
            width: this.state.width,
            height: this.state.height
        }
        return(
            <React.Fragment>
                <form>
                    <div>
                        <div>
                            <label htmlFor = "color">Button text colour </label>
                            <input 
                                type = "text"
                                name = "color"
                                value = {this.state.color}
                                onChange = {(event) => this.setState({color: event.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor = "bgcolor">Button background colour </label>
                            <input 
                                type = "text"
                                name = "bgcolor"
                                value = {this.state.backgroundColor}
                                onChange = {(event) => this.setState({backgroundColor: event.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor = "width">Button width </label>
                            <input 
                                type = "text"
                                name = "width"
                                value = {this.state.width}
                                onChange = {(event) => this.setState({width: event.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor = "width">Button height </label>
                            <input 
                                type = "text"
                                name = "height"
                                value = {this.state.height}
                                onChange = {(event) => this.setState({height: event.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor = "width">Button content </label>
                            <div>
                                <textarea
                                    rows = "10"
                                    cols = "200"
                                    name = "content"
                                    value = {this.state.content}
                                    onChange = {(event) => this.setState({content: event.target.value})}>
                                </textarea>
                            </div>
                        </div>
                    </div>
                </form>
                <Button buttonStyle = {buttonStyle}>{this.state.content}</Button>
            </React.Fragment>
        );
    }
}

export default ButtonDemo;