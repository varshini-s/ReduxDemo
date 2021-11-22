import { Component } from "react";
import { addTodo } from "../actions/todoActions";
import { addName } from "../actions/todoActions";
import './Main.css'
import store from "../store";
import My from "./My"

import { connect } from "react-redux";

class Main extends Component
{
    constructor()
    {
        super();

        this.state={
            todo:"",
            name:"",
        };
    }

    render()
{
    return(
        <div>

            <input 
                value={this.state.todo}
                onChange={(event)=>this.setState({todo:event.target.value})}
            />
           
            <button onClick={this.addTodo}>Add todo</button>

            <input
                value={this.state.name}
                onChange={(event)=>this.setState({name:event.target.value})}
            />
            <button onClick={this.addName}>Add Name</button>


            <p>Todo List</p>

            <My/>
            {this.props.todos.map((todo,index)=>(
                <p key ={index}>{todo}</p>
            ))}

            <p>Todo String</p>

                <p >{this.props.name}</p>
        </div>
    )
}

    addTodo=()=>{
        store.dispatch(addTodo(this.state.todo));
        
    }
    addName=()=>{
        store.dispatch(addName(this.state.name));

    }
}

const mapStateToProps =(store)=>{
    return{
        todos:store.todos,
        name:store.name,
    };
};

export default connect(mapStateToProps)(Main);