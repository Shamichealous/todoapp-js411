import React, { Component } from 'react'


class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {
                    id: 0,
                    todo: "Walk fish",
            },
            {
                id: 1,
                todo: "Feed geckos",
            },
        ],
            text: "",
        };

        this.handleClick = this.handleClick.bind(this);
    
    

        // this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        // console.log("Mounted", this.state.todos);
    }

    componentDidUpdate(){
        // console.log("updated", this.state.text);
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value,
        });
    };

    handleClick(e) {
        this.setState({
            todos: [...this.state.todos, this.state.text],
            text: "",
        });
    }

    handleDelete = (id) => {
        const copy = [...this.state.todos];
        const index = this.state.todos.findIndex((item) => item.id === id)
        copy.splice(index, 1);
        this.setState({
            todos: copy,
        });
    };
  render() {
    // console.log("in render");
    return (
      <div>
        <ul>
            {
                this.state.todos.map((todo, index) => {
                    console.log(todo, todo.id);
                    return(
                        <li className='item'>
                            <h4>{todo.todo}</h4>
                            <button onClick={() => this.handleDelete(todo.id)}>x</button>
                        </li>
                    )
                })
            }
        </ul>
        <input type='text' onChange={this.handleChange} value = {this.state.text} />
         <button onClick={this.handleClick} className={this.props.color}>

            Add Todo!
            </button>
      </div>
    )
  }
}

export default Todo;