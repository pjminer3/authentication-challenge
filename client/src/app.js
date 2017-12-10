import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Login from './login';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('/login');
  }

  render() {
    return (
      <h1>Hello World from React</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


