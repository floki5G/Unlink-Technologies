import { useState, useRef, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export function ArticleCard({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Check if the contentRef is not null and the content height exceeds 160px
        if (contentRef.current && contentRef.current.scrollHeight > 318) {
            setShowButton(true); // Only show the button if content overflows
        }
    }, [children]);

    const handleViewMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className="relative max-w-[420px] px-6 pt-6 rounded-lg mb-4 w-full"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
            <div
                ref={contentRef}
                className={`overflow-hidden w-full transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[1000px]" : "h-[295px]"
                    }`}
                style={{
                    overflowY: isExpanded ? "auto" : "hidden",
                }}
            >
                <h2 className="text-lg text-white font-bold pb-2 ">{title}</h2>
                {children}
            </div>
            <div className=" h-10 flex items-center w-full">

                {/* Conditionally render the button only if the content exceeds the limit */}
                {showButton && (
                    <button
                        onClick={handleViewMore}
                        className="w-full text-white text-center py-2"
                    >
                        {isExpanded ? (
                            <div className="flex  text-lg font-bold items-center gap-2 transition-all duration-500 ease-in-out">
                                <IoIosArrowDropupCircle size={25} className="inline-block" />
                                <span > Less</span>
                            </div>
                        ) : (
                            <div className=" flex  text-lg font-bold items-center gap-2 transition-all duration-500 ease-in-out">
                                <IoIosArrowDropdownCircle size={25} className="inline-block" />
                                <span > More</span>
                            </div>
                        )}
                    </button>
                )}
            </div>


        </div >
    );
}
