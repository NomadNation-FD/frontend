import Avatar from '@mui/material/Avatar';
import { Comment } from "../model/comment";

export function CommentItem({ comment }: { comment: Comment }) {
    return (
        <div className="flex gap-3 items-center">
            <Avatar src={comment.profilePicture} />
            <div className="flex flex-col">
                <h3 className="font-semibold text-2xl">{comment.name}</h3>
                <p className="font-roboto text-gray-600 text-xl">{comment.comment}</p>
            </div>
        </div>
    );
}
