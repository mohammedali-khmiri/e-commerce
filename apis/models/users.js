class User {
    constructor(id, fullName, email, password, status ) {
            this.id = id;
            this.fullName = fullName;
            this.email = email;
            this.password = password;
            this.status = status;
    }
}

module.exports = User;