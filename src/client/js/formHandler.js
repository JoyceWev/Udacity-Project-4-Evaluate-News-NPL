export function handleSubmit(event) {
        event.preventDefault()
        let formText = document.getElementById('name').value
        
        console.log("::: Data posted :::")
        // check what text was put into the form field
        console.log("::: Form Submitted :::")
        postData('/addText', {text: formText})
        fetch('http://localhost:8080/addText')
        .then(res => res.json())
        .then(function(res) {
            console.log("::: Data fetched :::")
            console.log(res);
            document.getElementById('text').innerHTML = "Text: " + res.text
            document.getElementById('polarity').innerHTML = "Polarity: " + res.polarity
            document.getElementById('subjectivity').innerHTML = "Subjectivity: " + res.subjectivity
            document.getElementById('polarity_confidence').innerHTML = "Polarity ccnfidence: " + (res.polarity_confidence*100) + "%"
            document.getElementById('subjectivity_confidence').innerHTML = "Polarity ccnfidence: " + (res.subjectivity_confidence*100) + "%"
        });
}

const getData = async (url)=>{
    const res = await fetch(url)
    try {
          const data = await res.json();
        return data;
    } catch(error) {
        console.log("error", error);
        // appropriately handle the error
    }
};

const postData = async ( url='', data={})=>{
    console.log(url);
    const res = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header      
        body: JSON.stringify({data}), 
    });
    console.log(data);
    console.log(res);
    try {
        const newData = await res.json();
        console.log(newData);
        console.log(res);
        return newData;
    } catch(error) {
        console.log("error", error);
      // appropriately handle the error
    }
};