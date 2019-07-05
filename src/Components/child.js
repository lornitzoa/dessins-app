import React, {Component} from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className='node'>
        <h3 onClick={this.props.changeData}>{this.props.data.text}</h3>
      </div>
    )
  }
}

export default Child
