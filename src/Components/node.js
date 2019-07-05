import React, { Component } from 'react'
import Child from './child'

class Node extends Component {
  constructor (props) {
    super(props)
    this.state = {
      parentNode: 'Data',
      childData1: {
        text: 'child data 1',

        children: {
          child1: {
            text: 'child1 data 1',
            children: {
              child1: {
                text: 'child1^1 data 1'
              },
              child2: {
                text: 'child1^1 data 2'
              }
            }
          },
          child2: {
            text: 'child2 data 1',
            children: {
              child1: {
                text: 'child1^1 data 1'
              },
              child2: {
                text: 'child1^1 data 2'
              }
            }
          }
        }
      },
      childData2: 'child data 2'

    }
  }

  changeData = (e) => {
    console.log(e);

  }


  render() {
    return (
      <div >
        <h2 className='node'>{this.state.parentNode}</h2>
        <div className='children'>
          <Child
            data={this.state.childData1}
            changeData={this.changeData}
          />
          <Child
            data={this.state.childData2}
            changeData={this.changeData}
          />
        </div>
      </div>
    )
  }
}

export default Node
