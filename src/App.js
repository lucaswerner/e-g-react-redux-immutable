import { connect } from 'react-redux';
import React, { Component } from 'react';
import Header from './header';
import { bindActionCreators } from 'redux';
import {
  increment,
  decrement
} from './actions/counter';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <main className='container'>
          <p>Counter: {this.props.counter.get('count')}</p>
          <button onClick={this.props.increment}>Increment</button>
          <button onClick={this.props.decrement}>Decrement</button>
        </main>
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
