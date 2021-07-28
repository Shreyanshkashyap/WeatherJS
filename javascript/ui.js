class UI {
    insertInfo(info) {
        // set location
        const location = document.getElementById('w-location');
        location.innerText = info.name + ', ' + info.sys.country;
        
        // descrition
        const desc = document.getElementById('w-desc');
        desc.innerText = info.weather[0].description;

        // temp
        const temp = document.getElementById('w-string');
        temp.innerText = `${info.main.temp} C`;

        // icon
        const icon = document.getElementById('w-icon');
        icon.src = `http://openweathermap.org/img/w/${info.weather[0].icon}.png`;

        // Humidity
        const humidity = document.getElementById('w-humidity');
        humidity.innerText = `Relative Humidity: ${info.main.humidity}%`;

        // pressure
        const pressure = document.getElementById('w-pressure');
        pressure.innerText = `Pressure Level: ${info.main.pressure} pa`;

        // feels like
        const feelsLike = document.getElementById('w-feels-like');
        feelsLike.innerText = `Feels Like: ${info.main.feels_like} C`;

        // wind
        const wind = document.getElementById('w-wind');
        wind.innerText = `Wind Speed of: ${info.wind.speed} m/s`;

        // update btn select location to change location
        const btn = document.getElementById('w-select');
        btn.innerText = 'Change Location';
    }

    sendMessage(msg) { 
        // create alert div
        const alert = document.createElement('div');
        alert.innerHTML = `
        <div class="alert alert-danger d-flex align-items-center" role="alert">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div>${msg}</div>
        </div>
        `;

        // append in DOM
        const parent = document.getElementById('w-wrapper');
        const child = document.getElementById('w-location');
        parent.insertBefore(alert,child);

        // remove alert after 4 secs
        setTimeout(() => {
            const alert = document.querySelector('.alert');
            alert.remove();
        } ,4000);

    }
}