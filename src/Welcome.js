import React from 'react';
import { Link } from "react-router-dom";

const Welcome = () => (
    <div>
      <h2>Welcome to your friends site</h2>
      <ul><li><Link to="/all">All Users</Link></li></ul>
    </div>
  )

export default Welcome;