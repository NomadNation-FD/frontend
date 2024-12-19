export class Author {
    userId: string;
    name: string;
    profilePicture: string;

    constructor(userId: string, name: string, profilePicture: string) {
        this.userId = userId;
        this.name = name;
        this.profilePicture = profilePicture;
    }
}