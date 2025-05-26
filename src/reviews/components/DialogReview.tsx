import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Input from "@mui/material/Input";
import { useRef, useState } from "react";
import { usePostReview } from "../hooks/usePostReview";

export function DialogReview({ open, handleClose }: { open: boolean, handleClose: (val: boolean) => void }) {
    const { review, handleChange, handleSubmit, handleClearReview } = usePostReview();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(review.media?.[0] ? URL.createObjectURL(review.media[0] as File) : null);

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
        <Dialog open={open} onClose={() => handleClose(false)}>
            <DialogTitle>
                <p className="font-roboto text-2xl font-bold">Nueva reseña</p>
            </DialogTitle>
            <DialogContent>
                <div className="flex flex-col gap-5 font-montserrat text-lg">
                    <label htmlFor="title" className="font-semibold">
                        Título
                    </label>
                    <Input
                        id="title"
                        type="text"
                        disableUnderline
                        className="bg-gray-200 px-4 py-2 rounded-sm"
                        onChange={(e) => handleChange("title", e.target.value)}
                    />
                    <label htmlFor="post" className="font-semibold">
                        Reseña
                    </label>
                    <textarea
                        id="post"
                        rows={3}
                        className="bg-gray-200 px-4 py-2 resize-none overflow-y-auto w-full"
                        onChange={(e) => handleChange("post", e.target.value)}
                    ></textarea>
                    <label htmlFor="media" className="font-semibold">
                        Fotos ({review.media ? review.media.length : "0"})
                    </label>
                    <input
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
                            + " min-h-75 bg-cover flex justify-center items-center text-gray-400 rounded-sm border cursor-pointer bg-gray-200"
                        }
                        style={{
                            backgroundImage: review?.media?.[0]
                                ? `url(${previewUrl})`
                                : "none",
                        }}
                        onClick={handleMediaClick}
                    >
                        <p className="text-center md:w-8/10">{review.media?.at(0) ? "" : "Haz clic aquí para agregar imágenes"}</p>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button
                    sx={{
                        backgroundColor: "#fff",
                        "&:hover": {
                            backgroundColor: "#bcc0c3"
                        },
                        fontFamily: "Roboto",
                        fontWeight: "600",
                        color: "#18181c",
                        textTransform: "none",
                        fontSize: "1rem",
                        letterSpacing: "0",
                    }}
                    onClick={() => { handleClearReview(); handleClose(false); }}
                >
                    Cerrar
                </Button>
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
                    onClick={() => { handleSubmit(); handleClose(false); }}>
                    Publicar
                </Button>
            </DialogActions>
        </Dialog>
    );
}

{/* <DialogContent>
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
                    + " min-h-[300px] bg-cover flex justify-center items-center text-[#757575] rounded-sm border cursor-pointer bg-gray-200"
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
</DialogContent> */}