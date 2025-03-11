import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import formatDate from '../resources/formatDate';
import useCities from '../contexts/customHooks/useCities';

function CityItem({ city }) {
    const { currentCity } = useCities();
    const { cityName, date, emoji, id, position } = city;

    return (
        <li>
            <Link
                to={`${id}?lat=${position.lat}&lng=${position.lng}`}
                className={`${styles.cityItem} ${
                    currentCity.id === id ? styles['cityItem--active'] : ''
                }`}
            >
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.name}>{cityName}</h3>
                <time className={styles.date}>{formatDate(date)}</time>
                <button className={styles.deleteBtn}>&times;</button>
            </Link>
        </li>
    );
}

export default CityItem;
