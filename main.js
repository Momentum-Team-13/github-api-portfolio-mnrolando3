console.log("Test");

let myGitHub = "https://api.github.com/users/mnrolando3"

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
        console.log("Hello!", data)
        //show the returned data in the console
    })


const myPortfolio = document.querySelector('#portfolio')


    // const weatherList = document.querySelector('#weather-list')
    // //get the main box to put data in
    
    
    // for (let report of reports) {
    //     let reportElement = document.createElement('div')
    //     reportElement.classList.add('report')
    
    //     // let contentElement = document.createElement('article')
    //     // contentElement.classList.add('city', 'temp', 'weather')
    
    //     let imageElement = document.createElement('img')
    //     imageElement.src = report.image
    //     //update source of image
    //     imageElement.alt = 'image of weather'
    //     //alternate text if image does not show
    //     imageElement.classList.add("img")
    
    //     reportElement.appendChild(imageElement)
    //     //append child appends last?
    //     //appends image to content element
    //     // reportElement.appendChild(contentElement)
    //     //appends content, including image, to report element
    
    //     let cityElement = document.createElement('h1')
    //     cityElement.classList.add('city')
    //     cityElement.innerText = `City: ${report.city}`
    //     //puts specified text in cityElement element, pulling from report data
    //     reportElement.appendChild(cityElement)
    
    //     let tempElement = document.createElement('h2')
    //     tempElement.classList.add('temp')
    //     tempElement.innerText = `Temperature: ${report.temp}°F`
    //     reportElement.appendChild(tempElement)
    
    //     let weatherElement = document.createElement('h2')
    //     weatherElement.classList.add('weather')
    //     weatherElement.innerText = `Weather: ${report.weather}`
    //     reportElement.appendChild(weatherElement)
    
    //     weatherList.appendChild(reportElement)
    //     //appends report, including content and image, to weatherList, which is an existing element on the page because it's outside the for loop
    // }
    
    // // let newElement = document.createElement("p")
    // //     //made a new element that is a p tag
    // //     newElement.innerText = event.target.textContent;
    // //     //updated the inner text of that new element to be the contents of the clicked box
    // //     display.appendChild(newElement);
    // //     //append the new element containing the p tag to the currently empty display (this is how to get the calculator keys to appear in the result box)
    
    // //make js build this for each report
    // /* <body>
    //     <div id="weather-list">
    //         <div class="report">
    //             <img src="https://www.wunderground.com/static/i/c/v4/30.svg">
    //             <h1 class="city">City</h1>
    //             <h2 class="temp">Temp</h2>
    //             <h3 class="weather">Weather</h3>
    //         </div>
    //     </div>
    // </body> */