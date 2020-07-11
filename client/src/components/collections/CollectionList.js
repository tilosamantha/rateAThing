import React from 'react';
import { Link } from 'react-router-dom';

const CollectionList = ({ collections, getAllCollections }) => {

  getAllCollections()

  return(

  <>
    <h1>Collections:</h1>
    {
      collections.map( c => 
        <>
          <Link to={{
            pathname: `/collections/${c.id}`,
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


export default CollectionList;