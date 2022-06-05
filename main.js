const myPortfolio = document.querySelector('#portfolio')
let myGitHub = "https://api.github.com/users/mnrolando3"
let myRepos = "https://api.github.com/users/mnrolando3/repos"
//variables defined for use in code below

fetch(myGitHub, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
})
    //this gets the API data for my profile on GitHub
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log("Data", data)
        buildProfile(data)
        //this calls the buildProfile function with the promised response
    })

fetch(myRepos, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
})
    //this gets the API data for my repos on GitHub
    .then(function (response) {
        return response.json()
    })
    .then(function (repos) {
        console.log("Repos", repos)
        buildRepoList(repos)
        //this calls the buildRepoList function with the promised reponse
    })

function buildProfile(profileData) {

    let headerElement = document.createElement('header')
    headerElement.classList.add('header')

    let bodyElement = document.createElement('body')
    bodyElement.classList.add('body')
    //this defines the two main sections of my profile page

    let imageElement = document.createElement('img')
    imageElement.src = profileData.avatar_url
    imageElement.alt = 'Picture of white woman with medium-length brown hair wearing a black top and seated in front of a bookcase.'
    imageElement.classList.add('img')
    headerElement.appendChild(imageElement)

    let nameElement = document.createElement('h1')
    nameElement.innerText = profileData.name
    headerElement.appendChild(nameElement)

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
//this function builds data from my profile

function buildRepoList(repoList) {
    links = repoList.map(function (repo) {
        return repo.html_url
    })
    console.log("Links", links)

    let linkElement = document.createElement('div')
    linkElement.classList.add('links')
    linkElement.innerText = links

    myPortfolio.append(linkElement)
}
//this function builds data from my repos
