import React, { Component } from 'react';
import axios from 'axios';

const CollectionContext = React.createContext();

export const CollectionConsumer = CollectionContext.Consumer;

class CollectionProvider extends Component {
  state = { collections: [] }

  getAllCollections = () => {
    axios.get(`/api/collections/`)
      .then( res => {
        this.setState({ collections: res.data })
      })
      .catch( err => console.log(err) )
  }

  addCollection = (collection) => {
    axios.post(`/api/collections`, { collection } )
      .then( res => {
        const { collections } = this.state
        this.setState({ collections: [ ...collections, res.data ]})
      })
      .catch( err => console.log(err) )
  }


  updateCollection = (id, collection) => {
    axios.put(`/api/collections/${id}`, { collection } )
    .then( res => {
      const collections = this.state.collections.map( c => {
        if (c.id === id) {
          return res.data
        }
        return c
      })
      this.setState({ collections: collections })
    })
    .catch( err => console.log(err) )
  }

  deleteCollection = (id) => {
    axios.delete(`/api/collections/${id}`)
      .then( res => {
        const { collections } = this.state
        this.setState({ collections: collections.filter( c => c.id !== id )})
      })
      .catch( err => console.log(err) )
  }

  render() {
    return(
      <CollectionContext.Provider value={{
        ...this.state,
        getAllCollections: this.getAllCollections,
        addCollection: this.addCollection,
        updateCollection: this.updateCollection,
        deleteCollection: this.deleteCollection,
      }}>
        { this.props.children }
      </CollectionContext.Provider>
    )
  }
}

export default CollectionProvider;