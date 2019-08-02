import React from 'react'
import logo from './logo.svg'
import './App.scss'

import SimpleWatch from './components/SimpleWatch/SimpleWatch.js'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      helloReactTexts: ['H','e','l','l','o',' ','R','e','a','c','t','!']
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{ this.state.helloReactTexts.join('') }</p>
          <button onClick={this.shakaShaka.bind(this, 'text')}>Shaka Shaka..</button>
        </header>
        <div className="abs-top-centered text-white">
          <SimpleWatch/>
        </div>
      </div>
    )
  }

  shakaShaka = (text, e) => {
    console.log(text, e)
    this.setState({
      helloReactTexts: this.shuffle(this.state.helloReactTexts)
    })
  }
  /**
   * Shuffles array in place. ES6 version
   * @param {Array} a items An array containing the items.
   */
  shuffle (a) {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }
}


export default App
