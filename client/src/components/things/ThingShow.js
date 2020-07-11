import React, { Component } from 'react';
import { ThingConsumer } from '../../providers/ThingProvider';
// import { Button } from 'semantic-ui-react';
import CollectionForm from './CollectionForm';
import { Form, Grid, Image, Container, Divider, Header, Button, } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class ThingShow extends Component {
  state = { editing: false }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render() {
    const { name, description, image, user_id} = this.props.location.state
    const { editing } = this.state
    const { updateThing, deleteThing, history } = this.props
    return(
      <>
        <h1>{name}</h1>
        <h3>{description}</h3>
        { editing ?
            <ThingForm 
              id={user_id}
              name={name}
              image={image}
              description={description}
              updateThing={updateCollection}
              toggleUpdate={this.toggleUpdate}
              history={history}
            />
          :
          <Button onClick={this.toggleUpdate}>
            Edit
          </Button>
        }
        <Button onClick={() => deleteThing(user_id, history)}>
          Delete
        </Button>
        {/* <Menus dinerId={id} history={history} /> */}
            <div>
              <Link to='/things'>
              <button type="button" className="btn btn-info">Things</button>
              </Link>
            </div>
      </>
    )
  }
}

const ConnectedThingShow = (props) => (
  <ThingConsumer>
    { value => (
      <CollectionShow 
        {...props} 
        updateThing={value.updateThing} 
        deleteThing={value.deleteThing}
      />
    )}
  </ThingConsumer>
)

export default ConnectedThingShow;