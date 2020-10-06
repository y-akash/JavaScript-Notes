const work = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Completed");
        } else {
            reject("Incomplete.");
        }
    });
};

console.log("1");

work().then((data) => {
    console.log("Promise 1 ", data);
    return work();
}).then((data) => {
    console.log("Promise 2 ", data);
    return work();
}).then((data) => {
    console.log("Promise 3 ", data);
    return work();
}).catch((err) => {
    console.log(err);
});

console.log("2");