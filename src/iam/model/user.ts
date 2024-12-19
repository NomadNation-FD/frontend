export class User {
    email: string;
    password: string;
    name: string;
    profilePicture: string | File;

    constructor(email: string, password: string, name: string, profilePicture: string | File) {
        this.email = email;
        this.password = password;
        this.name = name;
        this.profilePicture = profilePicture;
    }
}