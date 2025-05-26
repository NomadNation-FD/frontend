import Avatar from '@mui/material/Avatar';
import { Carousel } from "@/public/components/Carousel";
import { Review } from "../model/review";
import { CommentList } from "./CommentList";

const options = {
    loop: true
}

export function ReviewCard({ review }: { review: Review }) {
    return (
        <div className="flex flex-col gap-5 shadow-lg rounded-lg p-5">
            <div className="flex items-center gap-3">
                <Avatar src={review.author?.profilePicture} />
                <h3 className="font-semibold text-2xl">{review.author?.name}</h3>
            </div>
            <h3 className="font-medium text-4xl">{review.title}</h3>
            <p className="font-roboto text-xl text-gray-600">{review.post}</p>
            <Carousel img={review.media as string[]} options={options} className='rounded-sm shadow-lg' />
            <CommentList reviewId={review.id} comments={review.comments ?? []} />
        </div>
    );
}