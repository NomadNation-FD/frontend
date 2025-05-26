import { Comment } from "../model/comment";
import { CommentItem } from "./CommentItem";
import { InputReview } from "./InputReview";

export function CommentList({ reviewId, comments }: { reviewId: string, comments: Comment[] }) {
    return (
        <div className="bg-gray-100 p-4 rounded-md flex flex-col gap-5">
            <h3 className="font-semibold text-3xl">Comentarios</h3>
            <div className="flex flex-col gap-5">
                {comments.length > 0 ? (
                    comments.map((comment, index) =>
                        <CommentItem key={index} comment={comment} />
                    )
                ) : (
                    <p className="font-roboto text-gray-600 text-xl">No hay comentarios aún.</p>
                )}
            </div>
            <InputReview reviewId={reviewId} />
        </div>
    );
}