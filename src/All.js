import React from 'react';
import { Link, Route } from 'react-router-dom';
import Details from './Details';

const All = ({ match, users }) => {

  var linkTable = users.map((user) => {
    return (
      <tr key={user.email}>
        <td><img src={user.picture.thumbnail} alt="" /></td>
        <td>{user.first} {user.last} </td>
        <td><Link to={`${match.url}/${user.email}`}>
          Details
        </Link></td>
      </tr>
    )
  });
  
  return (
    <div>
      <div>
        <div>
          <h2>List of all Users</h2>

          <table key="tableList">
            <tbody>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Details</th>
              </tr>
              {linkTable}
            </tbody>
          </table>
          <br />

          <ul><li><Link to="/">Back</Link></li></ul>

        </div>
      </div>

      <Route path={`${match.url}/:userMail`}
        render={(props) => <Details users={users} {...props} />} />

    </div>
  )
}

export default All;