import "./style.css";

const key = "aacefa2894334e169fe202538230411";
const url = "http://api.weatherapi.com/v1";

const getCurrentWeather = async (city) => {
    try {
        const api_url = `${url}/current.json?key=${key}&q=${city}`;
        const response = await fetch(api_url, {
            mode: "cors",
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Something went wrong");
    }
};

const getForecast = async (city, numDays) => {
    try {
        const api_url = `${url}/forecast.json?key=${key}&q=${city}&days=${numDays}`;
        const response = await fetch(api_url, {
            mode: "cors",
        });
        const data = await response.json();
        return {
            location: data.location,
            current: data.current,
            forecast: data.forecast.forecastday,
        };
    } catch (error) {
        console.log("Something went wrong");
    }
};

getCurrentWeather("Cerritos");

const { location, current, forecast } = await getForecast("Cerritos", 7);
console.log(location);
console.log(current);
console.log(forecast);
