import { cn } from "@/app/lib/utils";

export default function TextArea(
    props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
    return (
        <textarea 
            {...props}
            className={cn(
                'w-full p-3 bg-background'
            )}
            />
        );
}