import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Product from './pages/Product';
import Homepage from './pages/Homepage';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountryList from './components/CountryList';

const BASE_URL = 'http://localhost:8000/cities';

function App() {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const countries = cities.map(({ emoji, country, id }) => ({
        emoji,
        country,
        id,
    }));
    console.log(countries);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(BASE_URL);
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
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="login" element={<Login />} />
                    <Route path="app" element={<AppLayout />}>
                        <Route
                            index
                            element={
                                <CityList
                                    cities={cities}
                                    isLoading={isLoading}
                                />
                            }
                        />
                        <Route
                            path="cities"
                            element={
                                <CityList
                                    cities={cities}
                                    isLoading={isLoading}
                                />
                            }
                        />
                        <Route
                            path="countries"
                            element={
                                <CountryList
                                    cities={cities}
                                    isLoading={isLoading}
                                />
                            }
                        />
                        <Route path="form" element={<p>form</p>} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
