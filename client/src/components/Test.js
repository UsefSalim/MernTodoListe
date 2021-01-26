import { Component } from 'react'
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0,timer : null  };
  }
 
  componentDidMount() {
    this.timer = window.setInterval(this.tick, 1000)
    
  }
  componentWillUnmount() {
    this.timer  = window.clearInterval(this.timer)
  }
  tick = () => {
      this.setState({
        counter: this.state.counter+1
      })
  }
  // start = () => {
  //   this.setState({
  //     timer:window.setInterval(this.tick, 1000)
  //   })
  // }
  pause  ()  {
    window.clearInterval(this.state.timer)
    this.setState({
      timer:null
    })
  }
  render() {
    console.log(this.state);
    return ( 
      <center>
        <h1>Hello</h1>
        <div className="display">
          <button onClick={this.start}>Start</button>
          <button onClick={this.pause.bind(this)}> Pause</button>
          <p>{this.state.counter}</p>
          
        </div>
       
       </center>
     );
  }
}

export default Test;