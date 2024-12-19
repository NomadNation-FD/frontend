import { Avatar } from "@/components/ui/avatar";
import { Comment } from "../model/comment";

export function CommentItem({ comment }: { comment: Comment }) {
    return (
        <div className="flex mt-2 gap-2">
            <Avatar src={comment.profilePicture} />
            <div className="flex flex-col">
                <h3 className="font-semibold">{comment.name}</h3>
                <p className="font-roboto text-gray-600">{comment.comment}</p>
            </div>
        </div>
    );
}
