import React, { Component } from 'react';
import ReactDOM, { Render } from 'react-dom';

class MyComponent extends Component {
    render() {
        return <h1> hello world! </h1>;
    }
}
render(<MyComponent />, document.getElementById('app'));
