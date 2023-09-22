
import Form from './components/Form';
import styles from './home.module.css'
import { useDispatch,useSelector } from 'react-redux';
import {getTodoFromLocalStorage,removeTodoFromLocalStorage,toggleReminder} from './app/Features/TodoList/todoListSlice'
import { useState } from 'react';

const Home = () => {
    const dispatch=useDispatch()
    const list=useSelector((state)=>state.todoList.numberofTodo)

    const deletTodo=(id)=>{
       dispatch(removeTodoFromLocalStorage(id))
    }

    const reverseReminder=(id)=>{
        dispatch(toggleReminder(id))
    }
    const showForm=(id)=>{
        console.log(id)
    }



    return ( 
        <div className={styles.home_container}>


            <Form  showForm={showForm}/>

            
            <p>No List item. </p>
            
            {list && list.map((list)=>{
               return <div key={list.id} className={styles.list_card}
               onDoubleClick={()=>reverseReminder(list.id)}  style={list.reminder?{borderLeft:'9px solid green'}:{}} >

                <div className="card_content"  >
                    <h1>{list.name}</h1>
                    <p>{list.desc}</p>
                    <p>{list.time}</p>
                </div>
                <button onClick={()=>deletTodo(list.id)}>Delete</button>
                
               </div>
            })}


        </div>
     );
}
 
export default Home;