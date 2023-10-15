import { ReactNode } from "react";

export default function Paragraph(props: {children: ReactNode}) {
    return (
        <p className="text-2xl leading-relaxed my-4">
            {props.children}
        </p>
    )
}