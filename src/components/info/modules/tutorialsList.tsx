import { useEffect, useState } from "react";
import { GetSyllabusTutorialListApi } from "../../../services/apis/apis";
import { useParams } from "react-router-dom";
import { ISyllabus, IDescription } from "../../../types";
interface IInfoTutorials {

    syllabus: ISyllabus[];
    description: IDescription[];

}
export function InfoTutorials() {
    const [tutorialsList, setTutorialsList] = useState<IInfoTutorials>({ syllabus: [], description: [] });
    const [accordion, setAccordion] = useState<number[]>([]);
    const [syllabusId, setSyllabusId] = useState<number>(0);
    // ? get id form url
    const { id } = useParams();
    useEffect(() => {
        if (!id) return alert('id not found')
        // ? utils for fetch data
        const fetchData = async () => {
            const response = await GetSyllabusTutorialListApi(id);
            if (response?.status === "success") {
                setTutorialsList(response.data);
            }
        };
        fetchData();
    }, [id]);
    console.log(tutorialsList)
    return (
        <>
            {tutorialsList?.syllabus.length && <div>
                {
                    tutorialsList.syllabus.map((item, index) => (
                        <div key={index}>
                            <div className={` ${ syllabusId === item.id ? ' border-blue-200 ' : ''} bg-white border border-transparent rounded-xl  `}>
                                <button
                                    onClick={() => {
                                        setAccordion(item.description)
                                        setSyllabusId(item.id)
                                    }}
                                    className=" inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-active-bordered-collapse-one">
                                    {item.name}
                                    <svg className="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                                    <svg className="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                                </button>
                                <div className={` ${syllabusId === item.id ? 'block' : 'hidden'} w-full overflow-hidden transition-[height] duration-300`}>
                                    <div className="pb-4 px-5">
                                        {
                                            tutorialsList.description.filter(desc => accordion?.includes(desc.id)).map((item, index) => (
                                                <div key={index} className="flex justify-between items-center py-2">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex justify-center items-center">
                                                            <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-sm text-gray-800 font-semibold">{item.name}</span>
                                                            <span className="text-xs text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum?</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-x-2">
                                                        <button className="text-blue-500 hover:text-blue-600">
                                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                                                        </button>
                                                        <button className="text-blue-500 hover:text-blue-600">
                                                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"></path></svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>}
        </>
    );
}