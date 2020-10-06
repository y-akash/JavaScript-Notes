function todos(callback) {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(undefined, xhr.responseText);
            } else {
                callback("Error Occured!", undefined);
            }
        }
    });

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    xhr.send();
}

console.log("1");
console.log("2");

todos((err, data) => {
    console.log("callback fired");
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log("3");
console.log("4");