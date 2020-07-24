function displayResult(analysisResults) {

    const results = document.getElementById('results');
    results.textContent = '';
    const ul = document.createElement('ul');
    const keys = Object.keys(analysisResults);
    let resultsText = '';
    for(let key = 0 ; key < keys.length ; key++){
        if(keys[key] !== 'text' && keys.length !== 1){
            // display results coming from http://localhost:3000/analysis
            const listItem = document.createElement('li');
            const text = keys[key].replace('_',' ')
            resultsText = `${text}: ${analysisResults[keys[key]]}`;
            listItem.textContent = resultsText;
            ul.appendChild(listItem);
        }else {
            // display the error message from http://localhost:3000/analysis
            const listItem = document.createElement('li');
            resultsText = `${analysisResults[keys[key]]}`;
            listItem.textContent = resultsText;
            ul.appendChild(listItem);
        }
    }
    ul.style = "list-style: bullet";
    results.appendChild(ul);
}

export { displayResult }
