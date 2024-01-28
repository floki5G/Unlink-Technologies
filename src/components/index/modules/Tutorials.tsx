import { useState } from "react";
import {
  CreateTutorialApi,
  postTutorialCategoryApi,
} from "../../../services/apis/apis";
import Sidebar from "../../../features/Sidebar";
import Modal from "../../../features/Modal";
import { toast } from "react-toastify";
import { MdModeEdit } from "react-icons/md";
import { updateIsModalOpen } from "../../../redux/slices/common";
import { useAppDispatch, useAppSelector } from "../../../redux/configure-store";
import { Cards } from "../../../features/Cards";
import { updateTutorialById } from "../../../redux/slices/details";
export function Tutorials() {
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  const [tutorialsName, setTutorialsName] = useState("");
  const [tutorialsId, setTutorialsId] = useState<null | number>(null);
  const selectSyncData = useAppSelector((state) => state.details);

  async function handelCreateTutorialls(
    events: React.FormEvent<HTMLFormElement>,
  ) {
    events.preventDefault();
    try {
      setLoading(true);
      const payload = {
        name: tutorialsName,
        is_active: true,
        is_disabled: false,
      };
      const response = await CreateTutorialApi(payload);
      if (response?.status === "success") {
        toast.success(response?.message ?? "successfully created tutorials");
      } else {
        toast.error(
          response?.message ??
            "something went wrong please try again later or contact admin",
        );
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handelCategoriesList(id: number) {
    if (!id || !tutorialsId) return;
    const selectTutorials = selectSyncData?.tutorials?.filter(
      (tutorial) => tutorial.id === tutorialsId,
    );
    if (selectTutorials?.length) {
      const tutorial = selectTutorials[0];

      if (tutorial?.categories.includes(id)) {
        const newCategories = tutorial?.categories.filter(
          (item) => item !== id,
        );
        const payload = {
          display_order: 1,
          category_id: id,
          tutorial_id: tutorialsId,
          is_active: true,
          is_disabled: false,
        };
        const response = await postTutorialCategoryApi(payload);

        if (response.status === "success") {
          toast.success(response?.message ?? "successfully created tutorials");
          dispatch(
            updateTutorialById({
              id: tutorialsId,
              data: {
                categories: newCategories,
              },
            }),
          );
        }
      } else {
        const payload = {
          display_order: 1,
          category_id: id,
          tutorial_id: tutorialsId,
          is_active: true,
          is_disabled: true,
        };
        const response = await postTutorialCategoryApi(payload);
        if (response.status === "success") {
          toast.success(response?.message ?? "successfully created tutorials");
          const newCategories = [...tutorial?.categories, id];
          dispatch(
            updateTutorialById({
              id: tutorialsId,
              data: {
                categories: newCategories,
              },
            }),
          );
        }
      }
    }
  }
  return (
    <div className="">
      <Sidebar id="tutorialls" heading="Tutorials" descripiton="Tutorials">
        <form className="max-w-md " onSubmit={handelCreateTutorialls}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              value={tutorialsName}
              onChange={(e) => setTutorialsName(e.target.value)}
              type="text"
              name="tutorials_name"
              id="tutorials_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="tutorials_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              tutorials name
            </label>
          </div>
          <button
            type="submit"
            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
        </form>
      </Sidebar>

      <Modal
        id="categories"
        heading="categories"
        descripiton="add and edit categories"
      >
        <div>
          <form className="max-w-md " onSubmit={handelCreateTutorialls}>
            <div className="relative z-0 w-full mb-5 group">
              <input
                value={tutorialsName}
                onChange={(e) => setTutorialsName(e.target.value)}
                type="text"
                name="tutorials_name"
                id="tutorials_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required
              />
              <label
                htmlFor="tutorials_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                tutorials name
              </label>
            </div>

            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={() => {
                dispatch(updateIsModalOpen(false));
              }}
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
          </form>
          <div className=" mt-4">
            {selectSyncData?.categories?.map((item, index) => (
              <div
                className="relative flex items-start"
                key={`tutorialls-${item}-${index}`}
              >
                <div className="flex items-center h-5 mt-1">
                  <input
                    checked={
                      selectSyncData?.tutorials
                        ?.find((tutorial) => tutorial?.id === tutorialsId)
                        ?.categories.includes(item?.id) ?? false
                    }
                    id={`hs-checkbox-delete-${item?.id}`}
                    name={`hs-checkbox-delete-${item?.id}`}
                    value={item?.id}
                    onChange={(e) =>
                      handelCategoriesList(Number(e.target.value))
                    }
                    type="checkbox"
                    className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    aria-describedby="hs-checkbox-delete-description"
                  />
                </div>
                <label
                  htmlFor={`hs-checkbox-delete-${item?.id}`}
                  className="ms-3"
                >
                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
                    {item?.name}
                  </span>
                  <span
                    id="hs-checkbox-delete-description"
                    className="block text-sm text-gray-600 dark:text-gray-500"
                  >
                    {item?.description}
                  </span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <div className=" grid grid-cols-3 gap-4">
        {selectSyncData?.tutorials?.map((item, index) => (
          <Cards
            edit={
              <button
                onClick={() => {
                  dispatch(updateIsModalOpen(true));
                  setTutorialsId(item.id);
                }}
                type="button"
                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                <MdModeEdit /> Category
              </button>
            }
            key={item?.id}
            name={item?.name}
            description={""}
            icon={""}
            keyName={`tutorialls-${item?.id}-${index}`}
            link={`/info/${item?.id}`}
          />
        ))}
      </div>
    </div>
  );
}
