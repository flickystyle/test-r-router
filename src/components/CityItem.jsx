import { Link } from 'react-router-dom';
import styles from './CityItem.module.css';
import formatDate from '../resources/formatDate';
import useCities from '../hooks/useCities';

function CityItem({ city }) {
    const { currentCity, deleteCity } = useCities();
    const { cityName, date, emoji, id, position } = city;

    function handleClick(e) {
        e.preventDefault();
        deleteCity(id);
    }
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
                <button className={styles.deleteBtn} onClick={handleClick}>
                    &times;
                </button>
            </Link>
        </li>
    );
}

export default CityItem;
