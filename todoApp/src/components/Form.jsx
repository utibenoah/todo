import { useState } from 'react';
import styles from './form.module.css'
import InsertToStorage from '../store/InsertToStorage';
import UpdateFromStorage from '../store/GetItem';
import cart from '../store/cart';

const Form = () => {
    const [showForm, setShowForm]=useState(false)
    const [newTask, setNewTask]=useState('New Todo')
    
    
    

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
        const newTodo={title,desc,time,id}
        InsertToStorage(cart(newTodo))

        // reset fields
        setTitle('')
        setDesc('')
        setTime('')
 
    }

    // form datas
    const [title,setTitle]=useState()
    const [desc,setDesc]=useState()
    const [time,setTime]=useState()

    return ( 
        <div className="form_containner">
            <div className={styles.button_containner}>
                {showForm ===true?  <button style={{
                    backgroundColor:'red'
                }} onClick={toggleForm} className={styles.toggleButton}>{newTask}</button> :<button style={{
                    backgroundColor:'green'
                }} onClick={toggleForm} className={styles.toggleButton}>{newTask}</button> }
                
            </div>
            


            {showForm && <form >
                <label htmlFor="title">Title</label>
                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />

                <label htmlFor="description">Description</label>
                <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} name="" id="" cols="30" rows="10"></textarea>

                <label htmlFor="time">Time</label>
                <input value={time} onChange={(e)=>setTime(e.target.value)} type="text" name="" id="" />

                <button className={styles.button} onClick={addTodo}>Add to list</button>
            </form>}
            
        </div>
     );
}
 
export default Form;