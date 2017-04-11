import React from "react";
import ReactDOM from "react-dom";
class SecondApp extends React.Component {
  constructor() {
    super();
    this.state = {val: 0}
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount(){
    console.log("component Will Mount");
    this.setState({m: 2})
  }
  componentDidMount(){
    console.log("component DID Mount");
    console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update,1000)
  }
  render(){
    console.log("rendering");
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }
  componentWillUnmount(){
    console.log("component will UN mount");
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  mount(){
    ReactDOM.render(<SecondApp />, document.getElementById("a"))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById("a"))
  }
  render(){
    return (
    <div>
      <button onClick={this.mount.bind(this)}>Mount</button>
      <button onClick={this.unmount.bind(this)}>UnMount</button>
      <div id="a"></div>
    </div>
  )
  }
}

export default Wrapper
