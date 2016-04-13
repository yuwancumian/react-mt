import React from 'react';

class Top extends React.Component {
	constructor(props) {
    	super(props)
    	this.state = { count:0 }
  	}
  	handleClick(){
  		console.log(this);
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

export default Top;