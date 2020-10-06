const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 1) {
        console.log("OPEN", xhr.readyState);
    } else if (xhr.readyState === 2) {
        console.log("SEND", xhr.readyState);
    }
});

xhr.onprogress = function () { // readyState will be 3
    console.log('LOADING', xhr.readyState);
};

xhr.onload = function () { // readyState will be 4
    if (xhr.status === 200) { //if there is an error than with the help of status we can find out.
        console.log('DONE', xhr.readyState, "\n", xhr.responseText);
    } else {
        console.log("Error");
    }
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
xhr.send();


// READYSTATE
// 0 UNSENT Client has been created.open() not called yet.
// 1 OPENED open() has been called.
// 2 HEADERS_RECEIVED send() has been called, and headers and status are available.
// 3 LOADING Downloading;
// responseText holds partial data.
// 4 DONE The operation is complete.




// ****************************************POST****************************************

// const xhr = new XMLHttpRequest();

// xhr.onload = function () { // readyState will be 4
//     if (xhr.status === 200) { //if there is an error than with the help of status we can find out.
//         console.log('DONE', xhr.readyState, "\n", xhr.responseText);
//     } else {
//         console.log("Error");
//     }
// };

// xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');

// xhr.setRequestHeader("Content-type", "application/json"); // (header,value)
// let temp = {
//     title: 'football',
//     body: 'bar',
//     userId: 1
// }

// xhr.send(JSON.stringify(temp));