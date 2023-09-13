
import Form from './components/Form';
import styles from './home.module.css'

const Home = ({list}) => {
    
    return ( 
        <div className={styles.home_container}>


            <Form/>
            
            {list && list.map((list)=>{
               return <div key={list.id} className={styles.list_card}>
                <div className="card_content">
                    <h1>{list.name}</h1>
                    <p>{list.desc}</p>
                    <p>{list.time}</p>
                </div>
                <button>Delete</button>
               </div>
            })}


        </div>
     );
}
 
export default Home;