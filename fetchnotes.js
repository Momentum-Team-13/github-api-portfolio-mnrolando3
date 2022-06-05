let myGitHub = "https://api.github.com/users/mnrolando3"
let myRepos = "https://api.github.com/users/mnrolando3/repos"
//variables defined for use in code below

fetch(myGitHub, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    //body: JSON.stringify({
    //  username: '',
    //  email: '',
    //}),
    //we don't need stuff in body right now, but would convert the values into JSON
})
    .then(function (response) {
        //the response is the promised data; data will take some time to retrieve and .then delays request (We are saying, "Go to URL and get information, then, when you have the information, we will use it.")
        return response.json()
        //when you get the response, give it back to me as JSON
    })
    .then(function (data) {
        //data is what the above promise returned
        console.log("Data", data)
        //show the returned data in the console
        buildProfile(data)
        //call function built below on the returned data
    })

fetch(myRepos, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
})
    .then(function (response) {
        return response.json()
    })
    .then(function (repos) {
        console.log("Repos", repos)
        buildRepoList(repos)
    })
//this gets the API data for my repos on GitHub



function buildProfile(profileData) {
    //create elements and add them to page
    //profileData is the data from the promise
    let headerElement = document.createElement('header')
    headerElement.classList.add('header')