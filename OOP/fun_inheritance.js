function User(email, name) { //This is a Constructor function
    this.email = email;
    this.name = name;
}

User.prototype.displayDetails = function () {
    console.log("Email=> ", this.email, "\nName=> ", this.name);
}


function Admin(...args) {
    User.apply(this, args); //CALLING THE USER CONSTRUCTOR FUNCTION
    this.role = "super Admin";
}

// INHERITING THE METHOD OF USER CLASS
Admin.prototype = Object.create(User.prototype);

Admin.prototype.show = function () {
    console.log(this.email, ' is an Admin');
}


let userOne = new User("test@test.com", "Test");
let userTwo = new User('user@test.com', "userTwo");
let admin = new Admin("admin@test.com", "Admin");

userOne.displayDetails();
console.log(admin);
admin.show();