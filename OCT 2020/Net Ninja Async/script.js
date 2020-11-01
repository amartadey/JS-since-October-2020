const getTodos = (resource, callback) => {
return new Promise((resolve, reject)=>{
      const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request, request.responseText)
      const data = JSON.parse(request.responseText);
        resolve(data);
    } else if (request.readyState === 4) {
      // console.error("Could't fetch the data");
        reject('Error getting resource')
    }
  });
  // https://jsonplaceholder.typicode.com/todos/



  request.open("GET", resource, true);
  request.send();
});


};

getTodos('todos/luigi.json').then(data=>{
    console.log('Promise 1 resolved: ',data);
    return getTodos('todos/mario.json');
}).then((data)=>{
    console.log('Promise 2 resolved: ', data);
    return getTodos('todos/shaun.json');
}).then((data) =>{
    console.log('Promise 3 Resolved: ',data);
}).catch((err) =>{
    console.log('Promise rejected', err);
});

//Promise Example

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     //fetch something
//     // resolve('some data');
//     reject();
//   });
// };

// getSomething().then((data) =>{
//     console.log(data);
// }, (err) =>{
//     console.log(err);
// });


// getSomething().then((data) =>{
//     console.log(data);
// }).catch(err =>{
//     console.log("Error");
// });