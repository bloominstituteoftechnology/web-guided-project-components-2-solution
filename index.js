import axios from 'axios'


// TASK 1- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector('.entry')


// TASK 2- Build out a `dogCardMaker` component
// that takes an object { imageURL, breed }
// and creates a dog card like the following:

// <div class="dog-card">
//   <img src={imageURL} class="dog-image">
//   <h3>Breed: {breed}</h3>
// </div>
function dogCardMaker({ imageURL, breed }) {
  const dogCard = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')

  heading.textContent = `Breed: ${breed}`
  image.src = imageURL
  image.classList.add('dog-image')
  dogCard.classList.add('dog-card')
  dogCard.appendChild(image)
  dogCard.appendChild(heading)

  // add this functionality later
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected')
  })

  return dogCard
}


// TASK 3- Bring the Axios library into the project using one of two methods:
//    * Put a script tag inside index.html
//    * Install it with npm and import it into this file


// TASK 4- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console


// TASK 5- Wrap the fetching operation inside a function `getDogs`
// that takes a breed and a count (of dogs)
function getDogs(breed, count) {
  axios.get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
    .then(res => {
      res.data.message.forEach(imageURL => {
        const dogCard = dogCardMaker({ imageURL, breed })
        entryPoint.appendChild(dogCard)
      })
    })
    .catch(err => {
      console.log('Something went wrong', err)
    })
    .finally(() => {
      console.log('done')
    })
}


// TASK 6- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`
document.querySelector('button').addEventListener('click', evt => {
  getDogs('mastiff', 3)
  getDogs('appenzeller', 3)
})
