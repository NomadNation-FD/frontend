import { Author } from "./author";
import { Comment } from "./comment";

export class Review {
    id: string;
    author: Author | undefined;
    title: string;
    post: string;
    media: string[] | File[] | undefined;
    comments: Comment[] | undefined;
    createdAt: string;

    constructor({ id, author, title, post, media, comments, createdAt }: {
        id?: string;
        author?: Author;
        title?: string;
        post?: string;
        media?: string[] | File[];
        comments?: Comment[];
        createdAt?: string;
    }) {
        this.id = id || "";
        this.author = author;
        this.title = title || "";
        this.post = post || "";
        this.media = media;
        this.comments = comments;
        this.createdAt = createdAt || "";
    }
}