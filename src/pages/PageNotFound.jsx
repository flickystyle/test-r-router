import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';

export default function PageNotFound() {
    return (
        <div className={styles.pageNotFound}>
            <Link to="/">
                <h1>Page not found 😢</h1>
            </Link>
        </div>
    );
}
