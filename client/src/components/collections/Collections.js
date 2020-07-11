import React from 'react';
import { CollectionConsumer } from '../../providers/CollectionProvider';
import CollectionForm from './CollectionForm';
import CollectionList from './CollectionList';
import { Form, Grid, Image, Container, Divider, Header, Button, } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Collections = () => (
  <CollectionConsumer>
    {
      value => (
        <>
          <h1>Collections Page</h1>
          <CollectionForm addCollection={value.addCollection} />
          <CollectionList getAllCollections={value.getAllCollections} collections={value.collections} />
         
        </>
      )
    }
  </CollectionConsumer>
) 

export default Collections;