import React, {Component} from 'react';
import Node from './Components/node'
import Parent from './Components/parent'
import './App.css'
import axios from 'axios'

let api_url = 'https://dessins-api.herokuapp.com'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      parents: null,
      node: null,
      children: null,
    }
  }

  // Children were not always put in the same order in the children column of the database, so I needed to sort this data for consistency in visual display
  sortChildren = (childrenArr) => {
    console.log(childrenArr);
    let sortedChildren = {};
    Object.keys(childrenArr).sort().forEach((key) => {
      sortedChildren[key] = childrenArr[key]
    })
    return sortedChildren
  }

  // get dessins data
  getData = () => {
    axios.get(`${api_url}/dessins`)
      .then(json => {
        return json.data
      })
      .then(data => {
        this.setState({
          data: data,
          parents: JSON.parse(data[0].parents),
          node: data[0].name,
          children: this.sortChildren(JSON.parse(data[0].children))
        })
      })
      .then(err => console.log(err))
  }

  // handles onClick of nodes
  changeData = (e) => {
    let data = this.state.data
    for(let i = 0; i < data.length; i++) {
      if(data[i].name === e.currentTarget.textContent) {
        this.setState({
          parents: JSON.parse(data[i].parents),
          node: data[i].name,
          children: this.sortChildren(JSON.parse(data[i].children))
        })
      }
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {

    return (
      <div>
        <h1>Dessins</h1>
        <Parent
          parents={this.state.parents}
          changeData={this.changeData}
        />
        <Node
          node={this.state.node}
          children={this.state.children}
          data={this.state.data}
          changeData={this.changeData}
        />
      </div>
    )
  }
}

export default App;
