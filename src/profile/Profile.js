import React from 'react'
import PropTypes from "prop-types";

function Profile(props) {
  return (
    <div>
     <h1 className='name'>My Name is {props.fullName}</h1>
     <h1 className='bio'> I Study {props.profession} </h1>
     <h2> I wanna {props.bio} </h2>
     <p> <button onClick={()=>props.handlename(`${props.fullName}`)}><big>Subscribe</big></button> </p>
     {props.children}
    </div>
  )
}
Profile.defaultProps = {
  
};

Profile.propTypes = {
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
  onClick:PropTypes.func
};

export default Profile