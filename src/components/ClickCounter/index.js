// Write your code here

// Write your code here

import './index.css'
import {components} from 'react'

class ClickCounter extends components {
  state = {count: 0}

  onIncrement = () => {
    this.setState(previousState => {
      return {count: previousState.count + 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="heading">
          The Button has been clicked <span>{count}</span> times
        </h1>
        <p className="paragraph">Click the button to increase the count</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}

export default ClickCounter
