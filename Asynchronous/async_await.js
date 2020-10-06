// ASYNC function returns PROMISE

let url = "https://jsonplaceholder.typicode.com/todos/1";

let work = async () => {
    let response = await fetch(url);
    if (response.status != 200) {
        throw new Error("Cannot fetch the data.");
    }
    let data = await response.json();
    return data;
}

console.log(1);
console.log(2);

work().then(data => {
    console.log("Resolved", data);
}).catch(err => {
    console.log("Rejected", err);
});

console.log(3);
console.log(4);

// ASYNC function returns PROMISE
// let test = work();
// console.log(test);