import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DarkModeToggle from "../components/DarkModeToggle/DarkModeToggle";

describe("DarkModeToggle", () => {
    it("toggles dark mode and adds 'dark' to root", () => {
        render(<DarkModeToggle />);
        const button = screen.getByRole("button");

        expect(document.documentElement.classList.contains("dark")).toBe(false);

        fireEvent.click(button);
        expect(document.documentElement.classList.contains("dark")).toBe(true);

        fireEvent.click(button);
        expect(document.documentElement.classList.contains("dark")).toBe(false);
    });
});
