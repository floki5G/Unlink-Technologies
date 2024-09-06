import { BoldHeading } from "../../index/modules/BoldHeading";
import { LightHeading } from "../../index/modules/LightHeading";

export function ImgContainer({
    url,
    isActive
}: {
    url: string,
    isActive: boolean
}) {
    const Status = ({ isActive }: { isActive: boolean }) => {
        return (
            <div
                style={{
                    background: isActive
                        ? "rgba(29, 143, 36, 0.4)"
                        : "rgba(255, 179, 3, 0.4)",
                }}
                className="flex flex-col justify-center items-start absolute bottom-2  left-2 py-2 px-2 rounded-md"
            >
                <LightHeading title={"STATUS"} />
                <BoldHeading title={isActive ? "Active" : "In Development"} />
            </div>
        );
    };

    return (
        <div className="   relative">
            {/* <img
                src={url}
                alt="rocket"
                className="  h-96 rounded-xl drop-shadow-lg"
            /> */}

            <div
                className="relative h-96 w-60 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-600 shadow-blue-gray-500/50">
                {/* <img src={`${url}`} alt="card image" className="w-full h-full object-cover" /> */}
                <img src={`${url}`} alt=""
                    className="w-full h-full object-cover"
                />


            </div>
            <Status isActive={isActive} />
        </div>
    );
}