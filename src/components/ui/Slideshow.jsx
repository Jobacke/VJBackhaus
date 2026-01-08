import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

export const Slideshow = ({ images, interval = 4000 }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="absolute inset-0 bg-neutral-900">
            {images.map((img, i) => (
                <div
                    key={img}
                    className={cn(
                        "absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out",
                        i === index ? "opacity-50 group-hover:opacity-100 group-hover:scale-105 z-10" : "opacity-0 z-0"
                    )}
                    style={{ backgroundImage: `url(${img})` }}
                />
            ))}
        </div>
    );
};
