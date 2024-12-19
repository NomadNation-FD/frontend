import { ReactNode, useEffect, useState } from 'react';
import { ReviewContext, ReviewContextType } from './review-context';
import { Review } from '../model/review';
import { ReviewApi } from '../services/review-api';
import { useParams } from 'react-router';

const api = new ReviewApi();

export function ReviewContextProvider({ children }: { children: ReactNode }) {
    const { offerId } = useParams();
    const [reviews, setReviews] = useState<Review[]>([]);

    const getReviews = () => {
        api.getReviewsByOfferId(offerId as string).then((res) => {
            setReviews(res.data);
        });
    }

    useEffect(() => {
        getReviews();
    }, []);

    const ReviewContextValue: ReviewContextType = {
        reviews,
        setReviews,
        getReviews
    }

    return (
        <ReviewContext.Provider value={ReviewContextValue}>
            {children}
        </ReviewContext.Provider>
    );
};