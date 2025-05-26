import { useContext, useState } from "react";
import { ReviewContext } from "../contexts/review-context";
import { DialogReview } from "./DialogReview";
import { ReviewCard } from "./ReviewCard";
import Button from "@mui/material/Button";

export function ReviewList() {
    const { reviews } = useContext(ReviewContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col gap-5 w-9/10 xl:w-6/10 mx-auto">
            <div className="flex justify-between px-5">
                <h2 className="font-semibold text-3xl">Reseñas</h2>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#18181c",
                        "&:hover": {
                            backgroundColor: "#383842 "
                        },
                        fontFamily: "Roboto",
                        fontWeight: "700",
                        color: "#fff",
                        textTransform: "none",
                        fontSize: "1rem",
                        letterSpacing: "0"
                    }}
                    onClick={() => setIsOpen(!isOpen)}>
                    Publicar reseña
                </Button>
                <DialogReview open={isOpen} handleClose={setIsOpen} />
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