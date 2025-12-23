import { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!city.trim()) {
            alert("Please enter a city name");
            return;
        }
        onSearch(city);
        setCity("");
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", maxWidth: "400px", margin: "0 auto" }}>
            <input type="text" placeholder="Enter City Name" value={city} onChange={(e) => setCity(e.target.value)} style={{flex: 1, padding: "10px", borderRadius: "6px 0 0 6px", border: "1px solid #ccc", fontSize: "16px" }}/>
            <button type="submit" style={{ padding: "8px 16px", backgroundColor: "#1D4ED8", borderRadius: "0 6px 6px 0", border: "none", color: "white", fontSize: "16px", cursor: "pointer" }}>Search</button>
        </form>
    )
}

export default SearchBar;