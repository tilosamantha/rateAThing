import React, { Component } from 'react';
import axios from 'axios';

const ReviewContext = React.createContext();

export const ReviewConsumer = ReviewContext.Consumer;

class ReviewProvider extends Component {
  state = { reviews: [] }

  getAllReviews = () => {
    axios.get(`/api/reviews/`)
      .then( res => {
        this.setState({ reviews: res.data })
      })
      .catch( err => console.log(err) )
  }

  addReview = (review) => {
    axios.post(`/api/reviews`, { review } )
      .then( res => {
        const { reviews } = this.state
        this.setState({ reviews: [ ...reviews, res.data ]})
      })
      .catch( err => console.log(err) )
  }

  updateReview = (id, review) => {
    axios.put(`/api/reviews/${id}`, { review } )
    .then( res => {
      const reviews = this.state.reviews.map( r => {
        if (r.id === id) {
          return res.data
        }
        return r
      })
      this.setState({ reviews: reviews })
    })
    .catch( err => console.log(err) )
  }

  deleteReview = (id) => {
    axios.delete(`/api/reviews/${id}`)
      .then( res => {
        const { reviews } = this.state
        this.setState({ reviews: reviews.filter( r => r.id !== id )})
      })
      .catch( err => console.log(err) )
  }

  render() {
    return(
      <ReviewContext.Provider value={{
        ...this.state,
        getAllReviews: this.getAllReviews,
        addReview: this.addReview,
        updateReview: this.updateReview,
        deleteReview: this.deleteReview,
      }}>
        { this.props.children }
      </ReviewContext.Provider>
    )
  }
}

export default ReviewProvider;