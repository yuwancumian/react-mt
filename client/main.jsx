import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import App from '../imports/components/part.jsx';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('app'));
});