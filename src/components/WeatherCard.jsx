const WeatherCard = ({data}) => {
    return (
        <div style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            padding: "20px",
            margin: "30px",
            width: "250px",
            textAlign: "center",
            cursor: "pointer",
            transition: "transform 0.2s"
        }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}            
        >
            <h2 style={{ marginBottom: "10px", fontSize: "20px", fontWeight: 600 }}>{data.name}</h2>
            <p style={{ fontSize: "32px", fontWeight: 500,  }}>Temperature: {data.main.temp}°C</p>
            <p style={{ margin: "5px 0", color: "#555"}}>Humidity: {data.main.humidity} %</p>
            <p style={{ margin: "5px 0", color: "#555"}}>Condition: {data.weather[0].main}</p>
        </div>
    )
}

export default WeatherCard;