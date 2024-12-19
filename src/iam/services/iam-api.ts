import { http } from "@/shared/services/api-service";
import { User } from "../model/user";

export class IAMApi {
    endpoint = "/auth";

    async signIn(user: User) {
        return http.post(`${this.endpoint}/sign-in`, user);
    }

    async signUp(user: FormData) {
        return http.post(`${this.endpoint}/sign-up`, user, { headers: { "Content-Type": "multipart/form-data" } });
    }
}