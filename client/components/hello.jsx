import React from 'react';
import ClickAdd from './clickAdd';
import StateMachine from './stateMachine';
import ToggleClass from './toggleClass';

class HelloWorld extends React.Component {
    render() {
        return (
            <div style={{ padding: '20px' ,color: '#ffffff'}}>
                <h1>Hello World!</h1>
                <ClickAdd />
                <StateMachine />
                <ToggleClass />
            </div>
        );
    }
}

export default HelloWorld;
