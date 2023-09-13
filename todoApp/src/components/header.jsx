import styles from './header.module.css'
const Header = () => {


    return ( 
        <div>
            <div className={styles.header_container}>
                <h1 className={styles.header_title}>Todo List</h1>
                <nav className={styles.header_nav}>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Details">Details</a></li>
                </nav>
            </div>
        </div>
     );
}
 
export default Header;