import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {
  increment,
  decrement
} from './actions/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Counter: {this.props.counter.get('count')}</p>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { counter: state.get('counter') }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  decrement
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
