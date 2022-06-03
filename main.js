console.log("Test");

let myGitHub = "https://api.github.com/users/mnrolando3"
let myRepos = "https://api.github.com/users/mnrolando3/repos"

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


const myPortfolio = document.querySelector('#portfolio')

function buildProfile(profileData) {
    //create elements and add them to page
    //profileData is the data from the promise
    let headerElement = document.createElement('header')
    headerElement.classList.add('header')

    let imageElement = document.createElement('img')
    imageElement.src = profileData.avatar_url
    imageElement.alt = 'Picture of white woman with medium-length brown hair wearing a black top and seated in front of a bookcase.'
    imageElement.classList.add('img')
    headerElement.appendChild(imageElement)

    let nameElement = document.createElement('h1')
    nameElement.innerText = profileData.name
    headerElement.appendChild(nameElement)

    let bodyElement = document.createElement('body')
    bodyElement.classList.add('body')

    let infoElement = document.createElement('div')
    infoElement.classList.add('info')
    infoElement.innerText = `GitHub URL: ${profileData.html_url} \b\r GitHub Username: ${profileData.login} \b\r LinkedIn URL: ${profileData.blog} \b\r Contact: ${profileData.email}`
    bodyElement.appendChild(infoElement)

    let repoElement = document.createElement('div')
    repoElement.classList.add('repo')
    repoElement.innerText = `GitHub Repositories`
    bodyElement.appendChild(repoElement)

    myPortfolio.appendChild(headerElement)
    myPortfolio.appendChild(bodyElement)
}

function buildRepoList(repoList) {
    links = repoList.map(function (repo) {
        return repo.name
    })
    console.log("Links", links)

    elements = links.map(function (name) {
        return buildRepoElement(name)
    })
    console.log("Elements", elements)

    let linkList = document.createElement('div')
    linkList.classList.add('links')
    linkList.innerText = links

    myPortfolio.append(linkList)
    // elements = links.map(function (name) {
    //     return buildRepoElement(name)
    // })
    // console.log(elements)

    //     let linkList = document.createElement('div')
    //     linkList.classList.add('links')
    //     linkList.innerText = `${repoList.name}, ${repoList.html_url}, ${repoList.description}`

    //     myPortfolio.append(linkList)
}

function buildRepoElement(name) {
    //returns a new element for a repo, like a customer
    let el = document.createElement('div')
    el.innerText = name
    return el
}

