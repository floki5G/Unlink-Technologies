import { useEffect, useState } from "react";
import { GetTutoriallsApi } from "../../../services/apis/apis";
import { ITutorialls } from "../../../types";
import { useNavigate } from "react-router-dom";

export function Tutorials() {
  const navigate = useNavigate();
  const [tutorialsList, setTutorialsList] = useState<ITutorialls[]>([]);

  useEffect(() => {
    // ? utils for fetch data
    const fetchData = async () => {
      const response = await GetTutoriallsApi();
      if (response?.status === "success") {
        setTutorialsList(response.data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" flex gap-4">
      {tutorialsList?.map((item, index) => (
        <button
          key={`tutorialls-${item}-${index}`}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700"
          onClick={() => {
            // handle click event
            navigate(`/info/${item.id}`);
          }}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item.name}
          </h5>
          {/* <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p> */}
        </button>
      ))}
    </div>
  );
}
