import { Avatar } from "@/components/ui/avatar";
import { Carousel } from "@/public/components/Carousel";
import { Review } from "../model/review";
import { CommentList } from "./CommentList";

const options = {
    loop: true
}

export function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="review__card flex flex-col gap-[15px] shadow-lg rounded-[5px] overflow-hidden p-[15px]">
            <div className="review__card-author flex items-center gap-[10px]">
                <Avatar src={review.author?.profilePicture} />
                <h3 className="review__author font-semibold text-[16px]">{review.author?.name}</h3>
            </div>
            <h3 className="review__title font-medium text-[24px]">{review.title}</h3>
            <p className="review__post font-roboto text-[16px] text-gray-600">{review.post}</p>
            <div className="review__card-image w-[850px] h-[430px] rounded-[10px] overflow-hidden shadow-lg self-center">
                <Carousel img={review.media as string[]} options={options} />
            </div>
            <CommentList reviewId={review.id} comments={review.comments ?? []} />
        </div>
    );
}