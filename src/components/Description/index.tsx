import { useState } from "react";
import { NewJoditEditor } from "../../features/NewJoditEditor";

export function Description() {

    const [content, setContent] = useState<string>('');
    console.log(content)
    return (
        <>
            <NewJoditEditor

                placeholder={content}
                setPlaceholder={setContent}
            />
        </>
    );
}
