import React, { useEffect, useRef } from "react";

interface IHangmanWord {
    word: string;
    guessedLetters: string[];
    gameState: string;
    setResetRef: React.Dispatch<React.SetStateAction<() => void>>;
}

export const HangmanWord: React.FC<IHangmanWord> = ({ word, guessedLetters, gameState, setResetRef }) => {
    const myRef = useRef<(HTMLSpanElement | null)[]>([]);

    const wordStyle: React.CSSProperties = {
        display: "flex",
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
    };

    const resetRef = (): void => {
        myRef.current.forEach((el) => {
            if (el) {
                el.style.visibility = "hidden";
                el.style.color = "black";
            }
        });
    }

    useEffect(() => {
        setResetRef(() => resetRef);
    }, [setResetRef]);

    useEffect(() => {
        if (gameState === "lose") {
            myRef.current.forEach((el) => {
                if (el && el.style.visibility === "hidden") {
                    el.style.visibility = "visible";
                    el.style.color = "red";
                }
            });
        }
    }, [gameState]);



    return (
        <div style={wordStyle}>
            {word.split("").map((item, index) => {
                const isVisible = guessedLetters.includes(item.toLowerCase());

                return (
                    <span key={index} style={{ borderBottom: ".1em solid black" }}>
                        <span
                            ref={(el) => (myRef.current[index] = el)}
                            style={{
                                color: "black",
                                visibility: isVisible ? "visible" : "hidden",
                            }}
                        >
                            {item}
                        </span>
                    </span>
                );
            })}
        </div>
    );
};
