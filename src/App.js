import React, {Component} from 'react';
import Node from './Components/node'
import './App.css'
import axios from 'axios'

let api_url = 'https://dessins-api.herokuapp.com/'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  getData = () => {
    axios.get(`${api_url}/dessins`)
      .then(json => {
        console.log(json.data);
        return json.data
      })
      .then(data => {
        this.setState({
          data: data
        })
      })
      .then(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }
  render() {
    console.log(this.state.data);
    return (
      <div>
        <h1>Dessins</h1>
        <Node
          data={this.state.data}
        />
      </div>
    )
  }
}

export default App;
