function User(email, name) { //This is a Constructor function
    this.email = email;
    this.name = name;

    // this.login = function () {
    //     console.log(this.email, " has logged in.");
    // }
}

User.prototype.login = function () {
    console.log(this.email, " has logged in.");
}

let userOne = new User("test@test.com", "Test");
let userTwo = new User('user@test.com', "userTwo");

console.log(userOne);
console.log(userTwo);

userTwo.login();