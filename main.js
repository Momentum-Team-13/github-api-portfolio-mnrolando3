const myPortfolio = document.querySelector('#portfolio')

let headerElement = document.createElement('header')
headerElement.classList.add('header')
let pageElement = document.createElement('div')
pageElement.classList.add('page')
//this defines the two main sections of my profile page

myPortfolio.appendChild(headerElement)
myPortfolio.appendChild(pageElement)

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
    infoElement.innerHTML = `Location: ${profileData.location}<br>GitHub URL: <a href=${profileData.html_url}>${profileData.html_url.slice(8)}</a><br>GitHub Username: ${profileData.login}<br>LinkedIn URL: <a href=${profileData.blog}>${profileData.blog.slice(12)}</a>`
    pageElement.appendChild(infoElement)

    let repoElement = document.createElement('div')
    repoElement.classList.add('repo')
    repoElement.innerText = `GitHub Repositories`
    pageElement.appendChild(repoElement)
}
//this function builds data from my profile

function buildRepoList(repoList) {
    links = repoList.map(function (repo) {
        return repo.html_url
    })
    console.log("Links", links)
    //this returns an array of my links

    for (let link of links) {
        console.log("url", link)

        let linkElement = document.createElement('div')
        linkElement.classList.add('links')
        linkElement.innerHTML = `<a href=${link}>${link.slice(30)}</a>`

        pageElement.appendChild(linkElement)
    }
}
//this function builds data from my repos
