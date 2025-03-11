import Spinner from './Spinner';
import CountryItem from './CountryItem';
import Message from './Message';
import styles from './CountryList.module.css';
import useCities from '../hooks/useCities';

function CountryList() {
    const { cities, isLoading } = useCities();
    if (isLoading) return <Spinner />;

    if (!cities.length)
        return (
            <Message message="Add your first city by clicking on a city on the map" />
        );

    const countries = cities.reduce((acc, { emoji, country, id }) => {
        if (!acc.map((el) => el.country).includes(country)) {
            return [...acc, { emoji, country, id }];
        } else return acc;
    }, []);

    return (
        <ul className={styles.countryList}>
            {countries.map((country) => (
                <CountryItem key={country.id} country={country} />
            ))}
        </ul>
    );
}

export default CountryList;
