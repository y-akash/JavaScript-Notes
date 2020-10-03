class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}

let userOne = new User("test@test.com", "Test");
let userTwo = new User('user@test.com', "userTwo");

console.log(userOne);
console.log(userTwo);