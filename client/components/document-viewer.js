const d3 = require('d3');
import $ from 'jquery';
import {select, selectAll} from 'd3-selection';
import React from 'react';

export default class DocumentViewer extends React.Component {
  componentDidMount() {
    console.log(d3.select('#box'));
    //select('body').selectAll('p').style('color', 'yellow')
  }
  render() {
    return (
      <div>
        <p>Hello world!</p>
      </div>
    );
  }
}
