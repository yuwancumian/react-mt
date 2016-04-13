import React from 'react';
import Top from './top.jsx';

class HelloWorld extends React.Component {
    render() {
        return (
            <div style={{ padding: '20px' ,color: '#ffffff'}}>
                <h1>Hello World</h1>
                <Top />
            </div>
        );
    }
}

export default HelloWorld;
