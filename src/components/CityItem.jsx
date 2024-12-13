import styles from './CityItem.module.css';
import formatDate from '../resources/formatDate';

function CityItem({ city }) {
    const { cityName, date, emoji } = city;
    
    return (
        <li className={styles.cityItem}>
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.name}>{cityName}</h3>
            <time className={styles.date}>{formatDate(date)}</time>
            <button className={styles.deleteBtn}>&times;</button>
        </li>
    );
}

export default CityItem;
