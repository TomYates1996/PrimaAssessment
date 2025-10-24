import { useState, useEffect } from "react";
import styles from './DarkModeToggle.module.css'

export default function DarkModeToggle() {

    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== "undefined") {
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false;
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <button className={`${styles.darkModeOuter} ${!darkMode ? styles.inactive : styles.active}`} onClick={() => setDarkMode(!darkMode)} aria-label={darkMode ? "Swap to light mode" : "Swap to dark mode"}>
            <span className={styles.icons}>
                <p>🌞</p>
                <p>🌑</p>
            </span>
        </button>
    );
}
