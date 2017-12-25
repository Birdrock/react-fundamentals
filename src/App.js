import React from 'react';
import PropTypes from 'prop-types';

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       txt: 'this is the state txt',
//       cat: 0
//     }
//   }
//   update(e){
//     this.setState({txt: e.target.value})
//   }
//   render(){
//     return (
//       <div>
//         <input type="text" onChange={this.update.bind(this)}/>
//         <h1>{this.state.txt}</h1>
//         <Widget update={this.update.bind(this)} />
//       </div>
//     )
//   }
// }

// const Widget = (props) =>
//   <input type="text" onChange={props.update}/>

class App extends React.Component {
  render(){
    return <button>I <Heart /> React</button>
  }
}

const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}

export default App