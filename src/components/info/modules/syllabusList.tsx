import { useParams } from "react-router-dom";
import Modal from "../../../features/Modal";
import { useAppDispatch, useAppSelector } from "../../../redux/configure-store";
import { toast } from "react-toastify";
import { updateTutorialById } from "../../../redux/slices/details";
import { postTutorialSyllabusApi } from "../../../services/apis/apis";

export function AddSyllabusList() {
  const selectSyncData = useAppSelector((state) => state.details);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  async function handelSyllabusList(s_id: number) {
    if (!s_id || !id) return;
    const selectTutorials = selectSyncData?.tutorials?.filter(
      (s) => s.id === Number(id),
    );
    if (selectTutorials?.length) {
      const tutorial = selectTutorials[0];

      if (tutorial?.s_list.includes(s_id)) {
        const newSyllabus = tutorial?.s_list.filter((item) => item !== s_id);
        const payload = {
          display_order: 1,
          tutorial_id: Number(id),
          syllabus_id: Number(s_id),
          is_active: true,
          is_disabled: false,
        };
        const response = await postTutorialSyllabusApi(payload);

        if (response.status === "success") {
          toast.success(response?.message ?? "successfully created tutorials");
          dispatch(
            updateTutorialById({
              id: Number(id),
              data: {
                s_list: newSyllabus,
              },
            }),
          );
        }
      } else {
        const payload = {
          display_order: 1,
          tutorial_id: Number(id),
          syllabus_id: Number(s_id),
          is_active: true,
          is_disabled: false,
        };
        const response = await postTutorialSyllabusApi(payload);
        if (response.status === "success") {
          toast.success(response?.message ?? "successfully created tutorials");
          const newSyllabus = [...tutorial?.s_list, s_id];
          dispatch(
            updateTutorialById({
              id: Number(id),
              data: {
                s_list: newSyllabus,
              },
            }),
          );
        }
      }
    }
  }
  return (
    <>
      <Modal
        id="categories"
        heading="categories"
        descripiton="add and edit categories"
      >
        <div>
          <div className=" mt-4">
            {selectSyncData?.syllabus?.map((item, index) => (
              <div
                className="relative flex items-start"
                key={`syllabus-${item}-${index}`}
              >
                <div className="flex items-center h-5 mt-1">
                  <input
                    checked={
                      !!selectSyncData?.tutorials
                        ?.find((tutorial) => tutorial?.id === Number(id))
                        ?.s_list.includes(Number(item.id)) ?? false
                    }
                    id={`checkbox-syllabus-${item?.id}`}
                    name={`checkbox-syllabus-${item?.id}`}
                    value={item?.id}
                    onChange={(e) => handelSyllabusList(Number(e.target.value))}
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    aria-describedby={`checkbox-syllabus-${item?.id}`}
                  />
                </div>
                <label
                  htmlFor={`checkbox-syllabus-${item?.id}`}
                  className="ms-3"
                >
                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                    {item?.name}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
