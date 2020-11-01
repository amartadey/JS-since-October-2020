
const getTodos= async ()=>{
    const response = await fetch('todos/luigi.json');
    if(response.status !==200){
        throw new Error('Cannot fetch the Data');
    }
    const data = await response.json();
    return data;
};

getTodos()
    .then((data)=>{console.log(data);})
    .catch((err)=>{ console.log("Rejected: ",err.message)})
