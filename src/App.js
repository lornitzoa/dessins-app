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
          children: JSON.parse(data[0].children)
        })
      })
      .then(err => console.log(err))
  }

  changeData = (e) => {
    console.log(e.currentTarget.textContent)
    let data = this.state.data
    for(let i = 0; i < data.length; i++) {
      if(data[i].name === e.currentTarget.textContent) {
        console.log(data[i].name);
        this.setState({
          parents: JSON.parse(data[i].parents),
          node: data[i].name,
          children: JSON.parse(data[i].children)
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
