import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class DinerForm extends Component {
  state = { score: '', title: '', comment:'' }

  componentDidMount() {
    if (this.props.id) {
      const { score, title, comment } = this.props
      this.setState({ score, title, comment })
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      const { id, history } = this.props
      this.props.updateReview(id, this.state, history)
      this.props.toggleUpdate()
    } else {
      this.props.addReview(this.state)
    }
    this.setState({ name: '', address: '', hours: '' })
  }

  render() {
    const { name, address, hours } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Diner Name'
          required
        />
        <Form.Input
          name='address'
          value={address}
          onChange={this.handleChange}
          label='Address'
          required
        />
        <Form.Input
          name='hours'
          value={hours}
          onChange={this.handleChange}
          label='Hours'
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default ReviewForm;