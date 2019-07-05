import React, {Component} from 'react'

class Parent extends Component {

  render() {
    return (
      <div>
        {this.props.parents === null ?
          <div></div>
          :
          <div className='parents'>
            {Object.keys(this.props.parents).map((parent, i) => {
              return <p className='parent' key={i} onClick={this.props.changeData}>{this.props.parents[parent]}</p>
            })}
          </div>
        }
      </div>
    )
  }
}

export default Parent
