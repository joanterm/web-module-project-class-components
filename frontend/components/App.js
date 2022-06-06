import React from 'react'
import TodoList from "./TodoList"
import Form from "./Form"

const toDoData = [
  {
    id: 1,
    toDo: "Do dishes",
    isDone: false
  },
  {
    id: 2,
    toDo: "Take out trash",
    isDone: false
  }
]
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toDoData: toDoData
    }
  }

  toggleItem = (itemId) => {
    console.log("ItemId:", itemId)
    this.setState({
      toDoData: this.state.toDoData.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            isDone: !item.isDone
          }
        }
        return item
      })
    })
  }

  addChore = (e, choreName) => {
    e.preventDefault()
    console.log("chore added");
    const newChore = {
      toDo: choreName,
      id: Date.now(),
      isDone: false
    }
    this.setState({
      toDoData: [
        ...this.state.toDoData,
        newChore
      ]
    })
  }

  clearDoneChores = () => {
    this.setState({
      toDoData: this.state.toDoData.filter(item => !item.isDone)
    })
    this.setState({
      toDoData: []
    })
  }

  render() {
    return (
      <div>
        <TodoList 
          toDoData={this.state.toDoData}
          toggleItem={this.toggleItem}
        />
        <Form 
          addChore={this.addChore}
          clearDoneChores={this.clearDoneChores}
        />
      </div>
    )
  }
}
