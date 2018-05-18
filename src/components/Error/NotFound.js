import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>Uups.. eksisid vist ära :(</h1>
    <Link to="/">Mine tagasi esilehele</Link>
  </div>
);

export default NotFound;
