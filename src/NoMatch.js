import React from 'react';
import { Link } from "react-router-dom";

const NoMatch = () => (
    <div>
      <h2>No Match Found for this Url.</h2>
      <ul><li><Link to="/">Back</Link></li></ul>
    </div>
  )

  export default NoMatch;