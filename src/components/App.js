import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Hogs from '../porkers_data'
import Filter from './Filter'

import HogList from './HogList'

class App extends Component {

  state = {
    hogs: Hogs,
    sort: "all",
    greased: "all"
  }

  hideHog = (hog_name) => {
    console.log('hello')
    this.setState({
      hogs: this.state.hogs.filter(hog => hog.name !== hog_name)
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.className]: e.target.value
    })
  }

  handleSubmit = () => {
    let newHogs = Hogs
    if (this.state.greased !== "all") {
      newHogs = newHogs.filter(hog => this.state.greased === "greased" ? hog.greased : !hog.greased)
    }
    if (this.state.sort === "name") {
      newHogs = newHogs.sort(function(a, b) {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1
        } else {
          return 0
        }
      });
    }
    if (this.state.sort === "weight") {
      newHogs = newHogs.sort(function(a, b) {
        return b.weight - a.weight;
      })
    }
    this.setState({
      hogs: newHogs
    })
  }

  render() {
    return (
      <div className="App">
          < Nav />
        <Filter handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <HogList hideHog={this.hideHog} hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
