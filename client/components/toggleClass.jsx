import React from 'react';
import classnames from 'classnames';

class ToggleClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {active: false};
    }
    click() {
        this.setState({active: !this.state.active});
    }

    render() {
    	let classes = classnames('specialbutton', {active: this.state.active});
        return (
        	<div>
        		<button onClick={this.click.bind(this)}>切换样式</button>
        		<p className={classes}  > 这是一个文本信息 </p>
        	</div>
        )
    }
}

export default ToggleClass;
