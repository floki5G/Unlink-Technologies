import { useEffect, useRef, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";


export function ImgCursole({ images }: { images: string[] }) {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string>('');
    const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

    useEffect(() => {
        if (images && images[0]) {
            carouselItemsRef.current = carouselItemsRef.current.slice(
                0,
                images.length
            );

            setSelectedImageIndex(0);
            setSelectedImage(images[0]);
        }
    }, [images]);

    const handleSelectedImageChange = (newIdx: number) => {
        if (images && images.length > 0) {
            setSelectedImage(images[newIdx]);
            setSelectedImageIndex(newIdx);
            if (carouselItemsRef?.current[newIdx]) {
                carouselItemsRef?.current[newIdx]?.scrollIntoView({
                    inline: "center",
                    behavior: "smooth"
                });
            }
        }
    };

    const handleRightClick = () => {
        if (images && images.length > 0) {
            let newIdx = selectedImageIndex + 1;
            if (newIdx >= images.length) {
                newIdx = 0;
            }
            handleSelectedImageChange(newIdx);
        }
    };

    const handleLeftClick = () => {
        if (images && images.length > 0) {
            let newIdx = selectedImageIndex - 1;
            if (newIdx < 0) {
                newIdx = images.length - 1;
            }
            handleSelectedImageChange(newIdx);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <button
                    onClick={handleLeftClick}
                    className="text-2xl p-2 rounded-full  "
                >
                    <IoIosArrowDropleftCircle size={45} />
                </button>
                <div className="relative w-full h-96">
                    <img
                        src={selectedImage}
                        alt="rocket"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
                <button
                    onClick={handleRightClick}
                    className="text-2xl p-2 rounded-full "
                >
                    <IoIosArrowDropleftCircle size={45} style={{ transform: "rotate(180deg)" }} />
                </button>
            </div>
        </div>
    )
}