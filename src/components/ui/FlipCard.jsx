import { useState } from "react";
import { cn } from "../../lib/utils";
import { RotateCcw } from "lucide-react";

export const FlipCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="relative w-full h-full perspective-1000 group/flip">
            <div
                className={cn(
                    "relative w-full h-full transition-all duration-700 transform-style-3d",
                    isFlipped ? "rotate-y-180" : ""
                )}
            >
                {/* Front Face */}
                <div className="absolute w-full h-full backface-hidden">
                    {frontContent}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsFlipped(true);
                        }}
                        className="absolute bottom-4 right-4 z-30 bg-black/50 hover:bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm border border-white/10 transition-colors flex items-center gap-1 opacity-0 group-hover/flip:opacity-100 transition-opacity"
                    >
                        <RotateCcw className="w-3 h-3" />
                        Zeugnisse
                    </button>
                </div>

                {/* Back Face */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-neutral-900 rounded-xl overflow-hidden border border-white/5">
                    {backContent}
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setIsFlipped(false);
                        }}
                        className="absolute bottom-4 right-4 z-30 bg-black/50 hover:bg-black/70 text-white text-xs px-2 py-1 rounded backdrop-blur-sm border border-white/10 transition-colors flex items-center gap-1"
                    >
                        <RotateCcw className="w-3 h-3" />
                        Zurück
                    </button>
                </div>
            </div>
        </div>
    );
};
