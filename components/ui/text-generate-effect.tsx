"use client";
import { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
}: {
    words: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArray = words.split(" ");

    // Custom logic for Japanese text splitting if needed, but simple space/char split is safer for now.
    // Actually, Japanese doesn't use spaces much. I'll split by character if no spaces found?
    // Or just pass the raw text and let CSS handle it? 
    // Let's split by character for Japanese.
    let charArray = Array.from(words);

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
            },
            {
                duration: 2,
                delay: (i) => i * 0.05, // Slower reveal
            }
        );
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {charArray.map((char, idx) => {
                    return (
                        <motion.span
                            key={char + idx}
                            className="opacity-0"
                        >
                            {char}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={cn("font-serif", className)}>
            <div className="mt-4">
                <div className="leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
