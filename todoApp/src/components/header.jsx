import { useSelector } from 'react-redux';
import styles from './header.module.css'
const Header = () => {
    const list=useSelector((state)=>state.todoList.numberofTodo)
    const reminder=list.filter((el)=> el.reminder === true)
    


    return ( 
        <div>
            <div className={styles.header_container}>
                <h1 className={styles.header_title}>Todo List</h1>
                <nav className={styles.header_nav}>
                    <li><a href="#">Bell {reminder.length >=5? <b style={{color:'tomato'}}>+</b> : ''}
                    {reminder.length ? reminder.length:''}</a></li>
                </nav>
            </div>
        </div>
     );
}
 
export default Header;