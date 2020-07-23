import { displayResult } from "./displayResult";

const server = "http://localhost:3000/analysis";

export function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('link').value
    fetchAnalysis(formText);
}

export function fetchAnalysis(link){

    const results = fetch(server, {
            method: 'POST',
            mode:'cors',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({url:link})
        })
        .then(res => res.json())
        .then(res => {
            displayResult(res);
        })
        return results;
}