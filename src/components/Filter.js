import React from 'react';

class Filter extends React.Component {

  render() {
    return(
      <div>
        <label>Sort By:</label>
        <select className="sort" onChange={this.props.handleChange}>
          <option value="all">All</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
        <label> Greased: </label>
        <select className="greased" onChange={this.props.handleChange}>
          <option value="all">All</option>
          <option value="greased">Greased</option>
          <option value="ungreased">Ungreased</option>
        </select><br /><br />
        <div>
          <button onClick={this.props.handleSubmit}>Filter</button>
          <button onClick={this.props.handleSubmit}>Unhide All</button>
        </div><br />
      </div>
    )
  }
}

export default Filter
