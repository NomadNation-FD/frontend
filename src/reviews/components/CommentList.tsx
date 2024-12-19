import { Comment } from "../model/comment";
import { CommentItem } from "./CommentItem";
import { InputReview } from "./InputReview";

export function CommentList({ reviewId, comments }: { reviewId: string, comments: Comment[] }) {
    return (
        <div className="bg-gray-100 p-4 rounded-[5px] flex flex-col gap-4">
            <h3 className="font-semibold">Comentarios</h3>
            {
                comments.map((comment, index) =>
                    <CommentItem key={index} comment={comment} />
                )
            }
            <InputReview reviewId={reviewId} />
        </div>
    );
}