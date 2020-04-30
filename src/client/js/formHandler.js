export function handleSubmit(event) {
        event.preventDefault()
        let formURL = document.getElementById('name').value
        console.log("::: Data posted :::")
        // check what text was put into the form field
        console.log("::: Form Submitted :::")
        Client.postData('/sentiment', {URL: formURL})
}

