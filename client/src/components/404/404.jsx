import Button from 'react-bootstrap/Button';
import { Link} from 'react-router-dom'
import styles from './404.module.css'


export default function PageNotFound() {
    return (
        <div className={styles.div}>
            <h1 className={styles.head}>404</h1>
            <h2>PAGE NOT FOUND</h2>

            <h6>The page you are looking for doesn't exist, or some other error occured</h6>

            <p className={styles.link}>Go back to  <Button variant="outline-warning" as={Link} to='/'>Home</Button></p>
        </div >
    )
}