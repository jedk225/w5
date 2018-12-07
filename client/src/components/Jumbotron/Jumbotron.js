import React from "react";
import './Jumbotron.css';

const Jumbotron = (props) => {
  const jStyle = {
    backgroundImage: `url(${props.bgURL})`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`
  }
  return (
    <div style={jStyle} className="jumbotron">
      {props.children}
    </div>
  )
};

export default Jumbotron;
