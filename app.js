async function fetchData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'api key',
            'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
        }
    };
    const url = 'https://dad-jokes.p.rapidapi.com/random/joke';
    const responce = await fetch(url, options);
    var data = await responce.json();
    console.log(data.body[0].setup)
    console.log(data.body[0].punchline)

    const setupLine = data.body[0].setup;
    const punchline = data.body[0].punchline;
    document.getElementById("setup").innerHTML = setupLine;
    document.getElementById("punchline").innerHTML = punchline;
}
fetchData();
