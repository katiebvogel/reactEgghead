import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      a: ""
    }
  }
  update (e) {
    this.setState({a: e.target.value})
  }
  render() {
    return (
    <div>
      <h2>{this.state.a}</h2>
      <input type="text"
        onChange={this.update.bind(this)}/>
      <Button>I <Heart/> React</Button>
    </div>
    )
  }
}

const Button = (props) => <button>{props.children}</button>


class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

export default App
