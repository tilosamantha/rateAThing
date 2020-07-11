import React, { Component } from 'react';
import { CollectionConsumer } from '../../providers/CollectionProvider';
// import { Button } from 'semantic-ui-react';
import CollectionForm from './CollectionForm';
import { Form, Grid, Image, Container, Divider, Header, Button, } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class CollectionShow extends Component {
  state = { editing: false }

  toggleUpdate = () => this.setState({ editing: !this.state.editing })

  render() {
    const { name, description, user_id} = this.props.location.state
    const { editing } = this.state
    const { updateCollection, deleteCollection, history } = this.props
    return(
      <>
        <h1>{name}</h1>
        <h3>{description}</h3>
        { editing ?
            <CollectionForm 
              id={user_id}
              name={name}
              description={description}
              updateCollection={updateCollection}
              toggleUpdate={this.toggleUpdate}
              history={history}
            />
          :
          <Button onClick={this.toggleUpdate}>
            Edit
          </Button>
        }
        <Button onClick={() => deleteCollection(user_id, history)}>
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

const ConnectedCollectionShow = (props) => (
  <CollectionConsumer>
    { value => (
      <CollectionShow 
        {...props} 
        updateCollection={value.updateCollection} 
        deleteCollection={value.deleteCollection}
      />
    )}
  </CollectionConsumer>
)

export default ConnectedCollectionShow;