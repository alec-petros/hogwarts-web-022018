import React from 'react';
import Hog from './Hog'

class HogList extends React.Component {

  render() {
    let hogs = this.props.hogs.map(hog => {
      return <Hog data={hog} key={hog.name} hideHog={this.props.hideHog} />
    })
    return (
      <div className="ui grid container">
        { hogs }
      </div>
    )
  }
}

export default HogList
