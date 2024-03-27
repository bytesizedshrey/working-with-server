const Base_API = 'http://localhost:8080/api';
const JSON_API = 'http://localhost:8080/jsonApi';
const POST_API = 'http://localhost:8080/postApi';
const SLOW_API = 'http://localhost:8080/slowApi';

/*
//To make a request to the API
fetch(Base_API)
.then(res => res.text())
.then(console.log)
.catch(error => console.error('Oh no : ' + error));
*/

//Base api
async function main(){
    const url = new URL(BASE_API);
url.searchParams.set('firstName', 'James');
url.searchParams.set('lastName', 'Conner');

try{
    const response = await fetch(url);
    console.log(response.status);
    console.log(response.ok);
    const text = await response.text();
    console.log(text);
} catch(error){
    console.error('Oh no : ' + error);
}

}

//JSON 
async function main(){
try{
    const response = await fetch(JSON_API);
    const obj = await response.json();
    console.log(obj);
} catch(error){
    console.error('Oh no : ' + error);
}

}


//working with form
const form = document.querySelector('form');
form.addEventListener('submit',onsubmit);

//Post Api
async function onSubmit(event){
    const options = {
        method: 'Post',
        body: new FormData(form)
    };


    try{
        const response = await fetch(POST_API,options);
        const text = await response.text();
        console.log(text);
    } catch(error){
        console.error('Oh no : ' + error);
    }
    }

main();