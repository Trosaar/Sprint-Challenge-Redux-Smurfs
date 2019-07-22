import React from "react";
import { connect } from "react-redux";
import { smurfMeeting } from '../actions'
import Smurf from './smurf'

class Village extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.smurfMeeting()
  }

  render() {
    return (
      <div>
        {this.props.smurfs.map( (smurf) => {
          return (
            <Smurf smurf={smurf} key={smurf.id}/>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  }
}

const mapDispatchToProps = {
  smurfMeeting: smurfMeeting,
}

export default connect(mapStateToProps, mapDispatchToProps)(Village);
