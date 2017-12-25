import React from 'react';
import './App.css'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component {
  render(){
    return (
      <Parent>
        <div className="childA"></div>
        
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render(){
    // let items = React.Children
      // .forEach(this.props.children, child => console.log(child.props.className))
    // let items = React.Children.toArray(this.props.children)
    // console.log(items)
    let items = React.Children.only(this.props.children)
    console.log(items)
    return null
  }
}

export default App