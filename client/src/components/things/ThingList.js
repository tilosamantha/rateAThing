import React from 'react';
import { Link } from 'react-router-dom';

const ThingList = ({ things, getAllThings }) => {

  getAllThings()

  return(

  <>
    <h1>Things:</h1>
    {
      things.map( c => 
        <>
          <Link to={{
            pathname: `/things/${c.id}`,
            state: {...c}
          }}>
            { c.name }
          </Link>
          <br />
        </>
      )
    }
  </>
  )
}


export default ThingList;