import { createContext, useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCity, setCurrentCity] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                setCities(data);
            } catch {
                alert('Something went wrong!');
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    async function getCity(id) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch {
            alert('Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    }

    async function createCity(newCity) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/`, {
                method: 'POST',
                body: JSON.stringify(newCity),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.json();
            console.log(data);
            setCities((cities) => [...cities, data]);
        } catch {
            alert('Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    }

    async function deleteCity(id, lat, lng) {
        try {
            setIsLoading(true);
            const res = await fetch(`${BASE_URL}/cities/${id}?lat=${lat}&lng=${lng}`, {
                method: 'DELETE',               
            });
            const data = await res.json();
            console.log(data);
            // setCities((cities) => [...cities, data]);
        } catch {
            alert('Something went wrong!');
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <CitiesContext.Provider
            value={{ cities, isLoading, currentCity, getCity, createCity, deleteCity }}
        >
            {children}
        </CitiesContext.Provider>
    );
}

export { CitiesProvider, CitiesContext };
