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
              return <p className='child' key={i} onClick={this.props.changeData}>{this.props.children[child]}</p>
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
