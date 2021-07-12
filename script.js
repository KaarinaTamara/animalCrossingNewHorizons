// display photos we get from acnh API to page

// create a namespace object
const app = {}
app.apiUrl = 'http://acnhapi.com/v1a/sea'

// init method
app.init = () => {
  // console.log('hello');
  app.getPhotos()
}

// function that makes the API call
app.getPhotos = () => {
  // construct new URL to add search params
  const url = new URL(app.apiUrl)
  // console.log(url);

  url.search = new URLSearchParams({
    id: 1
  })

  // make an API call to acnh API with fetch
  fetch(url)
    .then(res => res.json())
    .then(data => {

      console.log(data);
    });
}

// function that displays images
app.displayPhotos = () => {}

// call the init
app.init()