console.log("Test");

let myGitHub = "https://api.github.com/users/mnrolando3"

fetch(myGitHub, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    //body: JSON.stringify({
    //  username: '',
    //  email: '',
    //}),
    //we don't need stuff in body right now, but would convert the values into JSON
})
    .then(function(response) {
        //the response is the promised data; data will take some time to retrieve and .then delays request (We are saying, "Go to URL and get information, then, when you have the information, we will use it.")
        return response.json()
        //when you get the response, give it back to me as JSON
    })
    .then(function(data) {
        //data depends on what the above promise returned
        console.log("Hello!", data)
    })


