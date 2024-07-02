import "./clock.js";

class User {
  constructor(name, role) {
    if (!name || typeof name !== "string") {
      alert("Invalid name");
      return;
    }
    if (role !== "admin" && role !== "user") {
      alert("Invalid role");
      return;
    }
    this.name = name;
    this.role = role;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log(`${this.name} has logged in.`);
  }

  logout() {
    console.log(`${this.name} has logged out.`);
  }

  changeName(newName) {
    if (!newName || typeof newName !== "string") {
      alert("Invalid name");
      return;
    }
    this.name = newName;
  }

  changePassword(newPassword) {
    if (!newPassword || typeof newPassword !== "string") {
      alert("Invalid password");
      return;
    }
    console.log(`${this.name} has changed their password.`);
  }
}

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.users = [];
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    } else {
      alert("Invalid user");
    }
  }

  removeUser(userName) {
    this.users = this.users.filter(
      (user) => user.getName() !== userName
    );
  }

  changeUserRole(userName, newRole) {
    const user = this.users.find(
      (user) => user.getName() === userName
    );
    if (user && (newRole === "admin" || newRole === "user")) {
      user.role = newRole;
    } else {
      alert("Invalid user or role");
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
  }
}

const admin = new Admin("Anna");
const user1 = new User("Bob", "user");
const user2 = new User("Ivan", "user");
// const user3 = new User("Mariia", "student");

admin.addUser(user1);
admin.addUser(user2);
// admin.addUser(user3);

console.log(admin.getAllUsers());

admin.changeUserRole("Bob", "admin");
console.log(user1.getRole());

// admin.changeUserRole("Pavlo", "admin");
// console.log(user2.getRole());

admin.removeUser("Ivan");
console.log(admin.getAllUsers());

admin.removeAllUsers();
console.log(admin.getAllUsers());
