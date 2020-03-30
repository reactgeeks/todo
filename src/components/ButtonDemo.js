import React from 'react';
import Button from './Button';

class ButtonDemo extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "",
            backgroundColor: "",
            width: null,
            height: null,
            content: '',
            icon : 'FaGithub',
            iconPosition: 'right',
        }
    }

    loading = () => {
        this.setState({icon: '', content: 'Loading....'});
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
                            <label htmlFor = "height">Button height </label>
                            <input 
                                type = "text"
                                name = "height"
                                value = {this.state.height}
                                onChange = {(event) => this.setState({height: event.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor = "content">Button content </label>
                            <div>
                                <textarea
                                    rows = "5"
                                    cols = "50"
                                    name = "content"
                                    value = {this.state.content}
                                    onChange = {(event) => this.setState({content: event.target.value})}>
                                </textarea>
                            </div>
                        </div>
                        <div>
                            <label htmlFor = "icon">Button icon </label>
                            <input 
                                type = "text"
                                name = "icon"
                                value = {this.state.height}
                                onChange = {(event) => this.setState({icon: event.target.value})}
                            />
                        </div>
                        <div>
                            <label htmlFor = "icon_position">Icon position </label>
                            <select 
                                value={this.state.iconPosition} 
                                onChange = {(event) => this.setState({iconPosition: event.target.value})}>
                                <option value="left">Left </option>
                                <option value="top">Top </option>
                                <option selected value="right">Right </option>
                                <option value="bottom">Bottom </option>
                            </select>
                        </div>
                    </div>
                </form>

                <Button
                    buttonStyle = {buttonStyle}
                    icon = {this.state.icon}
                    iconPosition = {this.state.iconPosition}
                    loading = {this.loading}
                >
                    <div>{this.state.content}</div>
                </Button>
            </React.Fragment>
        );
    }
}

export default ButtonDemo;