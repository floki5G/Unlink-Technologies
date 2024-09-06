import { RxCross2 } from "react-icons/rx";
import React, { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/configure-store";
import { updateActiveRocketId } from "../redux/slices/common";
import { ImgContainer } from "../components/rockets/modules/ImgContainer";
import { ImgCursole } from "../components/rockets/modules/imgCursole";

export default function PopUpModel() {
  const isActiveRocket = useAppSelector((state) => state.common.activeRocketId);
  const dispatch = useAppDispatch();
  const [activeHeading, setActiveHeading] = useState("Overview");
  const rockets = useAppSelector((state) => state.common.rockets);
  const getRocketData = useMemo(() => {
    return rockets.find((rocket) => rocket.id === isActiveRocket);
  }, [isActiveRocket, rockets]);
  useEffect(() => {
    document.body.style.overflow = isActiveRocket ? "hidden" : "auto";
  }, [isActiveRocket]);
  if (!isActiveRocket) return null;

  return (
    <div
      style={{ background: "rgba(0, 0, 0, 0.7)" }}
      className="fixed inset-0 flex justify-center items-center z-[999] transition-all ease-out duration-300"
    >
      <div
        className={`relative z-[999] w-full mx-3 rounded-lg md:rounded-[14px] bg-white sm:w-[70%]  lg:w-[75%]  max-h-[90%] overflow-y-auto overflow-x-hidden scrollbar-gray transition-transform duration-500 p-8 ${isActiveRocket ? "translate-y-0" : "translate-y-[10%]"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex  justify-between items-center">
            <div className=" flex gap-2 items-center">
              <h2 className="text-xl font-semibold text-black">
                {getRocketData?.name}
              </h2>
              <div className="text-lg">
                {["Overview", "Photos"].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveHeading(item)}
                    className={`px-3 py-1 
                      hover:bg-gray-200
                      rounded-md ${item === activeHeading
                        ? " text-black font-semibold"
                        : "text-gray-500"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <RxCross2
                size={35}
                className=" cursor-pointer font-bold"
                onClick={() => dispatch(updateActiveRocketId(""))}
              />
            </div>
          </div>
          <div>
            <div className="py-4 h-full ">
              {activeHeading === "Overview" && (
                <div className=" flex flex-col items-center lg:items-start h-full w-full lg:flex-row gap-4 relative">
                  <ImgContainer
                    url={getRocketData?.flickr_images[0] || ""}
                    isActive={!!getRocketData?.success_rate_pct}
                  />
                  <div className="px-4 h-full ">
                    <div className=" shadow-lg w-full h-full p-4 rounded-xl min-h-96  overflow-hidden">
                      <h2 className="text-sm font-medium text-gray-500">
                        DESCRIPTION
                      </h2>
                      <p className=" text-black font-normal">
                        {getRocketData?.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeHeading === "Photos" && (
                <div>
                  <ImgCursole images={getRocketData?.flickr_images || []} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
