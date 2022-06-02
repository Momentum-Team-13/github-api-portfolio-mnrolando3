let profile = document.querySelector(#profile)

function buildProfile(profileData) {
    names = profileData.map(function (repo) {
        return repo.name
        //returns name of every repo as an array
        //creates a transformed array with the name of every repo
    })
    console.log(names)
    elements = names.map(function (name) {
        return buildRepoElement(name)
    })

    console.log(elements)
    for (let element of elements) {
        profile.appendChild(element)
    }
}

//could combine elements and names:
//
// function buildProfile(profileData) {
//     elements = profileData.map(function (repo) {
//         buildRepoElement(repo.name)
//     })

//     console.log(elements)
//     for (let element of elements) {
//         profile.appendChild(element)
//     }
// }

//function buildProfile(profileData) {
//     profileData.map(function (repo) {
//         profile.appendChild(buildRepoElement(repo.name))
//     })
// }

function buildProfileLoop(profileData) {
    //equivalent to buildProfile but uses loops
    let elements []
    for (let repo of profileData){
        profile.appendChild(buildRepoElement(repo.name))
    }
}

function buildRepoElement(name) {
    //returns a new element for a repo, like a customer
    let el = document.createElement('p')
    el.innerText = name
    return el
}

