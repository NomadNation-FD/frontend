import { Button } from "@/components/ui/button";
import { Input } from "@chakra-ui/react";
import { useEffect } from "react";
import { usePostComment } from "../hooks/usePostComment";

export function InputReview({ reviewId }: { reviewId: string }) {
    const { comment, handleChange, handleSubmit } = usePostComment();

    useEffect(() => {
        handleChange("reviewId", reviewId);
    }, [reviewId]);

    return (
        <div className="flex flex-row justify-evenly">
            <Input
                className="w-2/3 px-3 bg-gray-200"
                placeholder="Agrega un comentario"
                value={comment.comment || ""}
                onChange={(e) => handleChange("comment", e.target.value)} />
            <Button
                className="w-[150px] font-roboto font-semibold text-white bg-gray-900 hover:bg-gray-500 p-4"
                onClick={handleSubmit}>
                Publicar
            </Button>
        </div>
    );
}