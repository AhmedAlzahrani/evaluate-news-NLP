import { displayResult } from "./displayResult";

const server = "http://localhost:8081/analysis";

export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('link').value
    console.log(formText);
    console.log("::: Form Submitted :::");
    fetchAnalysis(formText);
}

export function fetchAnalysis(link){

    const results = fetch(server, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({url:link})
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.polarity);
            displayResult(res);
        })
        return results;
}