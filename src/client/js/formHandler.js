//Global variables
const API_KEY = `&appid=9a134735d7359ef641e698a70b098619`;
const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=`;


export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(`${API_URL}${formText}${API_KEY}`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        console.log(res.main.temp);
        document.getElementById('results').textContent = `Temp: ${res.main.temp}`;
    })
}