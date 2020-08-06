const website = document.getElementById("root")
const logo = document.getElementById("logo")

const container = document.createElement("div")
container.setAttribute("class", "container")

website.appendChild(container)
async function getMovie() {
  const response = await fetch("https://ghibliapi.herokuapp.com/films")
  const data = await response.json()
  console.log(data)
  data.forEach(movie => {
    const card = document.createElement("div")
    card.setAttribute("class", "card")

    // Create an h1 and set the text content to the film's title
    const h1 = document.createElement("h1")
    h1.textContent = movie.title

    // Create a p and set the text content to the film's description
    const p = document.createElement("p")
    movie.description = movie.description.substring(0, 500) // Limit to 300 chars
    p.textContent = `${movie.description}...` // End with an ellipses

    const dr = document.createElement("p")
    dr.textContent = "Director: " + movie.director

    const ry = document.createElement("p")
    ry.textContent = "Release Date: " + movie.release_date

    // Append the cards to the container element
    container.appendChild(card)

    // Each card will contain an h1 and a p
    card.appendChild(h1)
    card.appendChild(p)
    card.appendChild(dr)
    card.appendChild(ry)
  })
}
getMovie()
