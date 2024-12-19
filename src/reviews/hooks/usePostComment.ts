import { useContext, useState } from 'react';
import { ReviewContext } from '../contexts/review-context';
import { Comment } from "../model/comment";
import { ReviewApi } from '../services/review-api';

const api = new ReviewApi();

export function usePostComment() {
    const { getReviews } = useContext(ReviewContext);
    const [comment, setComment] = useState<Comment>(new Comment({}));

    const handleChange = (name: keyof Comment, value: string) => {
        setComment((prevComment) => ({
            ...prevComment,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            await api.postComment(comment);
            setComment(new Comment({}));
            getReviews();
        } catch (err) {
            console.error(err);
        }
    }


    return { comment, handleChange, handleSubmit };
};
