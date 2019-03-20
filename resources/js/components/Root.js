import React, { Component } from 'react'

export default class Root extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}
if (document.getElementById('notice')) {
    ReactDOM.render(<Root />, document.getElementById('notice'));
}
