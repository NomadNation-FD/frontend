import { useContext } from "react";
import { ReviewContext } from "../contexts/review-context";
import { DialogReview } from "./DialogReview";
import { ReviewCard } from "./ReviewCard";

export function ReviewList() {
    const { reviews } = useContext(ReviewContext);

    return (
        <div className="review flex flex-col mx-[25%] font-montserrat gap-[50px] mb-[25px]">
            <div className="review__header flex flex-wrap justify-between gap-[30px]">
                <h2 className="font-semibold text-[30px] mb-[-15px]">Reseñas</h2>
                <DialogReview />
            </div>
            {
                reviews &&
                reviews.map(review =>
                    <ReviewCard key={review.id} review={review} />
                )
            }
        </div>
    );
}