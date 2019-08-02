import './SimpleWatch.scss';
import React from 'react';
// import ReactDOM from 'react-dom';

class SimpleWatch extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      now: new Date()
    }
  }

  render () {
    let now = this.state.now
    
    let year = now.getFullYear()
    let month = now.getMonth()
    let date = now.getDate() 
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()

    return <div className="simple-watch">
      { year }-{ month > 9 ? month : '0' + month }-{ date > 9 ? date : '0' + date }
      &nbsp;
      { hour > 9 ? hour : '0' + hour }:{ minute > 9 ? minute : '0' + minute }:{ second > 9 ? second : '0' + second }
    </div>
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      now: new Date()
    })
  }
}

export default SimpleWatch