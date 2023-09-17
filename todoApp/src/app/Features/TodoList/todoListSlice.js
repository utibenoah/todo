import { createSlice } from "@reduxjs/toolkit";

const updateLocalStorage =(list)=>{
    localStorage.setItem('list',JSON.stringify(list))
}

const initialState={
    numberofTodo:[]
}

const todoListSlice=createSlice({
    name:'todoList',
    initialState:initialState,
    reducers:{
        addToList:(state, action)=>{
            state.numberofTodo=[...state.numberofTodo, action.payload]

            updateLocalStorage(state.numberofTodo)
        },

        getTodoFromLocalStorage:(state)=>{
            const list =localStorage.getItem('list')
            if (list) {
                state.numberofTodo=JSON.parse(list)
            }

        },

        removeTodoFromLocalStorage:(state, action)=>{
            
            const li=state.numberofTodo.find((li)=>li.id === action.payload)
           

            if (li) {

                const todo=state.numberofTodo.filter((i)=>i.id !== li.id)
                state.numberofTodo=todo
            }

            updateLocalStorage(state.numberofTodo)
        },

        toggleReminder:(state, action)=>{
            const li=state.numberofTodo.find((li)=>li.id === action.payload)
           

            if (li) {

                state.numberofTodo=state.numberofTodo.map((list)=>list.id === action.payload ? {...list, reminder:!list.reminder}:list)
            }

            updateLocalStorage(state.numberofTodo)
        }
    }
})

export default todoListSlice.reducer
export const {addToList, getTodoFromLocalStorage, removeTodoFromLocalStorage, toggleReminder}=todoListSlice.actions