import React from "react";
import { clsx } from "clsx";

export const Btn = ({ children, className, variant = "primary" }) => {
    return (
        <button
            className={clsx(
                {
                    "text-black bg-red-500": variant == "primary",
                    "text-white bg-teal-500": variant == "secondary",
                },
                className
            )}
        >
            {children}
        </button>
    );
};
