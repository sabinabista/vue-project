//array
//const card = ["demo1", "demo2", "demo3"];
//document.getElementById("demo").innerHTML = card;
//const cards = ["demo1", "demo2", "demo3" ,"demo4" ];
//Array at()
//let card= cards.at(2);
//document.getElementById("demo").innerHTML = card;
//Array join()
//const cards=["demo1","demo2", "demo3"];
//document.getElementById("demo").innerHTML =cards.join(" * ");
//Array pop()
//const cards=["demo1","demo2","demo3"];
//document.getElementById("demo1").innerHTML = cards;
//cards.pop();
//document.getElementById("demo2").innerHTML = cards;
//js obj
//let cards={
  //id: 1,
  //name: "cars",
  //color:"red",
  //model:"s50"

//};
//document.getElementById("demo1").innerHTML=cards.color;
//console.log(cards);


//getting resources

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  // listing all resources
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
  
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //method:put
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
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
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //method:patch
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //method:delete
  method: 'DELETE',
});
fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
  .then((response) => response.json())
  .then((json) => console.log(json));
  fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
  .then((response) => response.json())
  .then((json) => console.log(json));
 

  