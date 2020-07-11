import React, { Component } from 'react';
import { Form, Grid, Image, Container, Divider, Header, Button, } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import { AuthConsumer } from '../../providers/AuthProvider';
import {Link} from 'react-router-dom';

class ThingForm extends React.Component {
  state = { name: "", description: "", image: ""};

  componentDidMount() {
    if (this.props.thing) {
      const{ name, description } = this.props.thing;
      this.setState({ name: name, description: description, image: Image });
    }
  }

  handleChange = (e) => {
    const {name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.props.thing) {
      const { id } = this.props.thing;
      this.props.updateThing(this.state, id, this.state);
      this.props.toggleUpdate()
    } else {
      this.props.addThing({...this.state, user_id:this.props.auth.user.id});
    }
    this.setState({ name: '', description: '', image: ''})
  };

  render() {
    const { name, description, image, file } = this.state;
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='name'
          value={name}
          onChange={this.handleChange}
          label='Thing Name'
          required
        />
        <Form.TextArea
          name='description'
          value={description}
          onChange={this.handleChange}
          label='description'
          required
        />
       <Grid.Column width={4}>
        <Grid.Column width={4}>
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}
        >
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}
              >
                <input {...getInputProps()} />
                {
                  isDragActive ?
                    <p>Drop files here...</p> :
                    <p>Try dropping some files here, or click to select files to upload.</p>
                }
              </div>
            )
          }}
        </Dropzone>
      </Grid.Column>
        </Grid.Column>
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

class ConnectedThing extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <ThingForm { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default ConnectedThing;