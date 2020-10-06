const work = () => {
    return new Promise((resolve, reject) => {
        if (!true) {
            resolve("Completed");
        } else {
            reject("Incomplete.");
        }
    });
};

console.log("1");

work().then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});

console.log("2");