import { DialogActionTrigger, DialogBody, DialogCloseTrigger, DialogContent, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button, Input, Textarea } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { usePostReview } from "../hooks/usePostReview";

export function DialogReview() {
    const { review, handleChange, handleSubmit, handleClearReview } = usePostReview();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(review.media?.[0] ? URL.createObjectURL(review.media[0] as File) : null);
    const [isOpen, setIsOpen] = useState(false);

    const handleMediaClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (files: FileList | null) => {
        if (files && files.length > 0) {
            const file = files[0];
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
            handleChange("media", Array.from(files));
        }
    };

    return (
        <DialogRoot open={isOpen} onOpenChange={() => setIsOpen(true)}>
            <DialogTrigger asChild>
                <Button className="font-roboto font-semibold text-white bg-gray-900 hover:bg-gray-500 p-4">
                    Publicar reseña
                </Button>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="font-roboto text-2xl font-bold">Nueva reseña</DialogTitle>
                </DialogHeader>

                <DialogBody>
                    <div className="flex flex-col gap-5 font-montserrat text-lg">
                        <label htmlFor="title" className="font-semibold">
                            Título
                        </label>
                        <Input
                            id="title"
                            variant="subtle"
                            className="bg-gray-200 p-4"
                            onChange={(e) => handleChange("title", e.target.value)}
                        />
                        <label htmlFor="post" className="font-semibold">
                            Reseña
                        </label>
                        <Textarea
                            id="post"
                            resize="none"
                            className="h-40 bg-gray-200 p-4"
                            variant="subtle"
                            onChange={(e) => handleChange("post", e.target.value)}
                        />
                        <label htmlFor="media" className="font-semibold">
                            Fotos ({review.media ? review.media.length : "0"})
                        </label>
                        <Input
                            ref={fileInputRef}
                            id="media"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            multiple={true}
                            onChange={(e) => handleFileChange(e.target.files)}
                        />
                        <div
                            className={`${review?.media && review.media.length > 0
                                ? "bg-cover opacity-75"
                                : "bg-none opacity-100"
                                }`
                                + " min-h-[300px] bg-cover flex justify-center items-center text-[#757575] rounded border cursor-pointer bg-gray-200"
                            }
                            style={{
                                backgroundImage: review?.media?.[0]
                                    ? `url(${previewUrl})`
                                    : "none",
                            }}
                            onClick={handleMediaClick}
                        >
                            <p>{review.media?.at(0) ? "" : "Haz clic aquí para agregar imágenes"}</p>
                        </div>
                    </div>
                </DialogBody>

                <DialogFooter>
                    <DialogActionTrigger asChild>
                        <Button
                            className="font-roboto font-semibold text-gray bg-white hover:bg-gray-50 p-4"
                            onClick={handleClearReview}>
                            Cerrar
                        </Button>
                    </DialogActionTrigger>
                    <Button
                        className="font-roboto font-semibold text-white bg-gray-900 hover:bg-gray-500 p-4"
                        onClick={() => { handleSubmit(); setIsOpen(false); }}>
                        Publicar
                    </Button>
                </DialogFooter>

                <DialogCloseTrigger />
            </DialogContent>
        </DialogRoot>
    );
}