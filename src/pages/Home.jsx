import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { fetchWeather } from "../services/weatherApi";
import WeatherCard from "../components/WeatherCard";

const Home = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (city) => {
        setLoading(true);
        setError("");
        setWeatherData(null);

        const data = await fetchWeather(city);
        if(!data) {
            setError("City not found");
        } else {
            setWeatherData(data);
            localStorage.setItem("lastCity", data.name);
        }
        setLoading(false);        
    };

    useEffect(() => {
        const savedCity = localStorage.getItem("lastCity");
    
        if(savedCity) {
            setCity(savedCity);
            handleSearch(savedCity);
        }
    }, []);

    return (
        <div style={{maxWidth: "400px", margin: "0 auto" }}>
            <h1 style={{textAlign: "center", marginTop: "40px"}}>Weather App</h1>
            <SearchBar onSearch={handleSearch}/>
            {loading && <p>loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {weatherData && 
                (<div style={{display: "grid",  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px"}}>
                    {[weatherData].map((data, idx) => (<WeatherCard data={data} key={idx}/>))}
                </div>)
            }
        </div>
    )
};

export default Home;