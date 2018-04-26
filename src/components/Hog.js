import React from 'react';

const Hog = props => {
  return (
    <div className="ui four wide column">
      <div className="ui card">
        <div className="image">
          <img src={require(`../hog-imgs/${props.data.name.toLowerCase().split(" ").join("_")}.jpg`)}></img><br />
        </div>
        <div className="content">
          <a className="header">{props.data.name}</a>
          <div className="meta">
            <span>{props.data.greased ? "This is a greased pig" : "Bob, get the grease"}</span><br />
          </div>
          <div className="description">
            <span>Weight: {props.data.weight}</span><br />
            <span>Specialty: {props.data.specialty}</span><br />
            <span>Highest Medal: {props.data.medal}</span><br /><br />
          </div>
        </div>
        <button className="ui button" onClick={() => {props.hideHog(props.data.name)}}>Hide This Hog</button>
      </div>
    </div>
  )
}

export default Hog
