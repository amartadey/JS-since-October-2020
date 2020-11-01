fetch('todos/luigi.json').then((response)=>{
    console.log('Response: ', response);
    return response.json();
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log('Rejected: ', err);
})