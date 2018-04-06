import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({match,data}) => {
    var user = data.find(user => user.email === match.params.userMail);
    var userData;
  
    if(user)
    userData = <div>
        <h2> Details for {user.first} {user.last} </h2>

        <table key="main">
            <tbody>
        <tr >
        <td>

          <table key="person_info"><tbody>
            <tr><td>Gender:</td><td> {user.gender} </td></tr>
            <tr><td>Firstname: </td><td> {user.first}</td></tr>
            <tr><td>Lastname: </td><td> {user.last} </td></tr>
            </tbody></table>
          <br/>
          <table key="address_info"><tbody>
            <tr><td>Street:</td><td> {user.street} </td></tr>
            <tr><td>City: </td><td> {user.city}</td></tr>
            <tr><td>Zipcode: </td><td> {user.zip} </td></tr>
            </tbody></table>
          <br/>
          <table key="contact_info"><tbody>
            <tr><td>Phone:</td><td> {user.phone} </td></tr>
            <tr><td>Cell: </td><td> {user.cell}</td></tr>
            <tr><td>Email: </td><td> {user.email} </td></tr>
            </tbody></table>

        </td>
        <td>
          <img src={user.picture.large} alt="" height="200%" width="200%" />
        </td>
        </tr>
        </tbody>
        </table>
        </div>
    else
    userData = <h2> Sorry. User doesnt exist </h2>;
  
    return (
      <div>
        <div>
           {userData}
           <br/>
           <Link to="/all">Back</Link>

        </div>
      </div>
    )    
  }

export default Details;
