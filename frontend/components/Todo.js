import React from 'react'

export default class Todo extends React.Component {
  constructor(props) {
    super()
    console.log("Todo props:", props);
  }
  render() {
    return (
      <div onClick={() => this.props.toggleItem(this.props.item.id)} className={`chore${this.props.item.isDone ? " done": ""}`}>
        <h1>{this.props.item.toDo}</h1>
      </div>
    )
  }
}
