import { useState } from "react";
import { SyncDataApi } from "../../../services/apis/apis";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../redux/configure-store";
import { updateDetailsStatus } from "../../../redux/slices/details";

export function SyncComponent() {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleSyncData = async () => {
    try {
      setLoading(true);
      const response = await SyncDataApi();
      if (response?.status === "success") {
        toast.success("Synced");
        dispatch(updateDetailsStatus(response.data));
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div
        className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 my-2"
        role="alert"
      >
        <div className="flex p-4">
          <div className=" mr-2">
            {loading ? (
              <div
                className="animate-spin inline-block w-4 h-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <div className="flex-shrink-0">
                <svg
                  className="flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
              </div>
            )}
          </div>

          <p className="text-sm text-gray-700 dark:text-gray-400">
            click here to update latest data
          </p>

          <div className="ms-auto flex items-center space-x-3">
            <button
              onClick={handleSyncData}
              type="button"
              className="nline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-blue-800 dark:text-blue-500 dark:focus:text-blue-400"
            >
              Sync
            </button>
            {/* <button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white">
                            <span className="sr-only">Close</span>
                            <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
