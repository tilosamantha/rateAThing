import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { AuthConsumer } from '../../providers/AuthProvider';

class CollectionForm extends Component {
  state = { name: '', description: '', }

  componentDidMount() {
    if (this.props.id) {
      const { name, description, } = this.props
      this.setState({ name, description })
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
      this.props.updateCollection(this.state, id, history)
      this.props.toggleUpdate()
    } else {
      this.props.addCollection({...this.state, user_id:this.props.auth.user.id})
    }
    this.setState({ name: '', description: '' })
  }

  render() {
    const { name, description } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Collection Name'
          required
        />
        <Form.TextArea
          name='description'
          value={description}
          onChange={this.handleChange}
          label='description'
          required
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

class ConnectedCollection extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <CollectionForm { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default ConnectedCollection;