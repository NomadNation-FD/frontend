import { http } from "@/shared/services/api-service";

export class ProfileApi {
    endpoint = "/profiles";

    async getProfileInfo() {
        return http.get(`${this.endpoint}/profile-info`);
    }
}