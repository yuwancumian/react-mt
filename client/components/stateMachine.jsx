import React from 'react';

class StateMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opened: true }
    }
    handleClick(){
    	this.setState({
    		opened: !this.state.opened
    	})
    }
    render() {
    	var text = this.state.opened ? "打开" : "关闭" ;
    	return (
    		<div>
    			<button onClick = {this.handleClick.bind(this)}>切换</button>
    			<p>当前的状态是 {text}</p>
    		</div>
    	)
    }
}

export default StateMachine;
