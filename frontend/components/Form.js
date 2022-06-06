import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super()
    console.log("Form props:", props);  
    this.state = {
      itemText: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      itemText: e.target.value
    })   
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit");
    this.props.addChore(e, this.state.itemText)
    this.setState({
      itemText: ""
    })
  }

  render() {
    return (
      <div>
        FORM Component
        <form action="#" onSubmit={this.handleSubmit}>
          <input 
            type="text"
            placeholder="Enter chore name"
            value={this.state.itemText}
            onChange={this.handleChange}
          />
          <button>Add</button>
          <button onClick={this.props.clearDoneChores}>CLEAR DONE CHORES</button>
        </form>
      </div>
    )
  }
}