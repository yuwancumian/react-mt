import React from 'react';

class ClickAdd extends React.Component {
	constructor(props) {
    	super(props)
    	this.state = { count:0 }
  	}
  	handleClick(){
  		this.setState({
  			count: this.state.count + 1
  		})
  	}
    render() {
        return (
        	<div>
        		<button onClick = {this.handleClick.bind(this)} > 点我 </button>
        		<h2>You have click {this.state.count} times</h2>
        	</div>
        )
    }

}

export default ClickAdd;