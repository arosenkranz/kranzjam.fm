import React, { useEffect } from 'react';
import { useLazyQuery, useQuery } from '@apollo/react-hooks';
import { QUERY_SEARCH } from '../utils/gql/queries/general';

const Main = () => {
  const [search, { called, loading, data }] = useLazyQuery(QUERY_SEARCH);

  if (called && loading) return <p>Loading ...</p>;
  if (!called) {
    return <button onClick={() => search({ variables: { q: 'bob moses' } })}>Load greeting</button>;
  }
  console.log(data);
  return <h1>Hello {JSON.stringify(data, null, 2)}!</h1>;
};

export default Main;
