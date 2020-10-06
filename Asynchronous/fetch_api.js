let url = "https://jsonplaceholder.typicode.com/todos/1";


// if there is a network error than only it will call catch 
// otherwise if there is something wrong in url than it will call then() and we get response 
// but inside response status we get 404

fetch(url).then((response) => {
    console.log(response);
    if (response.status === 200) { // here we are chaking the status
        return response.json();
    }
}).then((data) => {
    if (data) {
        console.log(data);
    }
}).catch((err) => {
    console.log("Rejected", err);
});


// ****************************************POST****************************************

// let url = "https://jsonplaceholder.typicode.com/posts";

// // fetch(url, {mehtod,body});
// fetch(url, {
//     method: "POST",
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1
//     })
// }).then(response => {
//     return response.json();
// }).then(data => {
//     console.log("Result", data);
// }).catch(err => {
//     console.log("Error", err);
// });