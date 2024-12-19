import { createContext } from "react";
import { Review } from "../model/review";

export type ReviewContextType = {
    reviews: Review[];
    setReviews: (reviews: Review[]) => void;
    getReviews: () => void;
}

export const ReviewContext = createContext<ReviewContextType>({
    reviews: [],
    setReviews: () => { },
    getReviews: () => { }
});