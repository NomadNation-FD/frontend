export class Comment {
    reviewId: string | undefined;
    userId: string | undefined;
    name: string | undefined;
    profilePicture: string | undefined;
    comment: string | undefined;
    createdAt: string | undefined;

    constructor({ reviewId, userId, name, profilePicture, comment, createdAt }: {
        reviewId?: string,
        userId?: string,
        name?: string,
        profilePicture?: string,
        comment?: string,
        createdAt?: string
    }
    ) {
        this.reviewId = reviewId;
        this.userId = userId;
        this.name = name;
        this.profilePicture = profilePicture;
        this.comment = comment;
        this.createdAt = createdAt;
    }
}