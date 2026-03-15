import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  src: string | string[];
  alt: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ImageLightbox = ({ src, alt, open, onOpenChange }: Props) => {
  const images = Array.isArray(src) ? src : [src];
  const [index, setIndex] = useState(0);
  const multiPage = images.length > 1;

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  useEffect(() => {
    if (!open || !multiPage) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => Math.min(i + 1, images.length - 1));
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, multiPage, images.length]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[90vw] max-h-[90vh] p-2 bg-background border-border">
        <VisuallyHidden>
          <DialogTitle>{alt}</DialogTitle>
        </VisuallyHidden>
        <div className="relative flex items-center justify-center">
          {multiPage && index > 0 && (
            <button
              onClick={() => setIndex((i) => i - 1)}
              className="absolute left-2 z-10 p-1.5 rounded-full bg-background/80 border border-border text-foreground hover:bg-muted transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}
          <img
            src={images[index]}
            alt={alt}
            className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
          />
          {multiPage && index < images.length - 1 && (
            <button
              onClick={() => setIndex((i) => i + 1)}
              className="absolute right-2 z-10 p-1.5 rounded-full bg-background/80 border border-border text-foreground hover:bg-muted transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
        {multiPage && (
          <p className="text-center text-xs text-muted-foreground mt-1">
            {index + 1} / {images.length}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
