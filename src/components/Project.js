import React from 'react';
import { BsGithub } from "react-icons/bs";

export default function Project(props) {

  const projectStyle = {
    width: '35%',
  };

  return (
    <div className="container" style={projectStyle}>
      <div className="card" >
        <img
          className="card-img-top"
          src={props.image}
          alt={props.title}
        />
        <div className="card-body">
          {/* <p className="card-text">Description: {props.description}</p> */}
          <a href={props.deployed} className="btn btn-primary">
            <h5 className="card-title">{props.title}</h5>
          </a>
          <a href={props.Github} className="btn btn-primary">
            <BsGithub />
          </a>
        </div>
      </div>
    </div>
  );
}