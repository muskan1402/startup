"use client";
import "@/globals.css";  // Adjust this based on where `globals.css` is actually located
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const SearchFormReset = () => {
    const router = useRouter(); // Use router for navigation

    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) form.reset();

        // Navigate to home page
        router.push("/");
    };

    return (
        <button 
            type="reset" 
            onClick={reset} 
            className="search-btn text-white"
            aria-label="Reset Search"
        >
            <X className="size-5" />
        </button>
    );
};

export default SearchFormReset;
