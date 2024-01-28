import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/configure-store";
import { toast } from "react-toastify";
import { updateSyllabusById } from "../../../redux/slices/details";
import { postDescriptionListApi } from "../../../services/apis/apis";
import Sidebar from "../../../features/Sidebar";

export function DescriptionList() {
  const location = useLocation();

  const selectSyncData = useAppSelector((state) => state.details);
  const dispatch = useAppDispatch();
  const queryParams = new URLSearchParams(location.search);
  const syllabus_id = Number(queryParams.get("syllabus_id"));
  async function handelSyllabusList(d_id: number) {
    if (!d_id || !syllabus_id) return;
    const selectSyllabus = selectSyncData?.syllabus?.filter(
      (s) => s.id === Number(syllabus_id),
    );
    if (selectSyllabus?.length) {
      const syllabus = selectSyllabus[0];

      if (syllabus?.d_list.includes(d_id)) {
        const newDescription = syllabus?.d_list.filter((item) => item !== d_id);
        const payload = {
          display_order: 1,
          syllabus_id: syllabus_id,
          description_id: d_id,
          is_active: true,
          is_disabled: false,
        };
        const response = await postDescriptionListApi(payload);

        if (response.status === "success") {
          toast.success(response?.message ?? "successfully created tutorials");
          dispatch(
            updateSyllabusById({
              id: syllabus_id,
              data: {
                d_list: newDescription,
              },
            }),
          );
        }
      } else {
        const payload = {
          display_order: 1,
          syllabus_id: syllabus_id,
          description_id: d_id,
          is_active: true,
          is_disabled: false,
        };
        const response = await postDescriptionListApi(payload);
        if (response.status === "success") {
          toast.success(response?.message ?? "successfully created tutorials");
          const newDescription = [...syllabus?.d_list, d_id];
          dispatch(
            updateSyllabusById({
              id: syllabus_id,
              data: {
                d_list: newDescription,
              },
            }),
          );
        }
      }
    }
  }
  return (
    <>
      <Sidebar
        id="categories"
        heading="categories"
        descripiton="add and edit categories"
      >
        <div>
          <div className=" mt-4">
            {selectSyncData?.descriptions?.map((desc, index) => (
              <div
                className="relative flex items-start"
                key={`syllabus-${desc.id}-${index}`}
              >
                <div className="flex items-center h-5 mt-1">
                  <input
                    checked={
                      !!selectSyncData?.syllabus
                        ?.find((s) => s?.id === Number(syllabus_id))
                        ?.d_list.includes(Number(desc.id)) ?? false
                    }
                    id={`checkbox-description-${desc?.id}`}
                    name={`checkbox-description-${desc?.id}`}
                    value={desc?.id}
                    onChange={(e) => handelSyllabusList(Number(e.target.value))}
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    aria-describedby={`checkbox-description-${desc?.id}`}
                  />
                </div>
                <label
                  htmlFor={`checkbox-description-${desc?.id}`}
                  className="ms-3"
                >
                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                    {desc?.name}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </Sidebar>
    </>
  );
}
