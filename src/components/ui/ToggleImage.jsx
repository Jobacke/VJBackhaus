import { useState } from "react";
import { cn } from "../../lib/utils";

export const ToggleImage = ({ primaryImage, secondaryImage }) => {
    const [showSecondary, setShowSecondary] = useState(false);

    return (
        <div
            className="absolute inset-0 bg-neutral-900 cursor-pointer z-20"
            onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior if inside an anchor
                setShowSecondary(!showSecondary);
            }}
        >
            {/* Primary Image */}
            <div
                className={cn(
                    "absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out",
                    showSecondary ? "opacity-0 scale-95" : "opacity-50 group-hover:opacity-100 group-hover:scale-105"
                )}
                style={{ backgroundImage: `url(${primaryImage})` }}
            />

            {/* Secondary Image - reveals on click */}
            <div
                className={cn(
                    "absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out",
                    showSecondary ? "opacity-100 scale-105" : "opacity-0 scale-95"
                )}
                style={{ backgroundImage: `url(${secondaryImage})` }}
            />
        </div>
    );
};
