import { useState } from 'react';
import { Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function InfoFooter() {
    const [isOpen, setIsOpen] = useState(false);

    // In a real build, this could be injected by the build process
    const lastUpdated = new Date().toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 left-4 z-40 p-2 rounded-full bg-neutral-900/80 text-neutral-400 hover:text-white border border-white/5 hover:border-white/20 transition-all backdrop-blur-sm"
                aria-label="Seitensinformationen"
            >
                <Info className="w-5 h-5" />
            </button>

            {/* Info Bar */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-0 left-0 right-0 z-30 bg-neutral-900 border-t border-white/10 p-3 shadow-2xl"
                    >
                        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 text-xs md:text-sm text-neutral-400">
                            <div className="flex items-center gap-4">
                                <span>Seite aktualisiert: {lastUpdated}</span>
                                <span className="hidden md:inline text-neutral-600">|</span>
                                <span className="hidden md:inline">GitHub Pages</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <a href="https://github.com/contact/report-abuse" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                    Missbrauch melden
                                </a>
                                <button onClick={() => setIsOpen(false)} className="md:hidden p-1 hover:text-white">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
