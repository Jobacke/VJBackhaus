import { useRef, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";
import { createPortal } from "react-dom";

export const ImageModal = ({ src, alt, onClose }) => {
    const modalRef = useRef(null);

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    if (!src) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
                <X className="w-6 h-6" />
            </button>

            <div
                ref={modalRef}
                className="relative max-w-full max-h-full overflow-auto rounded-lg shadow-2xl animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={src}
                    alt={alt || "Certificate"}
                    className="max-h-[90vh] max-w-[90vw] object-contain"
                />
            </div>
        </div>,
        document.body
    );
};
