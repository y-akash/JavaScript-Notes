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

class Admin extends User {

    show() {
        console.log(this.email, ' is an Admin');
    }
}


let userOne = new User("test@test.com", "Test");
let userTwo = new User('user@test.com', "userTwo");
let admin = new Admin("admin@test.com", "Admin");

userOne.displayDetails();
userTwo.displayDetails();
admin.show();