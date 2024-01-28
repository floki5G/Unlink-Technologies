import { useEffect, useState } from "react";
import Sidebar from "../../../features/Sidebar";
import { GetAllSyllabusApi } from "../../../services/apis/apis";
import { toast } from "react-toastify";
import { ISyllabus } from "../../../types";
import { InputCheckbox } from "../../../features/inputCheckbox";

export function AddSyllabus() {
  const [syllabusList, setSyllabusList] = useState<ISyllabus[]>([]);
  const [checkboxValue, setCheckboxValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    async function fetchSyllabus() {
      const response = await GetAllSyllabusApi();
      console.log(response.data);
      if (response?.status === "success") {
        toast.success("Syllabus fetched");
        setSyllabusList(response.data);
      }
    }
    fetchSyllabus();
  }, []);

  async function handleCreate() {
    try {
      setLoading(true);
    } catch (error) {
      toast.error("Something went wrong");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Sidebar
        id="tutorialls"
        heading="Add Syllabus"
        descripiton={"add syllabus to your tutorials"}
      >
        <div>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={handleCreate}
          >
            {loading ? (
              <div>
                <span
                  className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-white rounded-full"
                  role="status"
                  aria-label="loading"
                ></span>
                Loading
              </div>
            ) : (
              "Create"
            )}
          </button>
          {syllabusList.map((item, index) => (
            <div key={`add-syllabus-${item.name}-${index}`}>
              <InputCheckbox
                key={item.id}
                label={item.name}
                value={checkboxValue}
                setValue={setCheckboxValue}
              />
            </div>
          ))}
        </div>
      </Sidebar>
    </>
  );
}
