class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }

    // METHOD
    displayDetails() {
        console.log("Email=> ", this.email, "\nName=> ", this.name);
    }
}

let userOne = new User("test@test.com", "Test");
let userTwo = new User('user@test.com', "userTwo");

userOne.displayDetails();
userTwo.displayDetails();