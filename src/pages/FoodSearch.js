import React from 'react';
import { Route } from 'react-router-dom';

import Food from './Food';


export default (props) => {
  const matchUrlPlus = `${props.match.url}/:id`;
  return (
    <div>
      <Route path={matchUrlPlus} component={Food} />
    </div>
  );
}
