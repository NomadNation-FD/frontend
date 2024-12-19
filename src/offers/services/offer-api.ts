import { http } from "../../shared/services/api-service";

export class OfferApi {
    endpoint = "/offers";

    async getOffers() {
        return http.get(`${this.endpoint}/all`);
    }

    async getOfferById(offerId: string) {
        return http.get(`${this.endpoint}/${offerId}`);
    }
}