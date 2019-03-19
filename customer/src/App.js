import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import MenuAll from './components/MenuAll'
import MenuNew from './components/MenuNew'
import axios from 'axios'

class App extends Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get(`/api/menus`)
    .then( res => {
      this.setState({menus: res.data, })
    })
    .catch( err => {
      console.log(err)
    })
  }

  addType = (name) =>{
    axios.post(`/api/menus`, {name})
      .then( res => {
        const { menus, } = this.state
        this.setState({menus: res.data})
      })
  }

  render() {
    return (
      <Container style={{ padding: "20px 0", }}>
        <MenuAll 
        menus={this.state.menus}
        />
        <br />
        <br />
        <br />
        <br />
        <MenuNew />
      </Container>
    );
  }
}

export default App;
