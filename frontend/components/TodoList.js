import React from 'react'
import Todo from "./Todo"
export default class TodoList extends React.Component {
  constructor(props){
    super()
    console.log("TodoList props:", props);   
  }  
 
  render() {
    return (
      <div>
        {this.props.toDoData.map(item => (
          <Todo 
            item={item}
            toggleItem={this.props.toggleItem}
          />
        ))}
      </div>
    )
  }
}
