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
        return repo.html_url
    })
    console.log("Links", links)

    // elements = links.map(function (name) {
    //     return buildRepoElement(name)
    // })
    // console.log("Elements", elements)

    let linkList = document.createElement('a')
    linkList.classList.add('links')
    linkList.innerText = links
    for (let i = 0; i < linkList.length; i++)
        console.log("count", linkList[i])


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

// function buildRepoElement(name) {
//     //returns a new element for a repo, like a customer
//     let el = document.createElement('div')
//     el.innerText = name
//     return el
// }

