import { useAppDispatch, useAppSelector } from "../../redux/configure-store";
import { updateActiveRocketId } from "../../redux/slices/common";
import { ImgContainer } from "./modules/ImgContainer";

export function RocketsComponent() {
    const Rockets = useAppSelector((state) => state.common.rockets);
    const dispatch = useAppDispatch();

    return (
        <>
            <div
                style={{
                    background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%)",
                }}
                className=" flex flex-col lg:flex-row justify-center items-center  py-4 px-6 gap-6 rounded-2xl w-full lg:max-w-[80%] mx-auto"
            >
                {Rockets.filter((rocket) => rocket.country === "United States").map(
                    (rocket) => (
                        <div onClick={() => dispatch(updateActiveRocketId(rocket.id))}>
                            <h2 className="text-xl font-semibold text-white">
                                {rocket.name}
                            </h2>

                            <ImgContainer
                                url={rocket.flickr_images[0]}
                                isActive={!!rocket.success_rate_pct}
                            />
                        </div>
                    )
                )}
            </div>
        </>
    );
}
