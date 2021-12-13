"use strict";
// XMLHttp Request & fetch & Api & JSON : ----------------------------------
// with GET : --------------------------------------------------------------
const xhr = new XMLHttpRequest();
xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.onload = () => {
    console.log(JSON.parse(xhr.response));
    console.log(xhr.status);
}
xhr.send();

// with POST : -------------------------------------------------------------
const xhr2 = new XMLHttpRequest();
xhr2.open("POST","https://jsonplaceholder.typicode.com/users");
xhr2.onload = () => {
    console.log(JSON.parse(xhr2.response));
    console.log(xhr2.status);
}
const siavash = {
    name: "siavash",
    age: 23
}
xhr2.setRequestHeader("Content-type", "Application/JSON")
xhr2.send(JSON.stringify(siavash));

// with fetch : -------------------------------------------------------------
// fetch GET :
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
  
// fetch POST :
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));