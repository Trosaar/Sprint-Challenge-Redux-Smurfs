import React from "react";
import { connect } from 'react-redux';
import { smurfMovesIn } from '../actions'

class AddSmurfForm extends React.Component {
  constructor(){
    super();
    this.state = {
      name:'',
      age:'',
      height:'',
    }
  }

  changeHandler = (event) => {
    event.preventDefault();
    this.setState ({
      [event.target.name]:event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault();
    const { name, age, height } = this.state;
    this.props.smurfMovesIn(name, age, height)
    this.setState ({
      name:'',
      age:'',
      height:'',
    })
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.changeHandler} required/> <br />
        <input type='text' name='age' placeholder='Age' value={this.state.age} onChange={this.changeHandler} required/> <br />
        <input type='text' name='height' placeholder='Height' value={this.state.height} onChange={this.changeHandler} required/> <br />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//
//   }
// }

const mapDispatchToProps = {
  smurfMovesIn: smurfMovesIn
}

export default connect(null, mapDispatchToProps)(AddSmurfForm);
