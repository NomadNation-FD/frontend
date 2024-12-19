import { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { ReviewContext } from '../contexts/review-context';
import { Review } from '../model/review';
import { ReviewApi } from '../services/review-api';

const api = new ReviewApi();

export function usePostReview() {
    const { getReviews } = useContext(ReviewContext);
    const { offerId } = useParams();
    const [review, setReview] = useState<Review>(new Review({}));

    const handleChange = (name: keyof Review, value: string | File[]) => {
        setReview((prevReview) => ({
            ...prevReview,
            [name]: value,
        }));
    };

    const handleClearReview = () => {
        setReview(new Review({}));
    }

    const handleSubmit = async () => {
        try {
            const formData = new FormData();

            formData.append("offerId", offerId as string);
            formData.append("title", review.title);
            formData.append("post", review.post);

            review.media?.forEach((image) => {
                formData.append("images", image);
            });

            await api.postReview(formData);
            getReviews();
        } catch (err) {
            console.error(err);
        }
    }


    return { review, handleChange, handleSubmit, handleClearReview };
};
