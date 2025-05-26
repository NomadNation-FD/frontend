import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { useEffect } from "react";
import { usePostComment } from "../hooks/usePostComment";

export function InputReview({ reviewId }: { reviewId: string }) {
    const { comment, handleChange, handleSubmit } = usePostComment();

    useEffect(() => {
        handleChange("reviewId", reviewId);
    }, [reviewId]);

    return (
        <div className="flex flex-col justify-evenly gap-8 lg:flex-row">
            <Input
                type="text"
                disableUnderline
                className="px-3 bg-gray-200 rounded-xs flex-1"
                sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "400",
                    fontSize: "1.25rem",
                }}
                placeholder="Agrega un comentario"
                value={comment.comment || ""}
                onChange={(e) => handleChange("comment", e.target.value)} />
            <Button
                className="w-1/6"
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
                onClick={handleSubmit}>
                Publicar
            </Button>
        </div>
    );
}