import React from 'react';
import { ThingConsumer } from '../../providers/ThingProvider';
import ThingForm from './ThingForm';
import ThingList from './ThingList';
import { Form, Grid, Image, Container, Divider, Header, Button, } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Things = () => (
  <ThingConsumer>
    {
      value => (
        <>
          <h1>Things Page</h1>
          <ThingForm addThing={value.addThing} />
          <ThingList getAllThings={value.getAllThings} things={value.things} />
         
        </>
      )
    }
  </ThingConsumer>
) 

export default Things;