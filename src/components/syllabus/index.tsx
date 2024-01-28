import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { InputCheckbox } from "../../features/inputCheckbox";
import { PostSyllabusUpsertApi } from "../../services/apis/apis";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/configure-store";
import {
  updateAddNewByProperty,
  updateSyllabusById,
} from "../../redux/slices/details";

export function SyllabusComponent() {
  const dispatch = useAppDispatch();
  const selectSyncData = useAppSelector((state) => state.details);
  const [syllabusName, setSyllabusName] = useState<string>("");
  const [syllabusDescription, setSyllabusDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [checkboxValue, setCheckboxValue] = useState<number>(0);
  const { id } = useParams();
  useEffect(() => {
    if (!id) return;
    const syllabusDetails = selectSyncData.syllabus.filter(
      (syllabus) => syllabus?.id === Number(id),
    );
    if (!syllabusDetails.length) return;
    setSyllabusName(syllabusDetails[0].name);
    setSyllabusDescription(syllabusDetails[0].description);
    setCheckboxValue(Number(syllabusDetails[0].is_primary));
  }, [id, selectSyncData.syllabus]);

  async function handleCreate() {
    try {
      setLoading(true);

      const payload = {
        id: id ? Number(id) : undefined,
        name: syllabusName,
        description: syllabusDescription,
        is_active: true,
        is_disabled: false,
        is_primary: Boolean(checkboxValue),
      };
      const res = await PostSyllabusUpsertApi(payload);
      if (res.status === "success") {
        toast.success("syllabus created successfully");
        if (id) {
          dispatch(
            updateSyllabusById({
              id: res.data.id,
              data: res.data,
            }),
          );
        } else {
          dispatch(
            updateAddNewByProperty({
              property: "syllabus",
              data: res.data,
            }),
          );
        }
      }
    } catch (error) {
      toast.error("something went wrong please try again later ");
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <div>
        <input
          value={syllabusName}
          onChange={(e) => setSyllabusName(e.target.value)}
          type="text"
          name="tutorials_name"
          id="tutorials_name"
          placeholder="Syllabus Name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          required
        />
        <div>
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            syllabus Description
          </label>
          <textarea
            value={syllabusDescription}
            onChange={(e) => setSyllabusDescription(e.target.value)}
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>

        <InputCheckbox
          key={`add-syllabus-checkbox-primary`}
          label={"is this syllabus is primary course?"}
          value={checkboxValue}
          setValue={setCheckboxValue}
        />
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
          ) : id ? (
            "Update"
          ) : (
            "Create"
          )}
        </button>
      </div>
    </>
  );
}
