import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/configure-store";
import { ISyllabus } from "../../../types";
import { MdEdit } from "react-icons/md";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

export function InfoTutorials() {
  const navigate = useNavigate();
  const selectSyncData = useAppSelector((state) => state.details);

  const [syllabusId, setSyllabusId] = useState<number>(0);
  // ? get id form url
  const { id } = useParams();
  const slectedTutorial = selectSyncData.tutorials.filter(
    (tutorial) => tutorial?.id === Number(id),
  );
  return (
    <>
      {slectedTutorial.length && (
        <div>
          {slectedTutorial[0].s_list.map((item, index) => {
            const syllabus = selectSyncData.syllabus.filter(
              (syllabus: ISyllabus) => syllabus?.id === item,
            );
            if (!syllabus.length) return <></>;
            const syllabusDetails = syllabus[0];
            return (
              <div key={index}>
                <div
                  className={` ${syllabusId === syllabusDetails.id ? " border-blue-200 " : ""} bg-white border border-transparent rounded-xl  `}
                >
                  <div
                    onClick={() => {
                      setSyllabusId(Number(syllabusDetails?.id));
                    }}
                    className=" inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                    aria-controls="hs-basic-active-bordered-collapse-one"
                  >
                    <div className="flex items-center gap-x-3">
                      {syllabusDetails.name}

                      <button
                        type="button"
                        onClick={() => {
                          navigate(`/syllabus/${syllabusDetails.id}`);
                        }}
                        className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <MdEdit />
                      </button>
                    </div>

                    {syllabusId === syllabusDetails.id ? (
                      <LuChevronDown />
                    ) : (
                      <LuChevronUp />
                    )}
                  </div>
                  <div
                    className={` ${syllabusId === syllabusDetails.id ? "block" : "hidden"} w-full overflow-hidden transition-[height] duration-300`}
                  >
                    <div className="pb-4 px-5">
                      {syllabusDetails?.d_list.map((item, index) => {
                        const description = selectSyncData.descriptions.filter(
                          (description) => description?.id === item,
                        );

                        if (!description.length) return <></>;
                        const descriptionDetails = description[0];
                        return (
                          <div
                            key={index}
                            className="flex justify-between items-center py-2"
                          >
                            <div className="flex items-center gap-x-3">
                              <div className="flex flex-col">
                                <span className="text-sm text-gray-800 font-semibold">
                                  {descriptionDetails.name}
                                </span>
                              </div>
                            </div>

                            <button
                              onClick={() => {
                                navigate(
                                  `/description/${descriptionDetails.id}`,
                                );
                              }}
                              className="text-blue-500 hover:text-blue-600"
                            >
                              <MdEdit />
                            </button>
                            <hr className="my-2 border-gray-200 dark:border-gray-700" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <hr className="my-2 border-gray-200 dark:border-gray-700" />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
