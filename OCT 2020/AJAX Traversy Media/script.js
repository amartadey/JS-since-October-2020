// document.querySelector('#button').addEventListener('click',loadText);


// function loadText(){
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('GET', 'sample.txt', true);

// 	xhr.onload = function(){
// 		if(this.status == 200){
// 			console.log(this.responseText)
// 		}
// 	}
// 	xhr.send();
// }

// document.querySelector('#button').addEventListener('click',loadText);


// function loadText(){
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('GET', 'sample.txt', true);

// 	xhr.onload = function(){
// 		if(this.status == 200){
// 			console.log(this.responseText)
// 		}
// 	}
// 	xhr.send();
// }


// ajax2.html
document.getElementById('button1').addEventListener('click', loadUser);
document.getElementById('button2').addEventListener('click', loadUsers);

function loadUser(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET','user.json',true);
	xhr.onload = function(){
		if(this.status == 200){
			var user = JSON.parse(this.responseText);
			var output = '';
			output += `
			<ul>
				<li>ID: ${user.id}</li>
				<li>Name: ${user.name}</li>
				<li>Email: ${user.email}</li>
			</ul>`;
			document.getElementById('user').innerHTML = output;
		}
	}
	xhr.send();
}

function loadUsers(){
	var xhr = new XMLHttpRequest();
	xhr.open('GET','user2.json',true);
	xhr.onload = function(){
		if(this.status == 200){
			var user = JSON.parse(this.responseText);
			var output = '';
			for (var i in user){
				output += `
				<ul>
					<li>ID: ${user[i].id}</li>
					<li>Name: ${user[i].name}</li>
					<li>Email: ${user[i].email}</li>
				</ul>`;
				
			}
			document.getElementById('users').innerHTML = output;
		}
	}
	xhr.send();
}



const APP_ID = '51530db5';
const APP_KEY = '59ddae211418509b4777d396fe07dc79';
const BASE_URL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_KEY}&to=10`; 
document.querySelector('#button').addEventListener('click',()=>{
	var requestXhr = new XMLHttpRequest();
	requestXhr.open('GET',BASE_URL,true);
	requestXhr.onload = function(){
		if(this.status == 200){
			var data = JSON.parse(this.responseText).hits;
			console.log(data);

		}
	}
	requestXhr.send();
});

// AJAX3.html

document.getElementById('buttongit').addEventListener('click', loadGitUsers);


function loadGitUsers(){
	console.log('test');
	// var xhrrr = new XMLHttpRequest();
	// xhrrr.open('GET','https://api.github.com/users',true);
	// xhrrr.onload = function(){
	// 	if(this.statue == 200){
	// 		console.log(this.responseText);
	// 	}
	// }
	// xhrrr.send();
}