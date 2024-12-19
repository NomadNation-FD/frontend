import { http } from "../../shared/services/api-service";
import { Comment } from "../model/comment";

export class ReviewApi {
    endpoint = "/reviews";

    async getReviewsByOfferId(offerId: string) {
        return http.post(`${this.endpoint}/by-offer-id`, { offerId: offerId });
    }

    async postReview(review: FormData) {
        return http.post(`${this.endpoint}/create`, review, { headers: { "Content-Type": "multipart/form-data" } });
    }

    async postComment(comment: Comment) {
        return http.post(`${this.endpoint}/add-comment`, comment);
    }
}