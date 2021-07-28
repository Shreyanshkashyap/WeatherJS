// init weather
const weather = new Weather();
// init UI
const ui = new UI();

// add weather from LS on DOM load event
document.addEventListener('DOMContentLoaded',Store.display());

// on selecting location
const saveChanges = document.getElementById('w-change-btn');
saveChanges.addEventListener('click',(e) => {
    // get location
    const location = document.getElementById('state').value;
    // get json data
    weather.getWeather(location)                                                                        
           .then((data) => {
               if(data.count !== 0) {
                    // no errors 
                    const info = data.list[0];
                    ui.insertInfo(info);

                    // add to LS
                    Store.add(info);
               } else {
                   // display error 
                   ui.sendMessage('Please Enter a valid name');
               }
           })
           .catch((err) => {
               // GET error
               ui.sendMessage('Unexpected error occured :('); 
            });

    // set entry field to empty
    document.getElementById('state').value = ''; 
});
