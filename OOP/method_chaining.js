class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }

    // METHOD
    displayDetails() {
        console.log("Email=> ", this.email, " Name=> ", this.name, " Score=> ", this.score);
        return this;
    }

    // METHOD
    updateScore() {
        this.score++;
        return this;
    }
}

let userOne = new User("test@test.com", "Test");
let userTwo = new User('user@test.com', "userTwo");

// METHOD CHAINING            
// displayDetails() method return instance of an object and updateScore() method also return instance of an object which helps to use METHOD CHAINING
userOne.displayDetails().updateScore().displayDetails().updateScore().displayDetails();