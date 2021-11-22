import {ADD_NAME, ADD_TODO} from '../actions/actionTypes';

const initialState={
    todos:[],
    name:""
};

const todoReducer =(state=initialState,action)=>{
    switch(action.type)
    {
        case ADD_TODO:return {...state,todos:state.todos.concat(action.todo)};
        case ADD_NAME:return {...state,name:state.name.concat(action.name)};
        default:return state;


    }
};

export default todoReducer;