const getTodos = (resource, callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            // console.log(request, request.responseText)
            const data = JSON.parse(request.responseText)
            callback(undefined, data);
        } else if(request.readyState === 4){
            // console.error("Could't fetch the data");
            callback('Couldn\'t fetch Data', undefined);
        }
    })
    // https://jsonplaceholder.typicode.com/todos/

    request.open('GET',resource,true);
    request.send();
}



getTodos('todos/luigi.json',(error, data)=>{
    console.log(data);
    getTodos('todos/mario.json',(error, data)=>{
        console.log(data);
        getTodos('todos/shaun.json',(error, data)=>{
            console.log(data); 
        });
    });
});



