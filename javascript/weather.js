class Weather {
    async getWeather(location) {
        
        const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${location}&units=metric`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "97f36c3810mshc358a4476b467b6p19fd37jsna942b9b82243",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        }); 

        const info = await response.json();

        if(info.cod>299 || info.cod<200) {
            throw info.message;
        } else {
            return info;
        }
    }
}