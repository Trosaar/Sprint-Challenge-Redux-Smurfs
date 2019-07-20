import React from "react";
import { connect } from "react-redux";
import { smurfMeeting } from '../actions'

class Village extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.smurfMeeting()
  }

  render() {
    return (
      <div className="App">
      all the charaters
      </div>
    )
  }
}

const mapStateToProps = () => {
  return {

  }
}

const mapDispatchToProps = {
  smurfMeeting: smurfMeeting,
}

export default connect(mapStateToProps, mapDispatchToProps)(Village);
