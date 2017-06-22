
// Client Side State of the store
// Kind of caching...
var places = [];

function getPlaces() {
  return new Promise(resolve => {
    // simple caching mechanism
    if (places.length) {
      resolve(places);
    }
    else {
      setTimeout(() => {
        places = generatePlaces();
        resolve(places);
      }, 500);
    }

  });
}

function getPlaceById(placeId) {
  return getPlaces().then(places => {
    const place = places.find(place => placeId === place.id);
    return place;
  });
}

function deletePlace(place) {
  console.log('Deleting the place', place)
  var idx = places.indexOf(place)
  places.splice(idx, 1);
}

// function getNext(book) {
//     // select next in a cyclic way
//     var idx = places.indexOf(book);
//     return (idx < places.length-1)?  
//           places[idx+1] : places[0];
// }

function savePlace(place) {
  var idx = places.findIndex(currPlace => currPlace.id === place.id);
  //if this is a new book
  if (idx === -1) places.push(place);
  //if this is edit of existing book
  else places.splice(idx, 1, place);
}

// var bookService = {
//   getBooks,
//   deleteBook,
//   getNext,
//   saveBook
// }



// Used to create local data with no AJAX
function generatePlaces() {
  var places = [];
  places.push(generatePlace('MisterBit',32.087893,34.803038,['work','study','fun']));
  places.push(generatePlace('Home',32.069557,34.777067,['home','family','fun']));
  places.push(generatePlace('Frizis',32.059934,34.774229,['bassa','stranger','south']));
  return places;
}

function generatePlace(name, lat, lng, tags) {
  return {
    id: places.length + 1,
    name,
    lat,
    lng,
    tags
  }
}









// function getProductsFromGenericAPI() {
//   const params = {
//     rows:       10,
//     id:        '{index}',
//     price:     '{number|1000}',
//     title: '{lorem|2}',
//     description: '{lorem|10}',
//     pretty: true
//   }

//   return $.getJSON('http://www.filltext.com', params);

// }

export default {
  getPlaces,
  deletePlace,
  // getNext,
  savePlace
}