const React = require("react")

class Show extends React.Component {
  render() {
    const log = this.props.log
    return (
      <div>
          <a href="/logs">BACK TO ALL LOGS</a>
          <h1>{log.title} </h1><br/><br/>
          <p>{log.entry}</p> <br /><br/>
          {log.shipIsBroken ? "THE SHIP IS BROKEN" : "THE SHIP IS NOT BROKEN"}
      </div>
    )
  }
}

module.exports = Show