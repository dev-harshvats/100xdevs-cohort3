import type { ReactElement } from "react";

type Variants = "primary" | "secondary";

export interface ButtonProps{
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-purple600 text-white",
    "secondary": "bg-purple300 text-purple600"
}

const defaultStyles = "rounded-md flex"

const sizeStyles = {
    "sm": "px-2 py-1",
    "md": "px-4 py-2",
    "lg": "px-6 py-3"
}

export const Button = (props: ButtonProps) => {
    return (
    <button className={`${variantStyles[props.variant]} ${sizeStyles[props.size]} ${defaultStyles} hover:bg-red-200 cursor-pointer`}>
        <div className="flex items-center">
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon ? <div className="pl-2">{props.endIcon}</div> : null}
        </div>
    </button>
    )
}

// <Button variant="primary" size="md" onClick={() => {}} text={"das"} startIcon={/* Some ReactElement here */} />