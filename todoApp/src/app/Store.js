import { configureStore } from "@reduxjs/toolkit";

import todoListSlice from "./Features/TodoList/todoListSlice";

const store=configureStore({
    
    reducer:{
        todoList:todoListSlice
    }
})

export default store