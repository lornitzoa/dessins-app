import React, { Component } from 'react'
// import Child from './child'

class Node extends Component {

  render() {

    return (
      <div>
        <h2 className='node' onClick={this.props.changeData}>{this.props.node}</h2>
        {this.props.children ?
          <div className='children'>
            {Object.keys(this.props.children).map((child, i) => {
              return <h2 className='node' key={i} onClick={this.props.changeData}>{this.props.children[child]}</h2>
            })}
          </div>
          :
          <div>
          </div>
        }

      </div>
    )
  }
}

export default Node
