import React, { Component } from 'react';
import axios from 'axios';

const ThingContext = React.createContext();

export const ThingConsumer = ThingContext.Consumer;

class ThingProvider extends Component {
  state = { things: [] }

  getAllThings = () => {
    axios.get(`/api/things/`)
      .then( res => {
        this.setState({ things: res.data })
      })
      .catch( err => console.log(err) )
  }

  addThing = (thing) => {
    axios.post(`/api/things`, { thing } )
      .then( res => {
        const { things } = this.state
        this.setState({ things: [ ...things, res.data ]})
      })
      .catch( err => console.log(err) )
  }

  
  updateThing = (id, thing) => {
    axios.put(`/api/things/${id}`, { thing } )
    .then( res => {
      const things = this.state.things.map( t => {
        if (t.id === id) {
          return res.data
        }
        return t
      })
      this.setState({ things: things })
    })
    .catch( err => console.log(err) )
  }

  deleteThing = (id) => {
    axios.delete(`/api/things/${id}`)
      .then( res => {
        const { things } = this.state
        this.setState({ things: things.filter( t => t.id !== id )})
      })
      .catch( err => console.log(err) )
  }

  render() {
    return(
      <ThingContext.Provider value={{
        ...this.state,
        getAllThings: this.getAllThings,
        addThing: this.addCThing,
        updateThing: this.updateThing,
        deleteThing: this.deleteThing,
      }}>
        { this.props.children }
      </ThingContext.Provider>
    )
  }
}

export default ThingProvider;