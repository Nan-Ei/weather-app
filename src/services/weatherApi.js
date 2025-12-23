const API_KEY = "694319cda88246ea1e060ad7e7b8731f";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(
            `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );
        if(!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
        return null;
    }
}

