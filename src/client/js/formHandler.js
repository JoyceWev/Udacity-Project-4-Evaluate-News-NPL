export function handleSubmit(event) {
        let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
        const apiKey = '&APPID=5a0022d0a3d01f08d8587c491a1cc4c1';
        event.preventDefault()
        // check what text was put into the form field
        let formText = document.getElementById('name').value

        console.log("::: Form Submitted :::")
        fetch(baseURL+formText+apiKey)
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = res.city.name;
            console.log(res);
        });
}
