// Imports at the top of the file!
// We never nest imports inside blocks of code!
import axios from 'axios'
import { breeds } from './breeds'


// 👉 TASK 1- Test out the endpoint `https://dog.ceo/api/breeds/image/random`
//    * With HTTPie (command-line tool)
//    * With Postman (tool with GUI)
//    * With Chrome


// 👉 TASK 2- Select the "entry point", the element
// inside of which we'll inject our dog cards 
const entryPoint = document.querySelector('.entry')


// 👉 TASK 3- `dogCardMaker` takes an object and returns a Dog Card.
// Use this function to build a Card, and append it to the entry point.
function dogCardMaker({ imageURL, breed }) {
  // instantiating the elements
  const dogCard = document.createElement('div')
  const image = document.createElement('img')
  const heading = document.createElement('h3')
  // setting class names, attributes and text
  heading.textContent = `Breed: ${breed}`
  image.src = imageURL
  image.classList.add('dog-image')
  dogCard.classList.add('dog-card')
  // creating the hierarchy
  dogCard.appendChild(image)
  dogCard.appendChild(heading)
  // adding some interactivity
  dogCard.addEventListener('click', () => {
    dogCard.classList.toggle('selected')
  })
  // never forget to return!
  return dogCard
}


// 👉 TASK 4- Bring the Axios library into the project using one of two methods:
//    * Traditional way: put another script tag inside index.html (`https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js`)
//    * Proyects with npm: install it with npm and import it into this file


// 👉 TASK 5- Fetch dogs from `https://dog.ceo/api/breed/{breed}/images/random/{number}`
//    * ON SUCCESS: use the data to create dogCards and append them to the entry point
//    * ON FAILURE: log the error to the console
//    * IN ANY CASE: log "done" to the console
//    (instructor will demo fetching a random dog from `https://dog.ceo/api/breeds/image/random`)


// 👉 TASK 6- Wrap the fetching operation inside a function `getDogs`
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


// 👉 TASK 7- Put a button in index.html to 'get dogs' and add a click
// event listener that executes `getDogs`
document.querySelector('button').addEventListener('click', evt => {
  getDogs('mastiff', 3)
  getDogs('appenzeller', 3)
})


// 👉 TASK 8- Loop over the breeds array, fetching a dog at each iteration
