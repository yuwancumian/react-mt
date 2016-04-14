import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Hello from './components/hello.jsx';

Meteor.startup(() => {
    render(<Hello />, document.getElementById('render-target'));
});
