import React from 'react';
import { useState } from 'react';
import styles from './form.module.css'
import {useDispatch} from 'react-redux'
import {addToList} from '../app/Features/TodoList/todoListSlice'

const Form = () => {
    const [showForm, setShowForm]=useState(false)
    const [newTask, setNewTask]=useState('New Todo')
    const [update, setUpdate]=useState(false)
    
    
    const dispatch=useDispatch()

    const toggleForm=()=>{
        if (showForm === false) {
            setShowForm(true)
            setNewTask('Close')
        }else{
            setShowForm(false)
            setNewTask('New Task')
        }
    }

    

    const addTodo =(e)=>{
        e.preventDefault()
        let id=Math.floor(Math.random()*1000)
        const newTodo={title,desc,time,reminder,id}
     
        dispatch(addToList(newTodo))

        // reset fields
        setTitle('')
        setDesc('')
        setTime('')
 
    }

    // form datas
    const [title,setTitle]=useState()
    const [desc,setDesc]=useState()
    const [time,setTime]=useState()
    const [reminder, setReminder]=useState(false)

    return ( 
        <div className="form_containner">

            <div className={styles.button_containner}>
                <button style={showForm ===true?{
                        backgroundColor:'red'
                    }: {
                        backgroundColor:'green'
                    }} onClick={toggleForm} className={styles.toggleButton}>{newTask}
                </button>
            </div>
            


            {showForm && <form >
                <label htmlFor="title">Title</label>
                <input data-test='title' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />

                <label htmlFor="description">Description</label>
                <textarea data-test='desc' value={desc} onChange={(e)=>setDesc(e.target.value)} name="desc" id="desc" cols="30" rows="10"></textarea>

                <label htmlFor="time">Time</label>
                <input data-test='time' value={time} onChange={(e)=>setTime(e.target.value)} type="text" name="time" id="time" />
                
                <label htmlFor="reminder">Remind me</label>
                <input data-test='reminder' className={styles.checkbox} value={reminder} onChange={(e)=>setReminder(!reminder)} type="checkbox" name="checkbox" id="checkbox" />

                <button data-test='add-to-list' className={styles.button} onClick={addTodo}>Add to list</button>

            {update && <button className={styles.button} onClick={addTodo} style={{background:'#f5f5c8'}}>Update</button>}
            </form>}
            
        </div>
     );
}
 
export default React.memo(Form);